/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: 'NB.'
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
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: "'", close: "'" },
    ]
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.j',
    keywords: [
        'assert',
        'break',
        'continue',
        'else',
        'elseif',
        'for',
        'for_ijk',
        'goto_lbl',
        'label_lbl',
        'if',
        'return',
        'select',
        'case',
        'fcase',
        'throw',
        'try',
        'catch',
        'catchd',
        'catcht',
        'while',
        'whilst',
    ],
    builtins: [
        'scripts',
        'echo',
        'exit',
        'load',
    ],
    // we include these common regular expressions
    symbols: /[#!/\,@&.`:^~|$<>%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@strings' },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': ''
                    }
                }
            ],
            [/-+_\w+/, 'attribute.name'],
            [/@symbols/, 'delimiter'],
            { include: '@numbers' },
            [/[,;]/, 'delimiter']
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^NB\..*$)/, 'comment']
        ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]*[0-9a-fA-F]/, 'number.hex'],
            [/_?\d+/, 'number']
        ],
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@dblStringBody']
        ],
        dblStringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
