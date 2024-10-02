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
    tokenPostfix: '.elv',
    keywords: [
        'while',
        'for',
        'try',
        'if',
        'elif',
        'else',
        'catch',
        'finally',
        'and',
        'or',
        'coalesce',
    ],
    builtins: [
        'nop',
        '-gc',
        '-ifaddrs',
        '-log',
        '-override-wcwidth',
        '-stack',
        'all',
        'assoc',
        'base',
        'bool',
        'break',
        'call',
        'cd',
        'compare',
        'constantly',
        'continue',
        'count',
        'defer',
        'deprecate',
        'dissoc',
        'drop',
        'each',
        'eawk',
        'echo',
        'eq',
        'eval',
        'exact-num',
        'exec',
        'exit',
        'external',
        'fail',
        'fg',
        'float64',
        'from-json',
        'from-lines',
        'from-terminated',
        'get-env',
        'has-env',
        'has-external',
        'has-key',
        'has-value',
        'is',
        'keys',
        'kind-of',
        'make-map',
        'multi-error',
        'nop',
        'not-eq',
        'not',
        'ns',
        'num',
        'one',
        'only-bytes',
        'only-values',
        'order',
        'peach',
        'pprint',
        'print',
        'printf',
        'put',
        'rand',
        'randint',
        'range',
        'read-line',
        'read-upto',
        'repeat',
        'repr',
        'resolve',
        'return',
        'run-parallel',
        'search-external',
        'set-env',
        'show',
        'sleep',
        'slurp',
        'src',
        'styled',
        'styled-segment',
        'take',
        'tilde-abbr',
        'time',
        'to-json',
        'to-lines',
        'to-string',
        'to-terminated',
        'unset-env',
        'use-mod',
        'wcswidth',
    ],
    typeKeywords: [
        'var',
        'set',
        'tmp',
        'with',
        'del',
        'pragma',
        'fn',
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
