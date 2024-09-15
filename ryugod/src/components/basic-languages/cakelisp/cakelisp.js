/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ';',
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
    tokenPostfix: '.cake',
    keywords: [
        'while',
        'for-in',
        'return',
        'continue',
        'break',
        'when',
        'unless',
        'array',
        'set',
        'scope',
        'new',
        'delete',
        'new-array',
        'delete-array',
    ],
    builtins: [
        'c-import',
        'import',
        'defun',
        'defun-local',
        'defun-comptime',
        'defun-nodecl',
        'def-function-signature',
        'def-function-signature-global',
        'def-type-alias',
        'def-type-alias-global',
        'defmacro',
        'defgenerator',
        'defstruct',
        'defstruct-local',
        'var',
        'var-global',
        'var-static',
        'at',
        'if',
        'cond',
        'c-preprocessor-define',
        'c-preprocessor-define-global',
        'ignore',
        'path',
        'defer',
        'tokenize-push',
        'rename-builtin',
        'splice-point',
        'set-cakelisp-option',
        'set-module-option',
        'skip-build',
        'add-cpp-build-dependency',
        'add-c-build-dependency',
        'add-compile-time-hook',
        'add-compile-time-hook-module',
        'add-build-options',
        'add-cpp-build-options',
        'add-build-options-global',
        'add-c-search-directory-module',
        'add-c-search-directory-global',
        'add-cakelisp-search-directory',
        'add-library-search-directory',
        'add-library-runtime-search-directory',
        'add-library-dependency',
        'add-compiler-link-options',
        'add-linker-options',
        'add-static-link-objects',
        'add-build-config-label',
        'comptime-error',
        'comptime-cond',
        'comptime-define-symbol',
        'export',
        'export-and-evaluate',
    ],
    typeKeywords: [
        'deref',
        'addr',
        'field',
        'call-on',
        'call-on-ptr',
        'call',
        'in',
        'type-cast',
        'type',
        'or',
        'and',
        'not',
        'bit-or',
        'bit-and',
        'bit-xor',
        'bit-not',
        'bit-shift-<<',
        'bit-shift->>',
        'mod',
        'incr',
        'decr',
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
                /[a-zA-Z_][<>\-\w]*/,
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
            [/(;.*$)/, 'comment'],
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
