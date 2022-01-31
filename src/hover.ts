/* eslint-disable max-statements */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  languages,
  Hover,
  TextDocument,
  Position,
  Range,
  MarkdownString,
} from 'vscode'
import * as PATTERNS from './patterns'
import {
  getImportsWithLocal,
  IncludeFile,
  Markdowns,
  getMarkdownPath,
} from './Includes'
import * as pathns from 'path'
import * as Tokens from './tokens'
import { mkdirSync } from 'fs'

const LANGUAGE: string = 'ecb2'

function GetHoverText(matches: RegExpExecArray): Hover[] {
  const results: Hover[] = []
  let value: string = ''

  if (matches) {
    if (matches[1]) {
      //could we provide a jump to definition here?
      const summary = PATTERNS.COMMENT_SUMMARY.exec(matches[1])
      if (summary[1]) {
        value = `${matches[2]} ${summary[1]}`
      } else {
        value = `${matches[2]}`
      }
    } else {
      value = `${matches[2]}`
    }
  }
  //console.log("GetHoverText", value);
  if (value.length > 0) {
    results.push(new Hover({ language: LANGUAGE, value: value }))
  }

  return results
}

function GetHoverLineNoText(matches: RegExpExecArray): Hover[] {
  const results: Hover[] = []
  const value: string = ''

  //console.log("GetHoverLineNoText", matches);
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
  //console.log("GetHoverLineNoText", value);
  if (value.length > 0) {
    results.push(new Hover({ language: LANGUAGE, value: value }))
  }

  return results
}

function GetHover(lookup: string, range: Range): Hover[] {
  //console.log('GetHover', lookup)
  const results: Hover[] = []

  const token: string = Tokens.getToken(lookup)
  //console.log("GetHover", token);

  const filename: string = `${getMarkdownPath()}/${token.toLowerCase()}.md`

  if (!Markdowns.has(token)) Markdowns.set(token, new IncludeFile(filename))
  const hoverText: MarkdownString = CreateMarkdownString(
    Markdowns.get(token).Content
  )
  //console.log('GetHover token', token, Markdowns.get(token).Content, hoverText)
  if (hoverText) results.push(new Hover(hoverText, range))

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

  return results
}

/**
 * Create MarkdownString for hover text
 * @param value file contents to display in hover
 * @returns MarkdownString to display
 */
function CreateMarkdownString(value: string): MarkdownString {
  if (!value || value.length == 0) return null
  const ms: MarkdownString = new MarkdownString()
  ms.isTrusted = true
  ms.supportHtml = true
  ms.supportThemeIcons = true
  ms.value = value
  return ms
}

function GetParamHover(doc: TextDocument, lookup: string): Hover[] {
  const hovers: Hover[] = []
  //console.log('GetParamHover', text, lookup)

  let varPattern: string
  if (lookup.endsWith('$', lookup.length - 1)) {
    //string
    varPattern = PATTERNS.STRING_VAR.replace('{0}', lookup)
  } else {
    //number
    varPattern = PATTERNS.NUMBER_VAR.replace('{0}', lookup)
  }
  //console.log('varPattern', varPattern)
  const regexp = new RegExp(varPattern)

  //iterate the doc and find the line number that DIMs the variable
  for (let lineNo = 0; lineNo < doc.lineCount; lineNo++) {
    const lineText = doc.lineAt(lineNo).text
    const isFound = regexp.test(lineText)
    if (isFound) {
      hovers.push(new Hover({ language: LANGUAGE, value: `${lineText}` }))
    }
  }

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
  //console.log('hovers', hovers)
  return hovers.length > 0 ? [hovers[hovers.length - 1]] : []
}

function provideHover(doc: TextDocument, position: Position): Hover {
  //console.log('provideHover')
  let wordRange = doc.getWordRangeAtPosition(position)
  if (wordRange === undefined) {
    wordRange = doc.getWordRangeAtPosition(position, PATTERNS.SINGLE_LETTER_VAR)
  }
  const word: string = wordRange ? doc.getText(wordRange) : ''
  const line = doc.lineAt(position).text

  //console.log('provideHover', word, line, position)

  const hoverresults: Hover[] = []

  if (word.trim() === '') {
    //console.log('provideHover return', word, line, position, wordRange)
    return null
  }
  if (!new RegExp("^[^'|REM]*").test(line)) return null //kickout lines that start with REM
  //count double quotes and exit if they are not in matching pairs
  let count = 0
  for (let i = 0; i < position.character; i++) {
    if (line[i] === '"') count++
    //console.log('provideHover increment double quote')
  }
  if (count % 2 === 1) {
    //console.log('provideHover return2')
    return null
  }
  const keywordHover = GetHover(word, wordRange)
  if (keywordHover && keywordHover.length > 0)
    hoverresults.push(...keywordHover)

  //lookup functions from function definition file
  // for (const ExtraDocText of getImportsWithLocal(doc)) {
  //   console.log("getImportsWithLocal", word);
  //   hoverresults.push(...GetHover(ExtraDocText[1].Content, word));
  // }

  // hoverresult for param must be above
  const variableHover = GetParamHover(doc, word)
  //console.log('docRange', 0, position.line)
  if (variableHover && variableHover.length > 0)
    hoverresults.push(...variableHover)
  //console.log('hoverresults', hoverresults)

  return hoverresults.length > 0 ? hoverresults[0] : null
}

export default languages.registerHoverProvider(
  { scheme: 'file', language: LANGUAGE },
  { provideHover }
)
