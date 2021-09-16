/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-statements */
import { languages, CompletionItem, CompletionItemKind, TextDocument, Position } from "vscode";
import definitions from "./definitions";
import * as PATTERNS from "./patterns";

function getVariablesFromDim(variableList: string):string[] {
  const wordList: string[] = [];
  let word: string = "";
  let isArray: boolean = false;
  for (let j = 0; j < variableList.length; j++) {
    if (variableList[j]===" ") continue; //skip spaces
    if (variableList[j]==="(") {
      isArray = true; //comma in paren
    } else if (variableList[j]===")") {
      isArray = false; //comma in paren
    } else if (!isArray && variableList[j]===",") {
      //close out word
      wordList.push(word);
      word = "";
      continue;
    }
    //increment word
    word += variableList[j];
  }
  if (word.length > 0) {
    wordList.push(word);
  }

  return wordList;
}

function getVariableCompletions(text: string): CompletionItem[] {
  const CIs: CompletionItem[] = []; // results
  const foundVals = new Array<string>(); // list to prevent doubles

  //const matches: RegExpExecArray = PATTERNS.VAR.exec(text);
  //console.log("getVariableCompletions", text, matches);
  let matches: RegExpExecArray;
  while (matches = PATTERNS.VAR.exec(text)) {
    const variableList: string = matches[1];
    const wordList: string[] = getVariablesFromDim(variableList);

    for (const name of wordList) {
      if (foundVals.indexOf(name.toLowerCase()) === -1) {
        foundVals.push(name.toLowerCase());

        let completionName: string = name;
        const pos = name.indexOf("(");
        let arrayDimension: string = "";
        if (pos > 0) {
          completionName = name.substring(0, pos);
          arrayDimension = name.substring(pos);
        }

        let details: string = "";
        if (completionName.length > 0 && completionName.endsWith("$")) {
          details = "String";
        } else {
          details = "Number";
        }
        if (arrayDimension.length > 0) {
          details += ` Array ${arrayDimension}`;
        }

        // if (new RegExp(PATTERNS.COLOR, "i").test(name)) {
        //   ci.kind = CompletionItemKind.Color;
        //   ci.filterText = `ColorConstants.${name}`;
        //   ci.insertText = name;
        // }

        const ci = new CompletionItem(completionName, CompletionItemKind.Variable);
        ci.detail = `${details}`;

        CIs.push(ci);
      }
    }
  }

  return CIs;
}

function getCompletions(text: string) {
  return [...getVariableCompletions(text)];
}

function provideCompletionItems(doc: TextDocument, position: Position): CompletionItem[] {
  console.log("provideCompletionItems");
  const codeAtPosition = doc.lineAt(position).text.substring(0, position.character);

  // Remove completion offerings from commented lines
  const line = doc.lineAt(position);
  if (line.text.charAt(line.firstNonWhitespaceCharacterIndex) === "'")
    return [];

  // no Completion during writing a definition, still buggy
  // if (PATTERNS.VAR_COMPLS.test(codeAtPosition))
  //   return [];

  // no completion within open string
  let quoteCount = 0;
  for (const char of codeAtPosition)
    if (char === '"') quoteCount++;
  if (quoteCount % 2 === 1)
    return [];

  const text = doc.getText();
  const retCI: CompletionItem[] = [];

  // show global members
  retCI.push(...definitions);
  retCI.push(...getCompletions(text));

  // for (const item of localIncludes)
  //   if (item[0].startsWith("Include") || item[0] === "Global")
  //     retCI.push(...getCompletions(item[1].Content));

  return retCI;
}

export default languages.registerCompletionItemProvider(
  { scheme: "file", language: "ecb2" },
  { provideCompletionItems }, " "
);
