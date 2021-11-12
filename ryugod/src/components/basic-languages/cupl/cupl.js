/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: 'COMMENT',
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
    tokenPostfix: '.cupl',
    keywords: [
        'ALL',
        'ALLOCATE',
        'AND',
        'BLOCK',
        'BY',
        'COMMENT',
        'ELSE',
        'END',
        'FOR',
        'GE',
        'GO',
        'GT',
        'IDN',
        'IF',
        'LE',
        'LET',
        'LT',
        'NE',
        'OR',
        'PERFORM',
        'READ',
        'STOP',
        'THEN',
        'TIMES',
        'TO',
        'WATCH',
        'WHILE',
        'WRITE',
    ],
    builtins: [
        'ABS',
        'ATAN',
        'COS',
        'EXP',
        'FLOOR',
        'LN',
        'LOG',
        'SQRT',
        'SIN',
        'MAX',
        'MIN',
        'RAND',
        'DET',
        'DOT',
        'INV',
        'POSMAX',
        'POSMIN',
        'SGM',
        'TRC',
        'TRN',
    ],
    typeKeywords: [
        'NOTE',
        'BEGIN',
        'DEC',
        'DECREASE',
        'EQL',
        'GEQ',
        'GTR',
        'INC',
        'INCREASE',
        'INT',
        'LEQ',
        'LSS',
        'NEQ',
        'REPEAT',
        'TITLE',
        'UNTIL',
        '$',
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
                /[a-zA-Z_$]\w*/,
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
            [/((COMMENT|NOTE).*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/TITLE.*/, 'string'],
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
