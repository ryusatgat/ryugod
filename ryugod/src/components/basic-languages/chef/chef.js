/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.chef',
    keywords: [
        'Take',
        'Put',
        'Fold',
        'Add',
        'Remove',
        'Combine',
        'Devide',
        'Add',
        'Liquefy',
        'Stir',
        'Mix',
        'Clean',
        'Pour',
        'Set',
        'Serve',
        'Refrigerate',
        'Ingredients',
        'Cooking',
        'Pre-heat',
        'Celsius',
        'Method',
        'Serves',
        'oven',
        'gas',
        'mark',
        'time',
        'from',
        'into',
        'mixing',
        'bowl',
        'to',
        'dry',
        'contents', 
        'of',
        'the',
        'for',
        'well',
        'baking',
        'aside',
        'hours',
        'with',
    ],
    builtins: [

    ],
    typeKeywords: [
        'g',
        'kg',
        'pinch',
        'pinches',
        'ml',
        'l',
        'dash',
        'dashes',
        'cup',
        'cups',
        'teaspoon',
        'teaspoons',
        'tablespoon',
        'tablespoons',
        'heaped',
        'level',
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
            [/[,.]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
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
