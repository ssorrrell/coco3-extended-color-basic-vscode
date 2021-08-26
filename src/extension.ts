import { commands, ExtensionContext, workspace } from "vscode";
import hoverProvider from "./hover";
import completionProvider from "./completion";
import symbolsProvider from "./symbols";
import signatureProvider from "./signature";
import definitionProvider from "./definition";
import colorProvider from "./colorprovider";
import launchProvider from "./Launcher";
import * as cmds from "./commands";
import { IncludeFile, Includes, reloadImportDocuments } from "./Includes";

export function activate(context: ExtensionContext): void {
  Includes.set("Global", new IncludeFile(context.asAbsolutePath("./GlobalDefs.ecb2")));
  Includes.set("ObjectDefs", new IncludeFile(context.asAbsolutePath("./ObjectDefs.ecb2")));

  workspace.onDidChangeConfiguration(reloadImportDocuments);
  reloadImportDocuments();

  context.subscriptions.push(hoverProvider
  //   completionProvider,
  //   symbolsProvider,
  //   signatureProvider,
  //   definitionProvider,
  //   colorProvider,
  //   launchProvider.launchConfigProvider,
  //   launchProvider.inlineDebugAdapterFactory
  );

  // Run Script Command
  // commands.registerCommand("ecb2.crunch", () => {
  //   cmds.crunch();
  // });

  // Kill running script command
  // commands.registerCommand("vbs.killScript", () => {
  //   cmds.killScript();
  // });
}
