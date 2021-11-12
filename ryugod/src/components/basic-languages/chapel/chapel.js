/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.chpl',
    keywords: [
        'align',
        'as',
        'atomic',
        'begin',
        'bool',
        'borrowed',
        'break',
        'by',
        'bytes',
        'catch',
        'class',
        'cobegin',
        'coforall',
        'compilerError',
        'compilerWarning',
        'complex',
        'config',
        'const',
        'continue',
        'delete',
        'delete',
        'dmapped',
        'do',
        'domain',
        'else',
        'enum',
        'enumerated',
        'except',
        'export',
        'extern',
        'false',
        'file',
        'for',
        'forall',
        'forwarding',
        'if',
        'imag',
        'import',
        'in',
        'in',
        'index',
        'init',
        'inline',
        'inout',
        'int',
        'integral',
        'iter',
        'label',
        'let',
        'lifetime',
        'local',
        'locale',
        'manage',
        'module',
        'new',
        'nil',
        'noinit',
        'none',
        'nothing',
        'numeric',
        'on',
        'only',
        'opaque',
        'otherwise',
        'out',
        'override',
        'owned',
        'param',
        'pragma',
        'private',
        'proc',
        'prototype',
        'public',
        'range',
        'real',
        'record',
        'reduce',
        'ref',
        'require',
        'return',
        'scan',
        'select',
        'serial',
        'shared',
        'single',
        'sparse',
        'string',
        'subdomain',
        'sync',
        'sync',
        'then',
        'these',
        'this',
        'throw',
        'throws',
        'true',
        'try',
        'type',
        'uint',
        'union',
        'unmanaged',
        'use',
        'var',
        'void',
        'when',
        'where',
        'while',
        'with',
        'yield',
        'zip',
    ],
    builtins: [

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
