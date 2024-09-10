/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
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
            beforeText: new RegExp('^\\s*(?:funtion|for|if|else).*?\\s*$'),
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
    tokenPostfix: '.beryl',
    keywords: [
        'with',
        'do',
        'end',
        'if',
        'not',
        'array',
        'forin',
        'for',
        'foreachin',
        'table',
        'struct',
        'tag',
        'new',
        'assert',
        'and',
        'or',
        'insert',        
        'cat',
        'in',
        'sizeof',
        'replace',
        'filter',
        'push',
        'mod',
        'arrayof',        
        'loop',
    ],
    builtins: [
        'find',
        'beginswith',
        'findright',
        'endswith',
        'substring',
        'default',
        'strreplace',
        'parsenumber',
        'asstring',
        'round',
        'isint',
        'try',
        'error',
        'sort',
        'random',
        'slice',
        'pop',
        'peek',
        'apply',
        'join',
        'map',
        'forevery',
        'strip',
        'split',
        'identity',
        'typeof',
        'joinwith',
        'repeat',
        'max',
        'findin',
        'floor',
        'ceil',
        'first',
        'exists',
        'all',
        'refcount',
        'ptrof',
        'capof',
        'read',
        'print',
        'write',
        'printexactly',
        'input',
        'append',
        'fileexists',
        'printf',
        'hold',
        'loaddl',
        'getenv',
        'run',
        'rands',
        'randhexs',
        'time',
        'converttime',
        'gettime',
        'regex',
        'pairs',
        'implies',
        'requireversion',
        'empty',
    ],
    typeKeywords: [
        'let',
        'function',
        'global',
        'union',
        'constructarray',
        'eval',
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
            [/@[a-zA-Z_]\w*/, 'tag'],
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
            [/(#.*$)/, 'comment'],
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
