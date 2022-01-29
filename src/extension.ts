import { commands, ExtensionContext, workspace, window } from 'vscode'
import * as fs from 'fs'
import path from 'path'
import hoverProvider from './hover'
import completionProvider from './completion'
import symbolsProvider from './symbols'
import signatureProvider from './signature'
import definitionProvider from './definition'
import colorProvider from './colorprovider'
import launchProvider from './Launcher'
import * as cmds from './commands'
import { IncludeFile, Includes, reloadImportDocuments } from './Includes'
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from 'vscode-languageclient/node'

// Defines the search path of your language server DLL. (.NET Core)
const languageServerPaths = [
  'server/BASICLanguageServer.dll',
  './BASICLanguageServer/bin/Debug/net5.0/BASICLanguageServer.dll',
]

let client: LanguageClient | undefined

async function activateLanguageServer(context: ExtensionContext) {
  // The server is implemented in an executable application.
  let serverModule: string | undefined
  for (let p of languageServerPaths) {
    p = context.asAbsolutePath(p)
    try {
      await fs.promises.access(p)
      serverModule = p
      break
    } catch (err) {
      console.log(`Path Failed ${p}`)
      // Skip this path.
    }
  }
  if (!serverModule)
    throw new URIError('Cannot find the language server module.')
  const workPath = path.dirname(serverModule)
  console.log(`Use ${serverModule} as server module.`)
  console.log(`Work path: ${workPath}.`)

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: {
      command: 'dotnet',
      args: [serverModule],
      options: { cwd: workPath },
    },
    debug: {
      command: 'dotnet',
      args: [serverModule, '--debug'],
      options: { cwd: workPath },
    },
  }
  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [{ scheme: 'file', language: 'ecb2' }],
    synchronize: {
      // Synchronize the setting section 'languageServerExample' to the server
      configurationSection: 'basicLanguageServer',
      // Notify the server about file changes to '.clientrc files contain in the workspace
      fileEvents: [
        workspace.createFileSystemWatcher('**/.clientrc'),
        workspace.createFileSystemWatcher('**/.demo'),
      ],
    },
  }

  // Create the language client and start the client.
  client = new LanguageClient(
    'basicLanguageServer',
    'BASIC Language Server',
    serverOptions,
    clientOptions,
    true
  )
  console.log('activate/start language server')
  const disposable = client.start()

  // Push the disposable to the context's subscriptions so that the
  // client can be deactivated on extension deactivation
  context.subscriptions.push(disposable)
}

export async function activate(context: ExtensionContext): Promise<void> {
  Includes.set(
    'Global',
    new IncludeFile(context.asAbsolutePath('./GlobalDefs.ecb2'))
  )
  Includes.set(
    'ObjectDefs',
    new IncludeFile(context.asAbsolutePath('./ObjectDefs.ecb2'))
  )

  workspace.onDidChangeConfiguration(reloadImportDocuments)
  reloadImportDocuments()

  context.subscriptions.push(
    hoverProvider,
    completionProvider
    //   symbolsProvider,
    //   signatureProvider,
    //   definitionProvider,
    //   colorProvider,
    //   launchProvider.launchConfigProvider,
    //   launchProvider.inlineDebugAdapterFactory
  )

  await activateLanguageServer(context)

  // Run Script Command
  commands.registerCommand('ecb2.crunch', () => {
    cmds.crunch()
  })

  // Renumber Script Command
  commands.registerCommand('ecb2.renumber', () => {
    cmds.renumber()
  })

  // The command has been defined in the package.json file
  const disposable = commands.registerCommand('extension.sayHello', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    window.showInformationMessage('Hello World!')
  })

  // Kill running script command
  // commands.registerCommand("vbs.killScript", () => {
  //   cmds.killScript();
  // });
  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export async function deactivate(): Promise<void> {
  console.log('deactivate/stop language server')
  client?.stop()
}
