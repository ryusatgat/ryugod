/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '//',
        blockComment: ["(*", "*)", "{", "}"],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['if', 'end if'],
        ['for', 'end for'],
        ['while', 'end while'],
        ['is func', 'end func'],
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
        { open: "'", close: "'" },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else|interface).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
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
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.sd7',
    keywords: [
        'BEGIN',
        'CASE',
        'CONST',
        'DO',
        'DOWNTO',
        'ELSE',
        'ELSIF',
        'END',
        'ENUM',
        'EXP',
        'FOR',
        'FORWARD',
        'FUNC',
        'FALSE',
        'IF',
        'IN',
        'INCLUDE',
        'INOUT',
        'IS',
        'LOCAL',
        'NEW',
        'OF',
        'OTHERWISE',
        'PARAM',
        'RANGE',
        'REF',
        'REPEAT',
        'RESULT',
        'RETURN',
        'SCI',
        'STRUCT',
        'SYNTAX',
        'SYSTEM',
        'THEN',
        'TO',
        'TRUE',
        'UNTIL',
        'VAL',
        'VAR',
        'WHEN',
        'WHILE',
        'ARRAY',
        'BIGINTEGER',
        'BIGRATIONAL',
        'BITSET',
        'BOOLEAN',
        'CHAR',
        'COLOR',
        'COMPLEX',
        'DURATION',
        'EXPR',
        'FILE',
        'FLOAT',
        'FUNC',
        'HASH',
        'INTEGER',
        'OBJECT',
        'PROC',
        'PROGRAM',
        'RATIONAL',
        'REFERENCE',
        'REF_LIST',
        'SET',
        'STRING',
        'TEXT',
        'TIME',
        'TYPE',
        'VARFUNC',
        'VOID',
        'AND',
        'CONV',
        'DIGITS',
        'DIV',
        'EXP',
        'LPAD',
        'LPAD0',
        'MDIV',
        'MOD',
        'MULT',
        'NOT',
        'OR',
        'PARSE',
        'REM',
        'RPAD',
        'SCI',
        'TIMES',
        'VARCONV',
    ],
    builtins: [
        'READ',
        'READLN',
        'WRITE',
        'WRITELN',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: 'if', close: 'end if', token: 'delimiter.if' },
        { open: 'for', close: 'end for', token: 'delimiter.for' },
        { open: 'while', close: 'end while', token: 'delimiter.while' },
        { open: 'is func', close: 'end func', token: 'delimiter.func' },
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
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
            [/\(\*/, 'comment', '@comment'],
            [/{/, 'comment', '@comment2'],
        ],
        comment: [
            [/[^\(*]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/[\(*]/, 'comment']
        ],
        comment2: [
            [/[^\{]+/, 'comment'],
            [/\}/, 'comment', '@pop'],
            [/[\{]/, 'comment']
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
