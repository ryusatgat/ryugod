/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: "'",
        blockComment: ['\'[', '\']']
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
    tokenPostfix: '.vb',
    ignoreCase: true,
    keywords: [
        'REM',
        'NIL',
        'MOD',
        'AND',
        'OR',
        'NOT',
        'IS',
        'LET',
        'DIM',
        'IF',
        'THEN',
        'ELSEIF',
        'ELSE',
        'ENDIF',
        'FOR',
        'IN',
        'TO',
        'STEP',
        'NEXT',
        'WHILE',
        'WEND',
        'DO',
        'UNTIL',
        'EXIT',
        'GOTO',
        'GOSUB',
        'RETURN',
        'CALL',
        'DEF',
        'ENDDEF',
        'CLASS',
        'ENDCLASS',
        'ME',
        'NEW',
        'VAR',
        'REFLECT',
        'LAMBDA',
        'MEM',
        'TYPE',
        'IMPORT',
        'END',
    ],
    tagwords: [
        'BS',
        'SGN',
        'SQR',
        'FLOOR',
        'CEIL',
        'FIX',
        'ROUND',
        'SRND',
        'RND',
        'SIN',
        'COS',
        'TAN',
        'ASIN',
        'ACOS',
        'ATAN',
        'EXP',
        'LOG',
        'ASC',
        'CHR',
        'LEFT',
        'LEN',
        'MID',
        'RIGHT',
        'STR',
        'VAL',
        'PRINT',
        'INPUT',
        'LIST',
        'DICT',
        'PUSH',
        'POP',
        'BACK',
        'INSERT',
        'SORT',
        'EXISTS',
        'INDEX_OF',
        'GET',
        'SET',
        'REMOVE',
        'CLEAR',
        'CLONE',
        'TO_ARRAY',
        'ITERATOR',
        'MOVE_NEXT',
    ],
    // we include these common regular expressions
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/next(?!\w)/, { token: 'keyword.tag-for' }],
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // usual ending tags
            [
                /end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,
                { token: 'keyword.tag-$1' }
            ],
            // identifiers, tagwords, and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@tagwords': { token: 'keyword.tag-$0' },
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
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
            [/\'\[/, 'comment', '@comment'],
            [/(\'|REM(?!\w)).*$/, 'comment']
        ],
        comment: [
            [/[^'\[]+/, 'comment'],
            [/\'\]/, 'comment', '@pop'],
            [/[\'\[]/, 'comment']
        ],
        string: [
            [/[^"\u201c\u201d]+/, 'string'],
            [/["\u201c\u201d]{2}/, 'string.escape'],
            [/["\u201c\u201d]C?/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};
