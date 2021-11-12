/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '//',
        blockComment: ["/*", "*/"]
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
    tokenPostfix: '.arnoldc',
    keywords: [
        "AIR",
        "AND",
        "AROUND",
        "ASS",
        "BABY",
        "BACK",
        "BE",
        "BECAUSE",
        "BEEN",
        "BOOTS",
        "BULLSHIT",
        "CAREFULLY",
        "CHILL",
        "CHOPPER",
        "CHRISTMAS",
        "CLOTHES",
        "DO",
        "ENOUGH",
        "FOR",
        "GET",
        "GIVE",
        "GOING", 
        "HASTA",
        "HAVE",
        "HEY",
        "I'LL",
        "I'M", 
        "I",
        "IT'S",
        "IT",
        "LA",
        "LISTEN",
        "LOGIC",
        "MARS",
        "ME",
        "MOTORCYCLE",
        "NEED",
        "NO",
        "NOW",
        "PEOPLE",
        "PLEASE",
        "RESPECT",
        "SAY",
        "SET",
        "SHOWTIME",
        "STICK",
        "TALK",
        "TERMINATED",
        "THE",
        "THESE",
        "TO",
        "TREE",
        "UP",
        "US",
        "VERY",
        "VISTA",
        "YOU",
        "YOUR",
    ],
    builtins: [
        'ANSWERED',
        'ASK',
        'BUNCH',
        'DID',
        'DO',
        'FUCK',
        'HAND',
        'HAVE',
        'HERE',
        'IMMEDIATELY',
        'INVITATION',
        'IS',
        'MY',
        'OF',
        'QUESTIONS',
        'TALK',
        'THE',
        'THEM',
        'TO',
        'WANT',
        'WHAT',
        'WRONG',
    ],
    typeKeywords: [
        "ARE",
        "BENNET",
        "CONSIDER",
        "DIVORCE",
        "DOWN",
        "FIRED",
        "GET",
        "GO",
        "HAD",
        "HE",
        "HIM",
        "KNOCK",
        "LET",
        "LIED",
        "ME",
        "NO",
        "NOT",
        "OFF",
        "PROBLEMO",
        "SOME",
        "SPLIT",
        "STEAM",
        "THAT",
        "TO",
        "UP",
        "YOU'RE",
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
            [
                /[A-Za-z][\w']*/,
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
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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
