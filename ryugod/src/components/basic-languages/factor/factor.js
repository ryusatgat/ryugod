/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: "!",
        blockComment: ["( ", ")"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#Region\\b'),
            end: new RegExp('^\\s*#End Region\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.fth',
    ignoreCase: true,
    keywords: [        
        'USE',
        'USING',
        'drop',
        '2drop',
        '3drop',
        'keep',
        '2keep',
        '3keep',
        'nip',
        '2nip',
        'dup',
        '2dup',
        '3dup',
        'dupd',
        'over',
        'pick',
        'tuck',
        'swap',
        'rot',
        '-rot',
        'roll',
        '-roll',
        'slip',
        '2swap',
        'swapd',
        'get',
        'set',
        'if',
        'when',
        'unless',
        'if',
        'unless',
        'when',
        'CHAR',
        'STRING',
        'inline',
        'foldable',
    ],
    // we include these common regular expressions
    symbols: /[=~;\.,:&|\*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            [/^[A-Z-]*:+/, 'keyword'],
            [
                /[0-9]?[a-zA-Z_$-.]+/,
                {
                    cases: {                        
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.?\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/[0-9]+/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/["\u201c\u201d]/, { token: 'string.quote', next: '@string' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\(\ /, 'comment', '@comment'],
            [/!.*$/, 'comment'],            
        ],
        comment: [
            [/[^\)]+/, 'comment'],
            [/\(\ /, 'comment', '@push' ],    // nested comment  not allowed :-(
            [/\)/, 'comment', '@pop'],
            [/[\)]/, 'comment']
        ],
        string: [
            [/[^"\u201c\u201d]+/, 'string'],
            [/["\u201c\u201d]{2}/, 'string.escape'],
            [/["\u201c\u201d]C?/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};
