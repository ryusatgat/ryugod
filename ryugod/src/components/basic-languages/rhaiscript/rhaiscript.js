/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.rhai',
    keywords: [
        'as',
        'break',
        'catch',
        'continue',
        'do',
        'else',
        'export',
        'fn',
        'for',
        'if',
        'import',
        'in',
        'loop',
        'return',
        'super',
        'switch',
        'throw',
        'try',
        'until',
        'while',
    ],
    builtins: [
        'await',
        'call',
        'curry',
        'debug',
        'default',
        'eval',
        'go',
        'goto',
        'Fn',
        'is_def_fn',
        'is_def_var',
        'is_shared',
        'match',
        'new',
        'print',
        'sync',
        'type_of',
        'with',
        'yield',
    ],
    typeKeywords: [
        'async',
        'const',
        'false',
        'global',
        'is',
        'let',
        'module',
        'nil',
        'null',
        'package',
        'private',
        'protected',
        'public',
        'shared',
        'spawn',
        'this',
        'true',
        'var',
        'void',
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
            [/0x[\\da-f][_\\da-f]*/, 'number.hex'],
            [/0o[0-7][_0-7]*/, 'number.octal'],
            [/0b[0-1][_0-1]*/, 'number.binary'],
            [/-?\d+\.\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number.float'],
            [/-?\d+/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/`/, 'string.escape', '@stringBody2'],
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
        stringBody2: [
            //[/[^\\`]+$/, 'string', '@popall'],
            [/[^\\`]+/, 'string'],
            [/\\./, 'string'],
            [/`/, 'string.escape', '@popall'],
            //[/\\$/, 'string']
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
