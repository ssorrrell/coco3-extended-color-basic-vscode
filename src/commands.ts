import { Disposable, window, workspace } from "vscode";
import * as childProcess from "child_process";
import path from "path";
import localize from "./localize";
import * as fs from "fs";

const configuration = workspace.getConfiguration("ecb2");

const vbsOut = window.createOutputChannel("ecb2vscode");

let runner: childProcess.ChildProcessWithoutNullStreams;

const scriptInterpreter: string = configuration.get<string>("interpreter");

let statbar: Disposable;

export function crunch(): void {
  // if (!window.activeTextEditor)
  //   return;

  // try {
  //   fs.accessSync(scriptInterpreter, fs.constants.X_OK);
  // } catch {
  //   window.showErrorMessage(`${localize("ecb2.msg.interpreterRunError")} ${ scriptInterpreter}`);
  // }

  // const doc = window.activeTextEditor.document;
  // doc.save().then(() => {
  //   vbsOut.clear();
  //   vbsOut.show(true);

  //   const workDir = path.dirname(doc.fileName);

  //   if (statbar)
  //     statbar.dispose();

  //   statbar = window.setStatusBarMessage(localize("ecb2.msg.runningscript"));

  //   runner = childProcess.spawn(scriptInterpreter, [doc.fileName], {
  //     cwd: workDir
  //   });

  //   runner.stdout.on("data", data => {
  //     const output = data.toString();
  //     vbsOut.append(output);
  //   });

  //   runner.stderr.on("data", data => {
  //     const output = data.toString();
  //     vbsOut.append(output);
  //   });

  //   runner.on("exit", code => {
  //     vbsOut.appendLine(`Process exited with code ${code}`);
  //     statbar.dispose();
  //   });
  // }, () => {
  //   window.showErrorMessage("Document can' be saved");

  //   return;
  // });
}

// export function killScript(): void {
//   // runner.stdin.pause();
//   runner?.kill();
//   statbar?.dispose();
// }
