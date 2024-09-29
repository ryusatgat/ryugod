/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '//',
        blockComment: ["/*", "*/"]
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
            beforeText: new RegExp('^\\s*(?:fn|for|if|else).*?\\s*$'),
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
    defaultToken: 'invalid',
    tokenPostfix: '.rn',
    keywords: [
        'as',
        'async',
        'await',
        'become',
        'block',
        'box',
        'break',
        'continue',
        'crate',
        'do',
        'dyn',
        'else',
        'expr',
        'extern',
        'final',
        'fn',
        'for',
        'ident',
        'if',
        'impl',
        'in',
        'item',
        'let',
        'lifetime',
        'literal',
        'loop',
        'macro',
        'match',
        'meta',
        'mod',
        'move',
        'mut',
        'override',
        'path',
        'priv',
        'pub',
        'ref',
        'return',
        'select',
        'self',
        'Self',
        'stmt',
        'super',
        'try',
        'tt',
        'ty',
        'typeof',
        'union',
        'unsafe',
        'unsized',
        'use',
        'virtual',
        'vis',
        'where',
        'while',
        'yield',
    ],
    builtins: [
        'Type',
        'assert_eq',
        'assert_ne',
        'assert',
        'dbg',
        'drop',
        'clone',
        'Err',
        'file',
        'format',
        'is_readable',
        'is_writable',
        'line',
        'None',
        'Tuple',
        'Object',
        'Ok',
        'Option',
        'panic',
        'print',
        'println',
        'Result',
        'Some',
        'String',
        'stringify',
        'Vec',
        'Bytes',
    ],
    typeKeywords: [
        'true',
        'false',
        'const',
        'type',
        'trait',
        'enum',
        'struct',
        'abstract',
        'static',
        'bool',
        'u8',
        'f64',
        'i64',
        'char',
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
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(\/\/.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?/, 'number.octal'],
            [/0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?/, 'number.binary'],
            [/0x[\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?/, 'number.hex'],
            [/\d[\d_]*(\.?)[\d_]*(?:(E)([+-])([\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/`/, 'string.escape', '@string2Body'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        string2Body: [
            [/[^\\`]+/, 'string'],
            [/\\./, 'string'],
            [/`/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
