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
    ignoreCase: true,
    tokenPostfix: '.lst',
    keywords: [
        'APPEND',
        'AUTO',
        'CASE',
        'CLOSE',
        'CLOSED',
        'CON',
        'CURSOR',
        'DATA',
        'DEL',
        'DELETE',
        'DIM',
        'DIR',
        'DIR$',
        'DO',
        'DOWNTO',
        'DYNAMIC',
        'EDIT',
        'ELIF',
        'ELSE',
        'END',
        'ENDCASE',
        'ENDFOR',
        'ENDFUNC',
        'ENDIF',
        'ENDLOOP',
        'ENDPROC',
        'ENDTRAP',
        'ENDWHILE',
        'ENTER',
        'ENV',
        'EXEC',
        'EXIT',
        'EXTERNAL',
        'FILE',
        'FOR',
        'FUNC',
        'GLOBAL',
        'HANDLER',
        'IF',
        'IMPORT',
        'INPUT',
        'LIST',
        'LOAD',
        'LOCAL',
        'LOOP',
        'NAME',
        'NEW',
        'NEXT',
        'NULL',
        'OF',
        'OPEN',
        'OS',
        'OTHERWISE',
        'PAGE',
        'PASS',
        'PRINT',
        'PROC',
        'QUIT',
        'RANDOM',
        'READ',
        'REF',
        'RENUM',
        'RENUMBER',
        'REPEAT',
        'RESTORE',
        'RETRY',
        'RETURN',
        'RUN',
        'SAVE',
        'SCAN',
        'SELECT',
        'SPC$',
        'STATIC',
        'STEP',
        'STOP',
        'SYS',
        'THEN',
        'TO',
        'TRACE',
        'TRAP',
        'UNIT',
        'UNIT$',
        'UNTIL',
        'USING',
        'WHEN',
        'WHILE',
        'WRITE',
    ],
    builtins: [
        'ABS',
        'ACS',
        'ASN',
        'ATN',
        'CHR$',
        'COS',
        'DEG',
        'EOD',
        'EOF',
        'ERR',
        'ERRLINE',
        'ERRTEXT$',
        'EXP',
        'FALSE',
        'FRAC',
        'INT',
        'LEN',
        'LN',
        'LOG',
        'NOT',
        'ORD',
        'PI',
        'RAD',
        'RND',
        'ROUND',
        'SGN',
        'SIN',
        'SQR',
        'STR$',
        'TAN',
        'TRUE',
        'VAL',
    ],
    typeKeywords: [],
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
            [/[a-zA-Z_]\w*[#\$]/, 'variable'],
            [
                /[a-zA-Z_]\w*[#\$]?/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
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
