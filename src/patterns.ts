/* eslint-disable max-len */
/**
 * Matches a Function, 1st = Comment, 2nd = Definition, 3rd = Function/Sub, 4th = Signature def, 5th = Name, 6th = params
 */
export const FUNCTION =
  /((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:(?:Public|Private)[\t ]+)?(Function|Sub)[\t ]+((\[?[a-z]\w*\]?)[\t ]*(?:\((.*)\))?))/gm

/**
 * Matches a Class, 1st = Comment, 2nd = definition, 3rd = Name
 */
export const CLASS =
  '' /*/((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:(?:Public|Private)[\t ]+)?Class[\t ]+(\[?[a-z]\w*\]?))/img;*/

/**
 * Matches a Property, 1st = Comment, 2nd = Definition, 3rd = Get/Let/Set, 4th = Name, 5th = params
 */
export const PROP =
  '' /*/((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:Public[\t ]+(?:Default[\t ]+)?|Private[\t ]+)?Property[\t ]+(Get|Let|Set)[\t ]+(\[?[a-z]\w*\]?))(?:\((.*)\))?/img;*/

/**
 * Matches a Variable Declaration
 */
// eslint-disable-next-line no-useless-escape
export const DIM = /DIM/gm

/**
 * Matches a Number Variable Declaration A, not A$
 */
// prettier-ignore
// eslint-disable-next-line no-useless-escape
export const NUMBER_VAR = "DIM([ ]*[w]+[$]*[,])*[ ]*({0}[^\$])+"

/**
 * Matches a String Variable Declaration A$, not A
 */
// eslint-disable-next-line no-useless-escape
export const STRING_VAR = 'DIM([ ]*[w]+[$]*[,])*[ ]*({0})+'

/**
 * Matches a Single Letter Variable Declaration
 */
// eslint-disable-next-line no-useless-escape
export const SINGLE_LETTER_VAR = /[A-Z]/gm

export const VAR_COMPLS =
  '' /*/^[\t ]*(Dim|Const|((Private|Public)[\t ]+)?(Function|Sub|Class|Property [GLT]et))[\t ]+\w+[^:]*$/i;*/ // fix: should again after var name #22

/**
 * Matches a Definition, 1st = Comment, 2nd = Definition, 3rd = Name
 */
export function DEF(input: string, word: string): RegExpExecArray {
  return new RegExp(`^(?:Function[ ]+)(\b${word}\b).*`, 'm').exec(input)
}

export function DEFVAR(input: string, word: string): RegExpExecArray {
  return new RegExp(`((DIM)[ ]+)(\\b${word}\\b)`, 'm').exec(input)
}

/**
 * Matches a Definition, 1st = Comment, 2nd = Definition, 3rd = Name
 */
export function LINENO(input: string, word: string): RegExpExecArray {
  return new RegExp(`^(${word}\\b)`, 'm').exec(input)
}

export const COMMENT_SUMMARY =
  /(?:'''\s*<summary>|'\s*)([^<\n\r]*)(?:<\/summary>)?/i

export function PARAM_SUMMARY(input: string, word: string): RegExpExecArray {
  return new RegExp(
    `'''\\s*<param name=["']${word}["']>(.*)<\\/param>`,
    'i'
  ).exec(input)
}

export const ENDLINE =
  '' /*(/(?:^|:)[\t ]*End\s+(Sub|Class|Function|Property)/i);*/

export const ARRAYBRACKETS = /(\(\d+,\d+\)|\(\d+\))/

//export const COLOR = /\b(\b(RGB[\t ]*\([\t ]*(&h[0-9a-f]+|\d+)[\t ]*,[\t ]*(&h[0-9a-f]+|\d+)[\t ]*,[\t ]*(&h[0-9a-f]+|\d+)[\t ]*\))|(&h[0-9a-f]{6}\b)/g;

export const ON_GOSUB = /ON \w\w?\$? GOSUB/gm

export const ON_GOTO = /ON \w\w?\$? GOTO/gm

export const PALETTE_CMP = /PALETTE CMP/gm

export const PALETTE_RGB = /PALETTE RGB/gm

export const LINE_INPUT = /LINE *INPUT/gm

export const IF_THEN_ELSE = /(IF|THEN|ELSE)/gm

export const PRINT_AT = /PRINT *@/gm

export const PRINT_HASH = /PRINT *\\#/gm

export const CLOSE_HASH = /CLOSE *\\#/gm

export const INPUT_HASH = /INPUT *\\#/gm

export const PRINT_TAB = /PRINT *TAB/gm

export const PRINT_USING = /PRINT *USING/gm

export const DEF_FN = /DEF *FN/gm

export const PCOPY = /PCOPY *\\d *TO *\\d/gm

export const USR = /USR/gm
