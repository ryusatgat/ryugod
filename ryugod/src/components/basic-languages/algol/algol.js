/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//', 'COM'],
        blockComment: ["COMMENT", "COMMENT"]
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
    tokenPostfix: '.agl',
    keywords: [
        'ANDF',
        'ANDTH',
        'ASSERT',
        'ASSIGN',
        'AT',
        'BEGIN',
        'BITS',
        'BOOL',
        'BY',
        'BYTES',
        'CASE',
        'CHANNEL',
        'CHAR',
        'CLASS',
        'CODE',
        'COL',
        'COMMENT',
        'COMPLEX',
        'COMPL',
        'DIAG',
        'DO',
        'DOWNTO',
        'EDOC',
        'ELIF',
        'ELSE',
        'ELSF',
        'EMPTY',
        'END',
        'ENVIRON',
        'ESAC',
        'EXIT',
        'FALSE',
        'FILE',
        'FI',
        'FLEX',
        'FORMAT',
        'FOR',
        'FROM',
        'GO',
        'GOTO',
        'HEAP',
        'IF',
        'IN',
        'INT',
        'ISNT',
        'IS',
        'LOC',
        'LONG',
        'MODE',
        'NEW',
        'NIL',
        'OD',
        'OF',
        'OP',
        'open',
        'OREL',
        'ORF',
        'OUSE',
        'OUT',
        'PAR',
        'PIPE',
        'PRAGMAT',
        'PRIO',
        'PROC',
        'REAL',
        'REF',
        'ROW',
        'SEMA',
        'SHORT',
        'SKIP',
        'SOUND',
        'STRING',
        'STRUCT',
        'THEF',
        'THEN',
        'TO',
        'TRNSP',
        'TRUE',
        'UNION',
        'UNTIL',
        'VOID',
        'WHILE',
    ],
    builtins: [
        'sqrt',
        'curt',
        'cbrt',
        'exp',
        'ln',
        'log',
        'sin',
        'arcsin',
        'cos',
        'arccos',
        'tan',
        'arctan',
        'arctan2',
        'sinh',
        'arcsinh',
        'cosh',
        'arccosh',
        'tanh',
        'arctanh',
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
            [/^`\w+/, 'type.identifier'],
            [
                /@?[#a-zA-Z_]\w*/,
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
            [/^#/, 'comment', '@commentSharp'],
            [/^COMMENT/, 'comment', '@comment'],
            [/^CO/, 'comment', '@commentCo'],
        ],
        comment: [
            [/[^COMMENT]+/, 'comment'],
            [/COMMENT/, 'comment', '@pop'],
            [/[COMMENT]/, 'comment'],
        ],
        commentSharp: [
            [/[^#]+/, 'comment'],
            [/#/, 'comment', '@pop'],
            [/#/, 'comment'],
        ],
        commentCo: [
            [/[^CO]+/, 'comment'],
            [/CO/, 'comment', '@pop'],
            [/[CO]/, 'comment'],
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
