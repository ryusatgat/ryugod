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
    defaultToken: '',
    tokenPostfix: '.opal',
    keywords: [
        'and',
        'bool',
        'char',
        'else',
        'false',
        'fn',
        'if',
        'iface',
        'impl',
        'int',
        'let',
        'long',
        'match',
        'module',
        'new',
        'not',
        'or',
        'pub',
        'range',
        'real',
        'self',
        'string',
        'true',
        'type',
        'unit',
        'use',
        'while',
    ],
    builtins: [
        'add',
        'all?',
        'any?',
        'array',
        'array_of',
        'bind',
        'cap',
        'cap_set',
        'cmp',
        'console',
        'copy',
        'decr',
        'dict',
        'div',
        'each',
        'eachi',
        'empty?',
        'eof?',
        'equal',
        'event',
        'exp',
        'fill',
        'filter',
        'find',
        'fire',
        'fmt',
        'foldl',
        'foldl1',
        'foldr',
        'foldr1',
        'fst',
        'get',
        'get_or',
        'incr',
        'index',
        'insert',
        'inv',
        'lbind',
        'lblock',
        'len',
        'list',
        'lshift',
        'map',
        'mod',
        'mul',
        'neg',
        'nil?',
        'pop',
        'pred',
        'prompt',
        'push',
        'range_incl',
        'rbind',
        'rblock',
        'read_line',
        'remove',
        'rshift',
        'set',
        'slice',
        'slice_from',
        'slice_to',
        'str',
        'strip',
        'sub',
        'succ',
        'to_array',
        'to_bool',
        'to_int',
        'to_long',
        'to_real',
        'to_result',
        'print',
        'println',
        'snd',
        'draw',
        'drawln',
        'write',
        'PI',
        'PI2',
        'PI1_2',
        'E',
        'LOG2',
        'log10',
        'SQRT2',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'atan2',
        'sqrt',
        'exp',
        'log',
        'log2',
        'log10',
        'rand',
        'rand_incl',
        'rand_signed',
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
            [/#[a-zA-Z_]\w*/, 'variable'],
            [
                /[a-zA-Z_]\w*\??/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ],
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(\/\/.*$)/, 'comment'],
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
