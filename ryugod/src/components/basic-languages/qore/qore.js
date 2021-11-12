/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
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
    tokenPostfix: '.q',
    keywords: [
        'abstract',
        'class',
        'const',
        'constructor',
        'deprecated',
        'destructor',
        'final',
        'inherits',
        'module',
        'namespace',
        'my our',
        'private hierarchy internal',
        'public',
        'static',
        'sub returns',
        'synchronized',
        'background',
        'cast',
        'chomp',
        'delete',
        'elements',
        'exists',
        'extract',
        'foldl',
        'foldr',
        'instanceof',
        'keys',
        'map',
        'new',
        'pop',
        'push',
        'remove',
        'select',
        'shift',
        'splice',
        'trim',
        'unshift',
        'if else',
        'switch',
        'case default',
        'for foreach in',
        'find in',
        'while do',
        'break continue',
        'try catch',
        'rethrow throw',
        'context subcontext summarize by',
        'where sortBy sortDescendingBy',
        'on_exit on_success on_error',
        'thread_exit',
        'return',
        'binary',
        'bool softbool',
        'date softdate',
        'float softfloat',
        'int softint',
        'number softnumber',
        'string softstring',
        'timeout',
        'any',
        'auto',
        'code',
        'data',
        'hash hashdecl',
        'list softlist',
        'nothing',
        'object',
        'reference',
    ],
    builtins: [
        'CONSTANT',
        'DEPRECATED',
        'NOOP',
        'RET_VALUE_ONLY',
        'RUNTIME_NOOP',
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
            [/%[a-zA-Z_][\w-]*/, 'metatag'],
            [/\$[a-zA-Z_]?[\w]*/, 'variable'],
            [
                /[a-zA-Z_][\w-]*/,
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
            [/(#.*$)/, 'comment'],
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
