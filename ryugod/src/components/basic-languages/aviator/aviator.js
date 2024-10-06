/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '##',
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
    tokenPostfix: '.av',
    keywords: [
        'lambda',
        'end',
        'if',
        'else',
        'for',
        'in',
        'return',
        'break',
        'continue',
        'let',
        'while',
        'fn',
        'elsif',
        'try',
        'catch',
        'finally',
        'throw',
        'new',
        'use',
    ],
    builtins: [
        '__new',
        '__reducer_callcc',
        '__reducer_cont',
        '__reducer_return',
        '__if_callcc',
        '__try',
        '__catch_handler',
        '__throw',
        '__reducer_break',
        'string.endsWith',
        'string.substring',
        'string.length',
        'string.replace_all',
        'string.contains',
        'string.join',
        'string.replace_first',
        'string.startsWith',
        'string.split',
        'string.indexOf',
        'min',
        'tuple',
        'boolean',
        'without_meta',
        'println',
        'string_to_date',
        'assert',
        'comparator',
        'eval',
        'long',
        'identity',
        'type',
        'rand',
        'now',
        'range',
        'seq',
        'bigint',
        'meta',
        'double',
        'is_def',
        'is_a',
        'pst',
        'cmp',
        'decimal',
        'with_meta',
        'date_to_string',
        'print',
        'sysdate',
        'str',
        'max',
        'undef',
        'math.acos',
        'math.floor',
        'math.log',
        'math.cos',
        'math.ceil',
        'math.abs',
        'math.tan',
        'math.round',
        'math.atan',
        'math.pow',
        'math.asin',
        'math.sin',
        'math.log10',
        'math.sqrt',
        'filter',
        'seq.min',
        'seq.collector',
        'seq.add',
        'sort',
        'seq.keys',
        'seq.list',
        'seq.vals',
        'seq.raw',
        'seq.set',
        'seq.max',
        'seq.put',
        'seq.get',
        'zipmap',
        'seq.not_any',
        'seq.array_of',
        'seq.contains_key',
        'into',
        'seq.every',
        'map',
        'seq.remove',
        'reverse',
        'seq.entry',
        'seq.some',
        'seq.map',
        'seq.add_all',
        'include',
        'count',
        'seq.array',
        'reduce',
    ],
    typeKeywords: [
        'true',
        'false',
        'nil',
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
                /[a-zA-Z_][\.\w]*/,
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
            [/(##.*$)/, 'comment'],
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
