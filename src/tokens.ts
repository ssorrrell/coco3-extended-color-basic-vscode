/* eslint-disable max-statements */
/* eslint-disable complexity */
import * as PATTERNS from './patterns'

function onGosub(lookup: string): string {
  let token = ''
  const matches = PATTERNS.ON_GOSUB.exec(lookup)
  if (matches?.length > 0) token = 'on gosub'

  return token
}

function onGoto(lookup: string): string {
  let token = ''
  const matches = PATTERNS.ON_GOTO.exec(lookup)
  if (matches?.length > 0) token = 'on goto'

  return token
}

function paletteCmp(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PALETTE_CMP.exec(lookup)
  if (matches?.length > 0) token = 'palette cmp'

  return token
}

function paletteRgb(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PALETTE_RGB.exec(lookup)
  if (matches?.length > 0) token = 'palette rgb'

  return token
}

function lineInput(lookup: string): string {
  let token = ''
  const matches = PATTERNS.LINE_INPUT.exec(lookup)
  if (matches?.length > 0) token = 'line input'

  return token
}

function ifStatement(lookup: string): string {
  let token = ''
  const matches = PATTERNS.IF_THEN_ELSE.exec(lookup)
  if (matches?.length > 0) token = 'if'

  return token
}

function printAt(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PRINT_AT.exec(lookup)
  if (matches?.length > 0) token = 'print@'

  return token
}

function printHash(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PRINT_HASH.exec(lookup)
  if (matches?.length > 0) token = 'print#'

  return token
}

function closeHash(lookup: string): string {
  let token = ''
  const matches = PATTERNS.CLOSE_HASH.exec(lookup)
  if (matches?.length > 0) token = 'close#'

  return token
}

function inputHash(lookup: string): string {
  let token = ''
  const matches = PATTERNS.INPUT_HASH.exec(lookup)
  if (matches?.length > 0) token = 'input#'

  return token
}

function printTab(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PRINT_TAB.exec(lookup)
  if (matches?.length > 0) token = 'print tab'

  return token
}

function printUsing(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PRINT_USING.exec(lookup)
  if (matches?.length > 0) token = 'print using'

  return token
}

function defFn(lookup: string): string {
  let token = ''
  const matches = PATTERNS.DEF_FN.exec(lookup)
  if (matches?.length > 0) token = 'def fn'

  return token
}

function pCopy(lookup: string): string {
  let token = ''
  const matches = PATTERNS.PCOPY.exec(lookup)
  console.log('pCopy', matches)
  if (matches?.length > 0) token = 'pcopy'

  return token
}

function usr(lookup: string): string {
  let token = ''
  const matches = PATTERNS.USR.exec(lookup)
  if (matches?.length > 0) token = 'usr'

  return token
}

export function getToken(lookup: string): string {
  let result = onGosub(lookup)
  if (result && result.length) return result
  result = onGoto(lookup)
  if (result && result.length) return result
  result = paletteCmp(lookup)
  if (result && result.length) return result
  result = paletteRgb(lookup)
  if (result && result.length) return result
  result = lineInput(lookup)
  if (result && result.length) return result
  result = ifStatement(lookup)
  if (result && result.length) return result
  result = printAt(lookup)
  if (result && result.length) return result
  result = printHash(lookup)
  if (result && result.length) return result
  result = closeHash(lookup)
  if (result && result.length) return result
  result = inputHash(lookup)
  if (result && result.length) return result
  result = printTab(lookup)
  if (result && result.length) return result
  result = printUsing(lookup)
  if (result && result.length) return result
  result = defFn(lookup)
  if (result && result.length) return result
  result = pCopy(lookup)
  if (result && result.length) return result
  result = usr(lookup)
  if (result && result.length) return result

  return lookup
}
