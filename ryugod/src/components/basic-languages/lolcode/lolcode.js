/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: 'BTW',
        blockComment: ["OBTW", "TLDR"]
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
    tokenPostfix: '.lol',
    keywords: [
        'TROOF',
        'NOOB',
        'NUMBR',
        'NUMBAR',
        'YARN',
        'TYPE',
        'A',
        'ALL',
        'AN',
        'ANIMAL',
        'ANY',
        'BIGGR',
        'BOTH',
        'BTW',
        'BUKKIT',
        'COLOR',
        'DIFF',
        'DIFFRINT',
        'FAIL',
        'FISH',
        'FLAVOR',
        'GIMMEH',
        'GTFO',
        'HAS',
        'HOW',
        'I',
        'IF',
        'IM',
        'IN',
        'IS',
        'IT',
        'ITZ',
        'IZ',
        'MAEK',
        'MEBBE',
        'MKAY',
        'MOD',
        'NO',
        'NOT',
        'NOW',
        'NERFIN',
        'NOOB',
        'NUMBAR',
        'NUMBR',
        'O',
        'OF',
        'OIC',
        'OMG',
        'OMGWTF',
        'OUTTA',
        'PRODUKT',
        'QUOSHUNT',
        'R',
        'RED',
        'RLY',
        'SAEM',
        'SAY',
        'SMALLR',
        'SMOOSH',
        'SO',
        'SUM',
        'KTHXBYE',
        'TIL',
        'TRANSPARENT',
        'TROOF',
        'U',
        'UPPIN',
        'VISIBLE',
        'WAI',
        'WILE',
        'WIN',
        'WON',
        'WTF?',
        'YA',
        'YARN',
        'YELLOW',
        'YR',
    ],
    builtins: [
        "HAI"
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
            [/[:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/:[\)>o":]/, 'type.identifier'],
            [/:[\({\[].*?[\)}\]]/, 'metag'],
            [
                /[a-zA-Z_][\w\?]*/,
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
            [/(BTW.*$)/, 'comment'],
            [/OBTW/, 'comment', '@comment'],
        ],
        comment: [
            [/[^OBTW]+/, 'comment'],
            [/TLDR/, 'comment', '@pop'],
            [/[OBTW]/, 'comment']
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
