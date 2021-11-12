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
    tokenPostfix: '.sm',
    keywords: [

        'set',
        'opset',
        'include',
        'if',
        'while',
        'till',
        'fn',
        'quote',
        'scope',
        'prog1',
        'progn',
        'return',
        'catch',
        'not',
        'or',
        'and',
        'eq',
        'ne',
        'new',
        'dot',
        'index',
        'is',
        'typeof',
        'brk',
        'var',
        'const',
        'auto',
        'keyword',
        'if',
        'unless',
        'then',
        'else',
        'do',
        'while',
        'until',
        'till',
        'when',
        'return',
        'try',
        'catch',
        'not',
        'or',
        'and',
        'new',
    ],
    builtins: [
    ],
    typeKeywords: [
        'ADDEXPR',
        'ALPHANAME',
        'ASSIGN',
        'BINARYEXPR',
        'BOOL',
        'BYTE',
        'CHAR',
        'CMPEXPR',
        'COLONEXPR',
        'CONSEXPR',
        'DOTEXPR',
        'DYNSTRING',
        'EXPR',
        'EXPRS',
        'FLOAT',
        'FLOAT128',
        'FLOAT16',
        'FLOAT32',
        'FLOAT64',
        'FLOAT8',
        'FUNC',
        'INT',
        'INT128',
        'INT16',
        'INT32',
        'INT64',
        'INT8',
        'MULEXPR',
        'NAME',
        'NEWEXPR',
        'NUMBER',
        'PREFIXEXPR',
        'POSTFIXEXPR',
        'PUNCTNAME',
        'RANGEEXPR',
        'RAWLIST',
        'RAWLISTTERM',
        'RAWSTRING',
        'REAL',
        'REAL128',
        'REAL16',
        'REAL32',
        'REAL64',
        'REAL8',
        'SCOPE',
        'STMT',
        'STRING',
        'TERM',
        'VARIABLE',
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
            [/[a-zA-Z_][\w\-]*\?/, 'metatag'],
            [
                /[a-zA-Z_][\w\-]*/,
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
