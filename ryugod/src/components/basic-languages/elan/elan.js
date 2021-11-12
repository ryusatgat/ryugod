/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        blockComment: ["{", "}"]
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
    tokenPostfix: '.e',
    keywords: [
        'AND',
        'BOOL',
        'BREAK',
        'CASE',
        'CAT',
        'COMPLEX',
        'CONCR',
        'CONST',
        'DECR',
        'DEFINES',
        'DIV',
        'DOWNTO',
        'ELIF',
        'ELSE',
        'END',
        'ENDOP',
        'ENDPACKET',
        'ENDPROC',
        'ENDREP',
        'ENDSELECT',
        'FALSE',
        'FI',
        'FILE',
        'FOR',
        'FROM',
        'HEAD',
        'IF',
        'IM',
        'INCR',
        'INT',
        'LEAVE',
        'LENGTH',
        'LET',
        'MOD',
        'NIL',
        'NOT',
        'OF',
        'OP',
        'OR',
        'OTHERWISE',
        'PACKET',
        'PROC',
        'RE',
        'RET',
        'REAL',
        'REP',
        'ROW',
        'SELECT',
        'STRUCT',
        'TAIL',
        'TEXT',
        'THEN',
        'TRUE',
        'TYPE',
        'UNTIL',
        'UPTO',
        'USE',
        'VAR',
        'WHILE',
        'WIDGET',
        'WITH',
        'SIGN',
        'ABS',
    ],
    builtins: [
        'abs',
        'angle',
        'arccos',
        'arcsin',
        'arctan',
        'ascii',
        'assert',
        'beep',
        'change',
        'character',
        'choose128',
        'clear',
        'close',
        'code',
        'color',
        'compress',
        'conversion',
        'cos',
        'current',
        'cursor',
        'digit',
        'draw',
        'e',
        'edit',
        'enter',
        'eof',
        'erase',
        'exectime',
        'exp',
        'file',
        'flase',
        'freespace',
        'get',
        'graphics',
        'in',
        'inchar',
        'int',
        'isnil',
        'leave',
        'limit',
        'line',
        'ln',
        'log10',
        'log2',
        'max',
        'maxreal',
        'min',
        'mode',
        'move',
        'name',
        'new',
        'no',
        'off',
        'old',
        'on',
        'opened',
        'page',
        'plot',
        'pos',
        'position',
        'put',
        'putline',
        'radian',
        'random',
        'read',
        'real',
        'replace',
        'round',
        'sign',
        'sin',
        'sleep',
        'smallreal',
        'sqrt',
        'stop',
        'subtext',
        'tan',
        'text',
        'trace',
        'true',
        'trunc',
        'turtle',
        'window',
        'write',
        'yes',
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
            [/[a-zA-Z_][\w]*::?$/, 'metatag'],
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
            [/{/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\}]+/, 'comment'],
            [/}/, 'comment', '@pop'],
            [/[}]/, 'comment']
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
