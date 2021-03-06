/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.ks',
    keywords: [
        'if',
        'elif',
        'else',
        'while',
        'for',
        'try',
        'catch',
        'finally',
        'ret',
        'throw',
        'and',
        'assert',
        'async',
        'await',
        'break',
        'extends',
        'continue',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'in',
        'is',
        'lambda',
        'nonlocal',
        'not',
        'or',
        'pass',
        'raise',
        'ret',
        'try',
        'while',
        'with',
        'yield',
        'as',
        'import',
        'func',
    ],
    builtins: [
        'abs',
        'pow',
        'min',
        'max',
        'sum',
        'bin',
        'oct',
        'hex',
        'ord',
        'chr',
        'compile',
        'eval',
        'exec',
        'enumerate',
        'filter',
        'map',
        'zip',
        'all',
        'any',
        'iter',
        'next',
        'len',
        'hash',
        'id',
        'repr',
        'print',
        'printf',
        'isinst',
        'issub',
        'input',
        'exit',
        'object',
        'number',
        'int',
        'enum',
        'bool',
        'float',
        'complex',
        'str',
        'bytes',
        'range',
        'slice',
        'tuple',
        'list',
        'set',
        'dict',
        'abs',
        'template',
        'new',
        'init',
        'free',
        'call',
        'iter',
        'next',
        'number',
        'integral',
        'bool',
        'int',
        'float',
        'complex',
        'str',
        'bytes',
        'set',
        'dict',
        'getattr',
        'setattr',
        'delattr',
        'getelem',
        'setelem',
        'delelem',
        'contains',
        'hash',
        'abs',
        'len',
        'repr',
        'add',
        'sub',
        'mul',
        'div',
        'floordiv',
        'mod',
        'pow',
        'cmp',
        'eq',
        'ne',
        'lt',
        'le',
        'gt',
        'ge',
        'lsh',
        'rsh',
        'binior',
        'binxor',
        'binand',
        'pos',
        'neg',
        'sqig',
    ],
    typeKeywords: [
        'true',
        'false',
        'inf',
        'nan',
        'none',
        'undefined',
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
            [/(==|\|\||!=|>=|[><*/^~%@\-+]|<=|>=|\/\/|<=>|\.\.\.)/, 'delimiter'],
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
            [/"""/, 'string.escape', '@trpStringBody'],
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
        ],
        trpStringBody: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"""/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
