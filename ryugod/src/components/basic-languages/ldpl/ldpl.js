/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['#'],
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
    defaultToken: '',
    tokenPostfix: '.ldpl',
    ignoreCase: true,
    keywords: [
        'accept',
        'append',
        'ascii',
        'at',
        'break',
        'call',
        'character',
        'clear',
        'code',
        'continue',
        'copy',
        'count',
        'count',
        'create',
        'data:',
        'delete',
        'display',
        'do',
        'each',
        'element',
        'else',
        'end',
        'eof',
        'equal',
        'execute',
        'executing',
        'exit',
        'external',
        'flag',
        'for',
        'get',
        'goto',
        'greater',
        'if',
        'include',
        'index',
        'is',
        'join',
        'key',
        'keys',
        'label',
        'last',
        'length',
        'less',
        'load',
        'local',
        'milliseconds',
        'modulo',
        'not',
        'of',
        'output',
        'parameters:',
        'procedure:',
        'push',
        'quote',
        'random',
        'repeat',
        'replace',
        'return',
        'solve',
        'split',
        'statement',
        'store',
        'sub',
        'sub-procedure',
        'substring',
        'than',
        'to',
        'trim',
        'until',
        'wait',
        'while',
        'write',
    ],
    builtins: [
        'number',
        'text',
        'vector',
        'map',
        'list',
        'and',
        'by',
        'or',
        'from',
        'in',
        'to',
        'step',
        'with',
        'crlf',
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
            [/^`\w+/, 'type.identifier'],
            [/(@!|&:)(\s+)?[a-zA-Z_]\w*/, 'metatag'],
            [
                /@?[.a-zA-Z1-9_-]+:?/,
                {
                    cases: {
                        '@builtins': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^#.*$)/, 'comment'],
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
