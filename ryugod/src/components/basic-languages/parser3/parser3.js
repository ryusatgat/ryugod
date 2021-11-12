/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["rem{", "}"]
    },
    brackets: [
        ['{', '}'],
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
    tokenPostfix: '.p',
    keywords: [
        'if',
        'for',
        'eval',
        'process',
        'while',
        'switch',
        'sleep',
        'case',
        'continue',
        'connect',
        'continue',
        'cache',
        'taint',
        'throw',
        'try',
        'untaint',
        'use',
        'apply-taint',
        'break',
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
            [/[,;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/:[a-zA-Z_]\w*/, 'variable'],
            [/@[a-zA-Z_]\w*/, 'type.identifier'],
            [/\$[a-zA-Z_]\w*/, 'metatag'],
            [
                /[a-zA-Z_](\w|-)*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(#.*$)/, 'comment'],
            [/REM{/, 'comment', '@comment'],
        ],
        comment: [
            [/}/, 'comment', '@pop'],
            [/[^REM{]+/, 'comment'],
            [/[REM{}]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],        
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/\]$/, 'string.escape', '@popall'],
            [/\[/, 'string.escape', '@stringBody'],
        ],
        stringBody: [
            [/[^\\\]]+$/, 'string', '@popall'],
            [/[^\\\]]+/, 'string'],
            [/\\\]/, 'string'],
            [/\]/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
   }
};
