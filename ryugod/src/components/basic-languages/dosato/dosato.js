/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else).*?\\s*$'),
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
    tokenPostfix: '.to',
    keywords: [
        'do',
        'make',
        'set',
        'define',
        'include',
        'import',
        'return',
        'break',
        'continue',
        'switch',
        'const',
        'when',
        'while',
        'else',
        'catch',
        'then',
        'for',
        'if',
    ],
    builtins: [
        'say',
        'sayln',
        'listen',
        'read',
        'write',
        'append',
        'delete',
        'exists',
        'move',
        'copy',
        'clear',
        'end',
        'pause',
        'system',
        'srandom',
        'random',
        'randomint',
        'randomrange',
        'randombool',
        'time',
        'sleep',
        'datetime',
        'clock',
        'abs',
        'round',
        'floor',
        'ceil',
        'pow',
        'sqrt',
        'min',
        'max',
        'log',
        'log10',
        'log2',
        'exp',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'atan2',
        'clamp',
        'split',
        'lower',
        'upper',
        'stringlength',
        'substring',
        'stringindexof',
        'stringlastindexof',
        'startswith',
        'endswith',
        'replace',
        'trim',
        'stringreverse',
        'stringcontains',
        'stringremove',
        'stringinsert',
        'stringtoint',
        'stringtodouble',
        'stringcount',
        'join',
        'format',
        'to_string',
        'sort',
        'push',
        'pop',
        'shift',
        'unshift',
        'slice',
        'splice',
        'indexof',
        'lastindexof',
        'reverse',
        'fill',
        'range',
        'rangef',
        'counter',
        'setcounter',
        'typeof',
        'isnull',
        'typeintof',
        'isnan',
        'throw',
    ],
    typeKeywords: [
        'int',
        'bool',
        'string',
        'float',
        'double',
        'char',
        'short',
        'long',
        'byte',
        'void',
        'array',
        'uint',
        'ushort',
        'ulong',
        'ubyte',
        'object',
        'var',
        'function',
        'false',
        'true',
        'null',
        'infinity',
        'nan',
        'other',
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
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
