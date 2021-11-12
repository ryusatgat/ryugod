/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['#', '|||'],
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
    tokenPostfix: '.mth',
    keywords: [
        'true',
        'false',
        'if',
        'and',
        'or',
        'not',
        'xor',
        'while',
        'iff?',
        'and?',
        'or?',
        'xor?',
        'implies?',
        'iff?',
        'dup',
        'drop',
        'id',
        'swap',
        'dip',
        'nip',
        'tuck',
        'over',
        'rotl',
        'rotr',
        'par',
        'both',
        'dup2',
        'drop2',
        'swap2',
        'dip2',
        'nip2',
        'tuck2',
        'over2',
        'dup3',
        'drop3',
        'inpack',
        'pack2',
        'unpack2',
        'pack0',
        'unpack0',
        'pack1',
        'unpack1',
        'pack3',
        'unpack3',
        'pack4',
        'unpack4',
    ],
    builtins: [
        'file!',
        'stdin',
        'stdout : File',
        'stderr : File',
        'str-write!',
        'str-print!',
        'str-trace!',
        'str-print-ln!',
        'str-trace-ln!',
        'print-ln!',
        'trace-ln!',
        'str-buf-write!',
        'str-buf-print!',
        'str-buf-trace!',
        'str-buf-read!',
        'str-buf-input!',
        'print-char!',
        'trace-char!',
        'int-write!',
        'int-print!',
        'int-trace!',
        'int-print-ln!',
        'int-trace-ln!',
        'open-file!',
        'create-file!',
        'O_WRONLY',
        'O_CREAT',
        'O_TRUNC',
        'close-file!',
        'heap-length!',
        'heap-base!',
        'heap-times-expanded!',
        'heap-reserve!',
        'PROT_READ',
        'PROT_WRITE',
        'MAP_ANON',
        'MAP_PRIVATE',
        'heap-alloc!',
    ],
    typeKeywords: [
        'module',
        'export',
        'import',
        'data',
        'end',
        'def',
        'table',
        'field',
        'buffer',
        'def-type',
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
            [/[a-zA-Z_]\w*@/, 'variable'],
            [
                /[a-zA-Z_][\w-]*[\?!]?/,
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
            [/(\|\|\|.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
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
