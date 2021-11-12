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
        ['(', ')'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp('^\\s*\\{\\$ENDREGION\\}')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.pascal',
    ignoreCase: true,
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'abort',
        'else',
        'new',
        'return',
        'abs',
        'elsif',
        'not',
        'reverse',
        'abstract',
        'end',
        'null',
        'accept',
        'entry',
        'select',
        'access',
        'exception',
        'of',
        'separate',
        'aliased',
        'exit',
        'or',
        'subtype',
        'all',
        'others',
        'synchronized',
        'and',
        'for',
        'out',
        'array',
        'function',
        'overriding',
        'tagged',
        'at',
        'task',
        'generic',
        'package',
        'terminate',
        'begin',
        'goto',
        'pragma',
        'then',
        'body',
        'private',
        'type',
        'if',
        'procedure',
        'case',
        'in',
        'protected',
        'until',
        'constant',
        'interface',
        'use',
        'is',
        'raise',
        'declare',
        'range',
        'when',
        'delay',
        'limited',
        'record',
        'while',
        'delta',
        'loop',
        'rem',
        'with',
        'digits',
        'renames',
        'do',
        'mod',
        'requeue',
        'xor'
    ],
    operators: [
        '=',
        '>',
        '<',
        '<=',
        '>=',
        '<>',
        ':',
        ':=',
        'and',
        'or',
        '+',
        '-',
        '*',
        '/',
        '@',
        '&',
        '^',
        '%'
    ],
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/'/, 'string.invalid'],
            [/\#\d+/, 'string']
        ],
        comments: [
            [/--+.*/, 'comment'],
        ],
        comment: [
            [/[^--]+.*/, 'comment'],
        ],
        string: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/--.*$/, 'comment']
        ]
    }
};
