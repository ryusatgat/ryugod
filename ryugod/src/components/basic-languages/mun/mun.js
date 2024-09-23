/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '//',
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
    tokenPostfix: '.mun',
    keywords: [
        'break',
        'else',
        'if',
        'loop',
        'return',
        'while',
        'extern',
        'let',
        'use',        
        'super',
        'package',
        'pub',
        'fn',
        'struct',
    ],
    builtins: [
        'true',
        'false',
        'self',
        'gc',
        'value',
    ],
    typeKeywords: [
        'bool',
        'usize',
        'isize',
        'u8',
        'u16',
        'u32',
        'u64',
        'u128',
        'i8',
        'i16',
        'i32',
        'i64',
        'i128',
        'f32',
        'f64',
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
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/[0-9][0-9_]*\\.[0-9][0-9_]*([eE][+-]?[0-9_]+)?(f32|f64)?/, 'number.fraction'],
            [/[0-9][0-9_]*(\\.[0-9][0-9_]*)?[eE][+-]?[0-9_]+(f32|f64)?/, 'number.exponent'],
            [/[0-9][0-9_]*(\\.[0-9][0-9_]*)?([eE][+-]?[0-9_]+)?(f32|f64)/, 'number.float'],
            [/0b[01_]+([ui](8|16|32|64|128|s|size))?/, 'number.binary'],
            [/0o[0-7_]+([ui](8|16|32|64|128|s|size))?/, 'number.octal'],
            [/0x[a-fA-F0-9_]+([ui](8|16|32|64|128|s|size))?/, 'number.hex'],            
            [/[0-9][0-9_]*([ui](8|16|32|64|128|s|size))?/, 'number'],
            
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
