/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ["shh"],
        blockComment: ["quiet", "loud"]
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
        //{ open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        //{ open: "'", close: "'" }
    ],
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.djs',
    keywords: [
        'amaze',
        'and',
        'as',
        'asink',
        'bigger',
        'biggerish',
        'bigify',
        'bork',
        'breed',
        'but',
        'classy',
        'debooger',
        'dis',
        'dose',
        'few',
        'giv',
        'is',
        'isa',
        'kindof',
        'lazy',
        'levl',
        'less',
        'like',
        'lots',
        'maker',
        'many',
        'maybe',
        'more',
        'much',
        'next',
        'not',
        'notrly',
        'or',
        'pawse',
        'plz',
        'proto',
        'rly',
        'same',
        'smaller',
        'smallerish',
        'smallify',
        'so',
        'sooper',
        'such',
        'trained',
        'very',
        'waite',
        'with',
        'woof',
        'wow',
        'yelde',
        'loud'
    ],
    builtins: [        
        '.plz',
        'wow&',
        'console.loge',
        'dogument',
        'windoge  ',
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
            //[/^\w+&/, 'type.identifier'],
            [
                /[&a-zA-Z_]+/,
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
            [/(^shh.*$)/, 'comment'],
            //[/(^#.*$)/, 'comment'],
            [/quiet/, 'comment', '@comment'],
        ],
        comment: [
            [/loud/, 'comment', '@pop'],            
            [/[^loud]+/, 'comment'],
            [/quiet/, 'comment', '@pop'],
            [/[loud]/, 'comment']
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
