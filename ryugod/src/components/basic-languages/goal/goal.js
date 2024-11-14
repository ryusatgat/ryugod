/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['/'],
        blockComment: ["/", "\\"]
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
    tokenPostfix: '.goal',
    keywords: [
        'and',
        'or',
        'rshift',
        'shift',
        'rx',
        'rt',
        'get',
        'seed',
        'prec',
    ],
    builtins: [
        'abs',
        'bytes',
        'uc',
        'error',
        'eval',
        'firsts',
        'json',
        'ocount',
        'panic',
        'sign',
        'csv',
        'in',
        'mod',
        'nan',
        'rotate',
        'sub',
        'utf8',
        'atan',
        'cos',
        'exp',
        'log',
        'round',
        'sin',
        'sqrt',
        'abspath',
        'chdir',
        'close',
        'dirfs',
        'env',
        'flush',
        'glob',
        'import',
        'mkdir',
        'open',
        'print',
        'read',
        'remove',
        'rename',
        'run',
        'say',
        'shell',
        'stat',
        'ARGS',
        'STDIN',
        'STDOUT',
        'STDERR'
    ],
    typeKeywords: [
        'utf8',
        'time',
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
            [/[;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/[¿:+\\/\-*%!&|<>=~^,#_$?@.«»'`´]/, 'tag'],
            [
                /[a-zA-Z][a-zA-Z0-9]*/,
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
            [/(\s+\/.*$)/, 'comment'],
            [/\s+/, 'white'],
            [/^\/$/, 'comment', '@comment'],
            [/^(\/.*$)/, 'comment'],
        ],
        comment: [
            [/[^\\\/]+/, 'comment'],
            [/^\\$/, 'comment', '@pop'],
            [/[\\\/]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?(\d+|nan)([eE][+\-]?\d+)?[n]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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
