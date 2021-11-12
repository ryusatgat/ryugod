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
        { open: "`", close: "`" },
        { open: "<!--", close: "-->" },
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
    tokenPostfix: '.bal',
    keywords: [
        'if',
        'else',
        'fork',
        'join',
        'while',
        'foreach',
        'in',
        'return',
        'returns',
        'break',
        'transaction',
        'transactional',
        'retry',
        'commit',
        'rollback',
        'continue',
        'typeof',
        'enum',
        'wait',
        'check',
        'checkpanic',
        'panic',
        'trap',
        'match',    ],
    builtins: [
        'xmlns',
        'table',
        'key',
        'let',
        'new',
        'from',
        'where',
        'select',
        'start',
        'flush',
        'default',
        'do',
        'base16',
        'base64',
        'conflict',
        'limit',
        'outer',
        'equals',
        'order',
        'by',
        'ascending',
        'descending',
        'class',
        'configurable',
        'variable',
        'module',
        'service',
    ],
    typeKeywords: [
        'as',
        'on',
        'resource',
        'listener',
        'const',
        'final',
        'is',
        'null',
        'lock',
        'annotation',
        'source',
        'worker',
        'parameter',
        'field',
        'isolated',
        'public',
        'private',
        'function',
        'external',
        'type',
        'record',
        'object',
        'remote',
        'abstract',
        'client',
        'true',
        'false',
        'fail',
        'import',
        'version',
        'boolean',
        'int',
        'float',
        'string',
        'decimal',
        'handle',
        'var',
        'any',
        'anydata',
        'byte',
        'future',
        'typedesc',
        'map',
        'json',
        'xml',
        'error',
        'never',
        'readonly',
        'distinct',
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
