/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '\\',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|if|for|if|else|interface).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.xpl',
    keywords: [
        'addr',
        'and',
        'attribute',
        'begin',
        'case',
        'char',
        'character',
        'code',
        'cond',
        'condition',
        'def',
        'do',
        'downto',
        'efunction',
        'else',
        'end',
        'eprocedure',
        'exit',
        'external',
        'false',
        'ffunction',
        'for',
        'forward',
        'fprocedure',
        'function',
        'if',
        'include',
        'int',
        'integer',
        'loop',
        'not',
        'of',
        'or',
        'other',
        'procedure',
        'quit',
        'real',
        'repeat',
        'return',
        'then',
        'to',
        'true',
        'until',
        'while',
    ],
    builtins: [
        'Abort',
        'Abs',
        'ACos',
        'ASin',
        'ATan2',
        'Attrib',
        'Blit',
        'Chain',
        'ChIn',
        'ChkKey',
        'ChOut',
        'Clear',
        'Close',
        'Cos',
        'CrLf',
        'Cursor',
        'Equip',
        'Exp',
        'ExtCal',
        'Extend',
        'ExtJmp',
        'FClose',
        'Fix',
        'Float',
        'FOpen',
        'Format',
        'Free',
        'FSet',
        'GetErr',
        'GetHp',
        'GetReg',
        'HexIn',
        'HexOut',
        'Hilight',
        'IntIn',
        'IntOut',
        'IntRet',
        'Irq',
        'Line',
        'Ln',
        'Log',
        'MAlloc',
        'Mod',
        'Move',
        'OpenI',
        'OpenO',
        'Peek',
        'PIn',
        'Point',
        'Poke',
        'POut',
        'Ran',
        'RanSeed',
        'RawText',
        'Read',
        'ReadPix',
        'Release',
        'Rem',
        'Rerun',
        'Reserve',
        'Restart',
        'RlAbs',
        'RlIn',
        'RlOut',
        'RlRes',
        'SetHp',
        'SetRun',
        'SetVid',
        'SetWind',
        'Shrink',
        'Sin',
        'SoftInt',
        'Sound',
        'Sqrt',
        'Swap',
        'Tan',
        'TestC',
        'Text',
        'Trap',
        'TrapC',
        'Write',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(\\.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?\$([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
