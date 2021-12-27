# Color Computer 3 Extended Color Basic 2.0 Extension for Visual Studio Code

This extension implements basic language features of Color Computer 3 Super Extended Color Basic for [Visual Studio Code](https://code.visualstudio.com/).

This extension is still under development, the the 0 major version.  Currently, the Hover Provider is implmented as are the basic language definition using regex.  It seems to color and identify most things correctly.  Hover text documentation is being polished and expanded.  I think it is basically useable.  I'd like it to do much more; autonumbering, running VCC, crunch, better accuracy for tokens...

There a lot of new technologies here for me; markdown, language parsing, vscode extensions, github, typescript only project, prettier for markdown,..

## Languages

The file naming convention leaves open the possibility of working for all versions of Color Basic.  To use set the filename extension to match the version of BASIC.

At the moment only files ending in .ecb2 will be properly enabled.

| Language Name                | Device                           | Extension       |
| ---------------------------- | -------------------------------- | --------------- |
| Disk Extended Color Basic 2  | Color Computer 3 with Disk Drive | .decb2          |
| Super Extended Color Basic 2 | Color Computer 3                 | .ecb2           |
| Disk Extended Color Basic 1  | Color Computer 2 with Disk Drive | .decb or .decb1 |
| Extended Color Basic 1       | Color Computer 2                 | .ecb or .ecb1   |

## Features


- Add extra VBS Source (libraries) files for extra completion
```
{ // settings.json
    "ecb2.includes": ["c:\\mylibrary.vbs"]
}
```

## Issues Related to Coloring Tokens

VS Code and the TextMate grammars are built for a modern language set, which Color BASIC is not.  Modern languages involve imports, multiple libraries, types, no line numbers, unlimited line length, multiple line statements, multiple line code blocks, functions, anonymous functions, etc.  This makes the keyword coloring far more complex than Color BASIC.

Color BASIC Differences from a modern language:
2 data types; number and string.
GOTO/GOSUB instead of functions.
Everything is a global variable.
POKE/PEEK/DEFUSR/DEFFN/etc. direct machine access.
All keywords are built into the language.
DATA/READ sequential data storage/access
Line Numbers required on each line.

Modern Language Differences from Color BASIC
A hex number is basically a color code.
RGB colors are a lot more knowable at design time.

### What's this mean?

Pretty much everything is organized as a keyword, because everything is part of the base language.  This will make typical VS Code Themes less optimal.  You would really want a Theme targed at this kind of all-in-one classic interpreted language.

Types of keywords are sorted as follow:
| Token Categories     | Purpose                                  |
| -------------------- | ---------------------------------------- |
| keyword.memory.xxx   | Memory functions like Poke and Peek      |
| keyword.display.xxx  | Video functions like PSet and HCls       |
| keyword.io.xxx       | Input/Output like JOYSTK, EOF, and CLOAD |
| keyword.audio.xxx    | Audio functions Play and Sound           |
| keyword.control.xxx  | Control statments like For, If, Goto     |
| keyword.operator.xxx | Operators like =, <>, AND                |
| keyword.string.xxx   | String functions like CHR$ and MID$      |
| keyword.math.xxx     | Math functions like ATN, COS, and ABS    |


## Contribute

You can support this project through PR with your changes, add an issue with your idea/bug, or provide a language translation.

## References

This extension is forked and heavily modified from the extension by Serpen for VBScript.

The xxx.tmLanguage.json uses a different parser than the standard MS engine.  This reg ex engine can help.
<https://rubular.com/>
<https://macromates.com/manual/en/regular_expressions>

Syntax Highlighting
Syntax Highlight Guide - <https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide>

Syntax Naming Guide - <https://macromates.com/manual/en/language_grammars#naming_conventions>

Other Basic Extensions
<https://github.com/Serpen/VBS-VSCode>
<https://github.com/pedgarcia/language-cocobasic>
<https://github.com/andymule/qb64-vscode>

VS Code Language Extension Docs
<https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide>

Atom Editor as a BASIC Edittor
<https://www.vintageisthenewold.com/trs-80-color-basic-using-atom-editor-giving-the-color-word-a-new-meaning>

Color Computer Language References
<https://colorcomputerarchive.com/repo/Documents/Manuals/Hardware/Color%20Computer%203%20BASIC%20Quick%20Reference%20Manual%20(Tandy).pdf>
<https://colorcomputerarchive.com/repo/Documents/Manuals/Hardware/Color%20Computer%203%20Extended%20Basic%20(Tandy).pdf>

## Purpose

This extension was founded to help develop for the Color Computer 3 with a modern toolset.

## Future

Further steps would be to crunch the basic, rename to .bas, and open an emulator with the program in it.
