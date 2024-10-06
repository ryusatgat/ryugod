/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '--',
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
    tokenPostfix: '.fk',
    keywords: [
        'var',
        'return',
        'break',
        'func',
        'fake',
        'while',
        'for',
        'if',
        'then',
        'else',
        'elseif',
        'end',
        'const',
        'package',
        'include',
        'struct',
        'and',
        'or',
        'is',
        'not',
        'continue',
        'yield',
        'sleep',
        'switch',
        'case',
        'default',
    ],
    builtins: [
        '_G',
        'array',
        'ceil',
        'debug',
        'dofile',
        'dostring',
        'dumpallfunc',
        'dumpfunc',
        'dumpfuncmap',
        'dumpmem',
        'dumppointerheap',
        'dumpstat',
        'dumpstringheap',
        'fclose',
        'floor',
        'fopen',
        'format',
        'freadall',
        'fwriteall',
        'gc',
        'getconst',
        'getcurcallstack',
        'getcurfile',
        'getcurfunc',
        'getcurline',
        'geterror',
        'isfunc',
        'isinteger',
        'log',
        'MAP',
        'os_argc',
        'os_argv',
        'os_sleep',
        'pause',
        'print',
        'rand',
        'range',
        'size',
        'srand',
        'string_cat',
        'string_cmp',
        'string_find_not',
        'string_find',
        'string_replace',
        'string_substr',
        'string_tolower',
        'string_toupper',
        'string_trim',
        'string_trimleft',
        'string_trimright',
        'tolong',
        'tonumber',
        'tostring',
        'typeof',
    ],
    typeKeywords: [
        'true',
        'false',
        'null',
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
            [/(--.*$)/, 'comment'],
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
