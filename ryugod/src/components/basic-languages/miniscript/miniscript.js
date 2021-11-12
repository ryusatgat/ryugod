/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ['//'],
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
            beforeText: new RegExp('^\\s*(?:function|if|else|while|for).*?\\s*$'),
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
    tokenPostfix: '.ms',
    keywords: [
        '__isa',
        '_G',
        '_VERSION',
        'assert',
        'break',
        'collectgarbage',
        'continue',
        'dofile',
        'else',
        'end',
        'error',
        'false',
        'for',
        'function',
        'getfenv',
        'getmetatable',
        'if',
        'in',
        'ipairs',
        'loadfile',
        'loadstring',
        'math',
        'module',
        'new',
        'next',
        'null',
        'pairs',
        'pcall',
        'print',
        'rawequal',
        'rawget',
        'rawset',
        'repeat',
        'require',
        'return',
        'select',
        'self',
        'setfenv',
        'setmetatable',
        'then',
        'tonumber',
        'tostring',
        'true',
        'type',
        'unpack',
        'while',
        'xpcall',
    ],
    builtins: [        
        'abs',
        'acos',
        'asin',
        'atan',
        'char',
        'clock',
        'close',
        'concat',
        'cos',
        'cpath',
        'date',
        'difftime',
        'execute',
        'exit',
        'flush',
        'getenv',
        'hasIndex',
        'indexes',
        'indexOf',
        'indexOf',
        'input',
        'insert',
        'len',
        'lines',
        'loaded',
        'loadlib',
        'lower',
        'maxn',
        'open',
        'output',
        'path',
        'pi',
        'pop',
        'popen',
        'preload',
        'pull',
        'push',
        'r',
        'range',
        'read',
        'remove',
        'rename',
        'rnd',
        'seeall',
        'setlocale',
        'shuffle',
        'sign',
        'sin',
        'slice',
        'sort',
        'sqrt',
        'sum',
        'tan',
        'time',
        'tmpfile',
        'tmpname',
        'type',
        'upper',
        'values',
        'write',
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
            [/(@!|&:)(\s+)?[a-zA-Z_]\w*/, 'metatag'],
            [
                /@?[.a-zA-Z_]\w*/,
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
            [/(^\/\/.*$)/, 'comment'],
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
