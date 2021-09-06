/* eslint-disable @typescript-eslint/no-inferrable-types */
import { languages, Hover, TextDocument, Position, Range } from "vscode";
import * as PATTERNS from "./patterns";
import { getImportsWithLocal, IncludeFile, Markdowns } from "./Includes";
import * as pathns from "path";

const LANGUAGE: string = "ecb2";

function GetHoverText(matches: RegExpExecArray): Hover[] {
  const results: Hover[] = [];
  let value: string = "";

  if (matches) {
    if (matches[1]) {
      //could we provide a jump to definition here?
      const summary = PATTERNS.COMMENT_SUMMARY.exec(matches[1]);
      if (summary[1]) {
        value = `${matches[2]} ${summary[1]}`;
      } else {
        value = `${matches[2]}`;
      }
    } else {
      value = `${matches[2]}`;
    }
  }
  console.log("GetHoverText", value);
  if (value.length > 0) {
    results.push(new Hover({ language: LANGUAGE, value: value }));
  }

  return results;
}

function GetHoverLineNoText(matches: RegExpExecArray): Hover[] {
  const results: Hover[] = [];
  const value: string = "";

  console.log("GetHoverLineNoText", matches);
  // if (matches) {
  //   if (matches[1]) {
  //     //could we provide a jump to definition here?
  //     const summary = PATTERNS.COMMENT_SUMMARY.exec(matches[1]);
  //     if (summary[1]) {
  //       value = `${matches[2]} ${summary[1]}`;
  //     } else {
  //       value = `${matches[2]}`;
  //     }
  //   } else {
  //     value = `${matches[2]}`;
  //   }
  // }
  console.log("GetHoverLineNoText", value);
  if (value.length > 0) {
    results.push(new Hover({ language: LANGUAGE, value: value }));
  }

  return results;
}

function GetHover(docText: string, lookup: string): Hover[] {
  console.log("GetHover", lookup);
  const results: Hover[] = [];

  const filename: string = `../markdown/${lookup.toLocaleLowerCase()}.md`;

  if (!Markdowns.has(lookup))
    Markdowns.set(lookup, new IncludeFile(filename));
  console.log(lookup, Markdowns.get(lookup).Content);
  results.push(new Hover({ language: LANGUAGE, value: Markdowns.get(lookup).Content }));


  // const matches: RegExpExecArray = PATTERNS.DEF(docText, lookup);
  // const tempResults = GetHoverText(matches);
  // console.log("GetHover1 docText", docText);
  // console.log("GetHover1 lookup", lookup);
  // console.log("GetHover1 matches", matches);
  // if (tempResults.length > 0) {
  //   results.push(...tempResults);
  // }

  // const matches = PATTERNS.DEFVAR(docText, lookup);
  // const tempResults = GetHoverText(matches);
  // console.log("GetHover2", matches, lookup);
  // if (tempResults.length > 0) {
  //   results.push(...tempResults);
  // }

  // matches = PATTERNS.LINENO(docText, lookup);
  // tempResults = GetHoverLineNoText(matches);
  // console.log("GetHover3", matches, lookup);
  // if (tempResults.length > 0) {
  //   results.push(...tempResults);
  // }

  return results;
}


function GetParamHover(text: string, lookup: string): Hover[] {
  const hovers: Hover[] = [];

  // let matches: RegExpExecArray;
  // console.log("GetParamHover", text);
  // while (matches = PATTERNS.FUNCTION.exec(text)) {
  //   console.log("GetParamHover2", matches);
  //   matches[6]?.split(",")
  //     .filter(p => p.trim() === lookup)
  //     .forEach(() => {
  //       hovers.push(new Hover({ language: LANGUAGE, value: `${lookup} ' [Parameter]` }));
  //     });
  // }

  // last result should be nearest hit
  return hovers.length > 0 ? [hovers[hovers.length - 1]] : [];
}

function provideHover(doc: TextDocument, position: Position): Hover {
  const wordRange = doc.getWordRangeAtPosition(position);
  const word: string = wordRange ? doc.getText(wordRange) : "";
  const line = doc.lineAt(position).text;

  const hoverresults: Hover[] = [];

  if (word.trim() === "")
    return null;
  if (!new RegExp("^[^'|REM]*").test(line))
    return null; //kickout lines that start with REM
  //count double quotes and exit if they are not in matching pairs
  let count = 0;
  for (let i = 0; i < position.character; i++) {
    if (line[i] === '"') count++;
  }
  if (count % 2 === 1) {
    return null;
  }
  hoverresults.push(...GetHover(doc.getText(), word));

  //lookup functions from function definition file
  // for (const ExtraDocText of getImportsWithLocal(doc)) {
  //   console.log("getImportsWithLocal", word);
  //   hoverresults.push(...GetHover(ExtraDocText[1].Content, word));
  // }

  // hoverresult for param must be above
  //hoverresults.push(...GetParamHover(doc.getText(new Range(new Position(0, 0), new Position(position.line + 1, 0))), word));

  return hoverresults.length > 0 ? hoverresults[0] : null;
}


export default languages.registerHoverProvider(
  { scheme: "file", language: LANGUAGE },
  { provideHover }
);
