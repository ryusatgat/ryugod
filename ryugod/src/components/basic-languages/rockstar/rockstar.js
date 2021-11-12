/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        blockComment: ["(", ")"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
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
    defaultToken: 'invalid',
    ignoreCase: true,
    tokenPostfix: '.rock',
    keywords: [
        'a',
        'an',
        'be',
        'break',
        'build',
        'continue',
        'down',
        'else',        
        'he',
        'her',
        'him',
        'if',
        'into',
        'is',
        'it',
        'knock',
        'let',
        'listen',
        'minus',
        'my',
        'of',
        'over',
        'plus',
        'pop',
        'put',
        'push',
        'roll',
        'rock',
        'say',
        'scream',
        'she',
        'shout',
        'take',
        'takes',
        'taking',
        'the',
        'them',
        'they',
        'times',
        'to',
        'top',
        'until',
        'up',
        'was',
        'were',
        'while',
        'whisper',
        'with',
        'without',
        'your',
        'mysterious',

    ],
    builtins: [
        'higher',
        'greater',
        'bigger',
        'stronger',
        'lower',
        'less',
        'smaller',
        'weaker',
        'as',
        'high',
        'great',
        'big',
        'strong',
        'low',
        'little',
        'small',
        'weak',
        'ain\'t',
        'not',
        'than',
        'knock',
    ],
    typeKeywords: [
        'definitely',
        'maybe',
        'empty',
        'gone',
        'nothing',
        'nobody',
        'nowhere',
        'null',
        'true',
        'false',
        'right',        
        'yes',
        'ok',
        'wrong',
        'no',
        'lies',
        'give',
        'back',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[.,:;]/, 'delimiter'],
            [/[{}\[\]]/, '@brackets'],
            [
                /[a-zA-Z_][\w']*/,
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
            [/\(/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\)]+/, 'comment'],
            [/\)/, 'comment', '@pop'],
            [/[\)]/, 'comment']
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
