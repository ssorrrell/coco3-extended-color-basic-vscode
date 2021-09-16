/* eslint-disable @typescript-eslint/no-inferrable-types */
//import keywords from "./keywords.json";
//import operators from "./operators.json";
import { getLocale } from "../Includes";

import { CompletionItem, CompletionItemKind } from "vscode";

const LANGUAGE: string = "ecb2";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { keywords } = require(`./${getLocale()}/${LANGUAGE}/keywords.json`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { operators } = require(`./${getLocale()}/${LANGUAGE}/operators.json`);

const completions = new Array<CompletionItem>();

for (const entry in keywords) {
  const itm = new CompletionItem(entry, CompletionItemKind.Keyword);
  itm.detail = keywords[entry]?.documentation;
  //itm.documentation = keywords[entry]?.documentation;
  completions.push(itm);
}

for (const entry in operators) {
  const itm = new CompletionItem(entry, CompletionItemKind.Operator);
  itm.detail = operators[entry]?.documentation;
  //itm.documentation = operators[entry]?.documentation;
  itm.filterText = `Operator ${entry}`;
  completions.push(itm);
}

export default completions;
