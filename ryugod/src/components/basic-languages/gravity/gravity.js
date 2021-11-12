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
            beforeText: new RegExp('^\\s*(?:func|if|for|else|while|repeat).*?\\s*$'),
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
    tokenPostfix: '.gravity',
    keywords: [
        '_args',
        '_func',
        'and',
        'break',
        'case',
        'class',
        'const',
        'continue',
        'default',
        'else',
        'enum',
        'event',
        'extern',
        'false',
        'file',
        'for',
        'func',
        'if',
        'import',
        'in',
        'internal',
        'is',
        'lazy',
        'module',
        'not',
        'null',
        'or',
        'private',
        'public',
        'repeat',
        'return',
        'static',
        'struct',
        'super',
        'switch',
        'true',
        'undefined',
        'var',
        'while',
    ],
    builtins: [
        'random',
        'radians',
        'degrees',
        'loop',
        'min',
        'max',
        'ceil',
        'round',
        'floor',
        'index',
        'count',
        'upper',
        'lower',
        'split',
        'contains',
        'replace',
        'push',
        'pop',
        'join',
        'map',
        'filter',
        'reduce',
        'sort',
        'keys',
        'remove',
        'hasKey',
        'disassemble',
        'bind',
        'unbind',
        'nanotime',
        'exit',
        'gcEnabled',
        'gcRatio',
        'gcMinThreshold',
        'gcThreshold',
        'gcEnabled',
        'print',
        'put',
        'PI',
        'E',
        'LN2',
        'LN10',
        'LOG2E',
        'LOG10E',
        'SQRT2',
        'SQRT1_2',
        'abs',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'atan2',
        'exp',
        'pow',
        'sqrt',
        'cbrt',
        'xrt',
        'log',
        'log10',
        'logx',
        'size',
        'exists',
        'is_directory',
        'read',
        'directory_scan',
        'open',
        'close',
        'write',
        'isEOF',
        'get',
        'set',
        'argc',
        'argv',
    ],
    classes: [
        'Int',
        'Float',
        'String',
        'Bool',
        'Null',
        'Class',
        'Function',
        'Fiber',
        'Instance',
        'List',
        'Map',
        'Range',
        'Function',
        'Closure',
        
        'System',
        'Math',
        'File',
        'ENV',
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
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@classes': 'metatag',
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
