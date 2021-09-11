/* eslint-disable max-len */
/**
 * Matches a Function, 1st = Comment, 2nd = Definition, 3rd = Function/Sub, 4th = Signature def, 5th = Name, 6th = params
 */
export const FUNCTION = /((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:(?:Public|Private)[\t ]+)?(Function|Sub)[\t ]+((\[?[a-z]\w*\]?)[\t ]*(?:\((.*)\))?))/mg;

/**
 * Matches a Class, 1st = Comment, 2nd = definition, 3rd = Name
 */
export const CLASS = ""; /*/((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:(?:Public|Private)[\t ]+)?Class[\t ]+(\[?[a-z]\w*\]?))/img;*/

/**
 * Matches a Property, 1st = Comment, 2nd = Definition, 3rd = Get/Let/Set, 4th = Name, 5th = params
 */
export const PROP = ""; /*/((?:^[\t ]*'+.*$(?:\r\n|\n))*)^[\t ]*((?:Public[\t ]+(?:Default[\t ]+)?|Private[\t ]+)?Property[\t ]+(Get|Let|Set)[\t ]+(\[?[a-z]\w*\]?))(?:\((.*)\))?/img;*/

/**
 * Matches a Variable Declaration, 1st = Type, 2nd = Name (cs)
 */
export const VAR = /(?<!')(DIM) +([A-Z0-9\\$]{1,3}(?: *\\( *\\d* *\\))?(?: *, *[A-Z0-9\\$]{1,3}(?: *\\( *\\d* *\\))?)*) *.*(?:$|:)/gm; /*/(?<!'\s*)(?:^|:)[\t ]*(Dim|Set|Const|Private[\t ]+Const|Public[\t ]+Const|Private|Public)[\t ]+(?!Sub|Function|Class|Property)([a-z0-9_]+(?:[\t ]*\([\t ]*\d*[\t ]*\))?(?:[\t ]*,[\t ]*[a-z0-9_]+(?:[\t ]*\([\t ]*\d*[\t ]*\))?)*)[\t ]*.*(?:$|:)/img;*/

export const VAR_COMPLS = ""; /*/^[\t ]*(Dim|Const|((Private|Public)[\t ]+)?(Function|Sub|Class|Property [GLT]et))[\t ]+\w+[^:]*$/i;*/ // fix: should again after var name #22

/**
 * Matches a Definition, 1st = Comment, 2nd = Definition, 3rd = Name
 */
export function DEF(input: string, word: string): RegExpExecArray {
  return new RegExp(
    `^(?:Function[ ]+)(\b${word}\b).*`
    , "m"
  ).exec(input);
}

export function DEFVAR(input: string, word: string): RegExpExecArray {
  return new RegExp(
    `((DIM)[ ]+)(\\b${word}\\b)`
    , "m"
  ).exec(input);
}

/**
 * Matches a Definition, 1st = Comment, 2nd = Definition, 3rd = Name
 */
export function LINENO(input: string, word: string): RegExpExecArray {
  return new RegExp(
    `^(${word}\\b)`
    , "m"
  ).exec(input);
}

export const COMMENT_SUMMARY = /(?:'''\s*<summary>|'\s*)([^<\n\r]*)(?:<\/summary>)?/i;

export function PARAM_SUMMARY(input: string, word: string): RegExpExecArray {
  return new RegExp(`'''\\s*<param name=["']${word}["']>(.*)<\\/param>`, "i").exec(input);
}

export const ENDLINE = ""; /*(/(?:^|:)[\t ]*End\s+(Sub|Class|Function|Property)/i);*/

export const ARRAYBRACKETS = /\( *\d* *\)/;

export const COLOR = /\b(\b(RGB[\t ]*\([\t ]*(&h[0-9a-f]+|\d+)[\t ]*,[\t ]*(&h[0-9a-f]+|\d+)[\t ]*,[\t ]*(&h[0-9a-f]+|\d+)[\t ]*\))|(&h[0-9a-f]{6}\b)/g;

export const ON_GOSUB = /ON \w\w?\$? GOSUB/mg;

export const ON_GOTO = /ON \w\w?\$? GOTO/mg;

export const PALETTE_CMP = /PALETTE CMP/mg;

export const PALETTE_RGB = /PALETTE RGB/mg;

export const LINE_INPUT = /LINE *INPUT/mg;

export const IF_THEN_ELSE = /(IF|THEN|ELSE)/mg;

export const PRINT_AT = /PRINT *@/mg;

export const PRINT_HASH = /PRINT *\\#/mg;

export const CLOSE_HASH = /CLOSE *\\#/mg;

export const INPUT_HASH = /INPUT *\\#/mg;

export const PRINT_TAB = /PRINT *TAB/mg;

export const PRINT_USING = /PRINT *USING/mg;

export const DEF_FN = /DEF *FN/mg;

export const PCOPY = /PCOPY *\\d *TO *\\d/mg;

export const USR = /USR/mg;
