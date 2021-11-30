/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-var-requires */
//import keywords from "./keywords.json";
//import operators from "./operators.json";
import { getLocale } from '../Includes'
import { CompletionItem, CompletionItemKind } from 'vscode'

const LANGUAGE: string = 'ecb2'

const keywords = require(`./${getLocale()}/${LANGUAGE}/keywords.json`)
const sound = require(`./${getLocale()}/${LANGUAGE}/sound.json`)
const video = require(`./${getLocale()}/${LANGUAGE}/video.json`)
const functions = require(`./${getLocale()}/${LANGUAGE}/functions.json`)
const files = require(`./${getLocale()}/${LANGUAGE}/files.json`)
const operators = require(`./${getLocale()}/${LANGUAGE}/operators.json`)

const completions = new Array<CompletionItem>()

for (const entry in keywords) {
  const itm = new CompletionItem(entry, CompletionItemKind.Keyword)
  itm.detail = keywords[entry]?.documentation
  //itm.documentation = keywords[entry]?.documentation;
  completions.push(itm)
}

for (const entry in sound) {
  const itm = new CompletionItem(entry, CompletionItemKind.Unit)
  itm.detail = functions[entry]?.documentation
  //itm.documentation = functions[entry]?.documentation;
  completions.push(itm)
}

for (const entry in video) {
  const itm = new CompletionItem(entry, CompletionItemKind.Color)
  itm.detail = functions[entry]?.documentation
  //itm.documentation = functions[entry]?.documentation;
  completions.push(itm)
}

for (const entry in files) {
  const itm = new CompletionItem(entry, CompletionItemKind.File)
  itm.detail = functions[entry]?.documentation
  //itm.documentation = functions[entry]?.documentation;
  completions.push(itm)
}

for (const entry in functions) {
  const itm = new CompletionItem(entry, CompletionItemKind.Function)
  itm.detail = functions[entry]?.documentation
  //itm.documentation = functions[entry]?.documentation;
  completions.push(itm)
}

for (const entry in operators) {
  const itm = new CompletionItem(entry, CompletionItemKind.Operator)
  itm.detail = operators[entry]?.documentation
  //itm.documentation = operators[entry]?.documentation;
  itm.filterText = `Operator ${entry}`
  completions.push(itm)
}

export default completions
