/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
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
    tokenPostfix: '.blue',
    keywords: [
        'do',
        'or',
        'def',
        'del',
        'and',
        'arg',
        'trap',
        'loop',
        'this',
        'self',
        'args',
        'func',
        'raise',
        'return',
        'global',
        'trapped',
        'lexical',
    ],
    builtins: [
        'abs',
        'append',
        'asin',
        'atan',
        'attrib',
        'attribs',
        'band',
        'bor',
        'bxor',
        'class',
        'clone',
        'compile',
        'contains',
        'contract',
        'copy',
        'cos',
        'endsWith',
        'eval',
        'exec',
        'exit',
        'extend',
        'find',
        'foreach',
        'frac',
        'id',
        'import',
        'int',
        'join',
        'length',
        'lib',
        'library',
        'load',
        'log',
        'log10',
        'ltrim',
        'map',
        'merge',
        'mod',
        'module',
        'new',
        'null_type',
        'num',
        'print',
        'refcount',
        'repeat',
        'replace',
        'resize',
        'round',
        'rtrim',
        'save',
        'shiftleft',
        'shiftright',
        'sin',
        'sleep',
        'slice',
        'sort',
        'split',
        'startsWith',
        'str',
        'substr',
        'tan',
        'trim',
        'uniq',
        'with',
    ],
    typeKeywords: [
        'sys',
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
            [/(#.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"/, 'string.escape', '@dblStringBody']
        ],
        dblStringBody: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
