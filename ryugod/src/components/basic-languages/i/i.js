/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
    },
    brackets: [
        ['{', '}'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '(', close: ')' },
        { open: '`', close: '`', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '`', close: '`' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.i',
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,;]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [/[#:\[\]{}\~+\-*/<>=]/, 'type.identifier'],
            [/[.abdfghikmopqrstxwzBDGHMOSQ]/, 'keyword'],
            [
                /[a-zA-Z]/,
                {
                    cases: {
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/ +/, 'white'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/[-_]?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody'],
            [/`$/, 'string.escape', '@popall'],
            [/`/, 'string.escape', '@quotStringBody']
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
        ],
        quotStringBody: [
            [/[^\\`]+$/, 'string', '@popall'],
            [/[^\\`]+/, 'string'],
            [/\\./, 'string'],
            [/`/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
