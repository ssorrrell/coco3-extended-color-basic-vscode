# Color Computer 3 Extended Color Basic 2.0 Extension for Visual Studio Code

[![installs](https://img.shields.io/visual-studio-marketplace/i/ssorrrell.ecb2vscode?label=Visual%20Studio%20Marketplace%20Installs)](https://marketplace.visualstudio.com/items?itemName=ssorrrell.ecb2vscode)

This extension implements basic language features of Color Computer 3 Super Extended Color Basic for [Visual Studio Code](https://code.visualstudio.com/).

A Language Server using ANTLR4 for improved accuracy is under development at [ECB2_Lib](https://github.com/ssorrrell/ECB2_Lib).

This extension is still under development, thus the 0 major version.  Currently, the Hover Provider is implemented as are the basic language definition using regex.  It seems to color and identify most things correctly.  Hover text documentation is being polished and expanded.  I think it is basically useable.  I'd like it to do much more; autonumbering, running VCC, crunch, find references, better accuracy for tokens...

There a lot of new technologies here for me; markdown, language parsing, ANTLR4, language servers, vscode extensions, github, typescript only project, prettier for markdown, and textmate grammars.

![screenshot-1](https://github.com/ssorrrell/coco3-extended-color-basic-vscode/raw/master/assets/screenshot-1.png)

![screencapture-1](https://github.com/ssorrrell/coco3-extended-color-basic-vscode/raw/master/assets/screencap-1.gif)

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

In Progress

- Basic language syntax
- Hover Provider Documentation

To Do

- Crunch
- Autonumber
- Renumber
- Find Uses
- Pick Colors
- Additional languages
- Highlighting
- Better Accuracy
- Localization

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

### What this mean?

Pretty much everything is organized as a keyword, because everything is part of the base language.  This will make typical VS Code Themes less optimal.  You would really want a Theme targeted at this kind of all-in-one classic interpreted language.

Types of keywords are sorted as follow:
| Token Categories     | Purpose                                  |
| -------------------- | ---------------------------------------- |
| keyword.memory.xxx   | Memory functions like Poke and Peek      |
| keyword.display.xxx  | Video functions like PSet and HCls       |
| keyword.io.xxx       | Input/Output like JOYSTK, EOF, and CLOAD |
| keyword.audio.xxx    | Audio functions Play and Sound           |
| keyword.control.xxx  | Control statements like For, If, Goto    |
| keyword.operator.xxx | Operators like =, <>, AND                |
| keyword.string.xxx   | String functions like CHR$ and MID$      |
| keyword.math.xxx     | Math functions like ATN, COS, and ABS    |

## Contribute

You can support this project through PR with your changes, add an issue with your idea/bug, or provide a language translation.

The doc files for the language have been setup to be multi-lingual.  Under the markdown folder there is a folder for the locale and then the language specific markdown files.  As well as the src\definitions folder.  The specific strings using in the menu items (commands) and the language server are not yet globalized, but there is not much text there and it would be simple to change.  There are a lot of commands for ECB2, about 130 items in the markdown folder (one or more per BASIC command).  Any translation help would be appreciated.

The Color Computer was used in multiple countries and there's no reason this extension couldn't be used in other countries as well.

## How It Works

How does a Language Extension Work?

VS Code provides multiple methods to implement a language extension based on the developers capability.  The initial is simply a Textmate Grammar file, lang.tmLanguage.json.  This is used for the basic or advanced language extensions to colorize the words.  Hover, Completions, etc. are simple or non-existent.

Next difficulty up is to use the VS Code API to implement specific aspects like Hover Provider, Completion Provider, etc.  This uses the built in aspects of VS Code.  All the features are built into the one language extension project.  This extension start out that way as a fork of another Language Extension.  However, most of the identification of tokens is done via Regular Expressions.  It becomes harder to get the right precision out of the RegEx.

The most complicated setup is a Language Server Protocol.  Where a lexer and parser are in a separate code space, possibly different language, perform the difficult analysis of the code, and return answers to the editor.  Language Servers use a protocol that is implemented by multiple editors like Eclipse and VS Code.  For example, this is how VS Code provides CSharp support via the Omnisharp Extension.

It's possible to use Language Server Protocol AND VS Code API together for the extension.  And either way you have to right a TextMate grammar file to get colorization of the words, which is heavy on Regular Expressions.

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

Atom Editor as a BASIC Editor

<https://www.vintageisthenewold.com/trs-80-color-basic-using-atom-editor-giving-the-color-word-a-new-meaning>

Color Computer Language References

<https://colorcomputerarchive.com/repo/Documents/Manuals/Hardware/Color%20Computer%203%20BASIC%20Quick%20Reference%20Manual%20(Tandy).pdf>
<https://colorcomputerarchive.com/repo/Documents/Manuals/Hardware/Color%20Computer%203%20Extended%20Basic%20(Tandy).pdf>

Other 8-bit BASICS

<https://www.applefritter.com/files/Applesoft%20II%202019.pdf>

<http://www.dragondata.co.uk/Publications/BASIC-MAN/DRAGON_32_BASIC_MANUAL_rel-v2.pdf>

<https://www.c64-wiki.com/wiki/C64-Commands>

## Purpose

This extension was constructed to help develop for the Color Computer 3 with a modern toolset.

## Future

Further steps would be to crunch the basic, rename to .bas, and open an emulator with the program in it.
