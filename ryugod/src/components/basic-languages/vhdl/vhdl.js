/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
        { open: '"', close: '"' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: '"', close: '"' }
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
        'abs',
        'access',
        'after',
        'alias',
        'all',
        'and',
        'architecture',
        'array',
        'assert',
        'attribute',
        'begin',
        'block',
        'body',
        'buffer',
        'bus',
        'case',
        'component',
        'configuration',
        'constant',
        'disconnect',
        'downto',
        'else',
        'elsif',
        'end',
        'entity',
        'exit',
        'file',
        'for',
        'function',
        'generate',
        'generic',
        'group',
        'guarded',
        'if',
        'impure',
        'in',
        'inertial',
        'inout',
        'is',
        'label',
        'library',
        'linkage',
        'literal',
        'loop',
        'map',
        'mod',
        'nand',
        'new',
        'next',
        'nor',
        'not',
        'null',
        'of',
        'on',
        'open',
        'or',
        'others',
        'out',
        'package',
        'port',
        'postponed',
        'procedure',
        'process',
        'pure',
        'range',
        'record',
        'register',
        'reject',
        'return',
        'rol',
        'ror',
        'select',
        'severity',
        'signal',
        'shared',
        'sla',
        'sli',
        'sra',
        'srl',
        'subtype',
        'then',
        'to',
        'transport',
        'type',
        'unaffected',
        'units',
        'until',
        'use',
        'variable',
        'wait',
        'when',
        'while',
        'with',
        'xnor',
        'xor',
    ],
    typeKeywords: [
        'BIT',
        'BOOLEAN',
        'BIT_VECTOR',
        'INTEGER',
        'STD_LOGIC',
        'STD_LOGIC_VECTOR',
        'COLOR',
        'STD_ULOGIC',
        'X01',
        'X01Z',
        'UX01',
        'UX01Z',
        'STD_ULOGIC_VECTOR',
        'SIGNED',
        'UNSIGNED',
        'NATURAL',
        'POSITIVE',
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
        '+',
        '-',
        '*',
        '/',
        '@',
        '&',
        '^',
        '%'
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
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
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            [/\'[a-zA-Z_]\w*/, 'variable'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/"[^\\"]"/, 'string'],
            [/"/, 'string.invalid'],
            [/\#\d+/, 'string']
        ],
        comment: [
            
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/--.*$/, 'comment']
        ]
    }
};
