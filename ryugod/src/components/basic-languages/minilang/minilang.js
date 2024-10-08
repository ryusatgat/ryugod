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
    tokenPostfix: '.ml',
    keywords: [
        'extern',
        'fun',
        'ret',
        'end',
        'let',
        'if',
        'elif',
        'else',
        'while',
        'for',
        'in',
        'iter',
        'start',
        'stop',
        'next',
        'destruct',
        'copy',
        'move',
        'at',
        'alias',
        'import',
        'namespace',
        'defer',
        'asm',
        'file',
        'line',
        'lineno',
        'type_of',
        'count',
        'size_of',
        'len_of',
        'literal',
        'strfy',
        'group',
        'cast',
        'warn',
        'true',
        'false',
        'block',
        'macro',
    ],
    builtins: [
        'alloc_size',
        'alloc_start',
        'alloc_stop',
        'alloc_warn',
        'alloc_zeroed',
        'alloc',
        'dealloc',
        'invert',
        'iter',
        'lines',
        'next',
        'range',
        'start',
        'stop',
        'to',
        'until',
        'with',
        'c_SEEK_END',
        'c_SEEK_SET',
        'close_file',
        'print_to',
        'print',
        'println_to',
        'println',
        'read_from',
        'read',
        'c_str',
        'clear',
        'compare',
        'concat_from',
        'concat',
        'copy',
        'destruct',
        'empty_str',
        'equals',
        'extend',
        'find',
        'join',
        'len',
        'split',
        'str_from',
        'str',
        'substr',
        'to_lower',
        'to_str',
        'to_upper',
        'trim',
    ],
    typeKeywords: [
        'struct',
        'void',
        'int8',
        'int32',
        'int16',
        'int64',
        'float64',
        'float32',
        'bool',
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
