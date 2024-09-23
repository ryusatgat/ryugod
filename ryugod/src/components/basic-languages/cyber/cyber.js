/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '-',
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
    tokenPostfix: '.cy',
    keywords: [
        'and',
        'as',
        'await',
        'break',
        'case',
        'catch',
        'coinit',
        'context',
        'continue',
        'coresume',
        'coyield',
        'cstruct',
        'def',
        'dyn',
        'else',
        'enum',
        'error',
        'false',
        'for',
        'func',
        'Func',
        'if',
        'mod',
        'none',
        'not',
        'object',
        'or',
        'pass',
        'return',
        'struct',
        'switch',
        'symbol',
        'throw',
        'trait',
        'true',
        'try',
        'type',
        'use',
        'var',
        'void',
        'while',
        'with',
    ],
    builtins: [
        'allTypes',
        'bitcast_',
        'choicetag_',
        'copy_',
        'dump',
        'eprint',
        'error',
        'errorReport',
        'getObjectRc',
        'is',
        'isAlpha',
        'isDigit',
        'isNone',
        'must',
        'panic',
        'performGC',
        'placeholder1',
        'placeholder2',
        'placeholder3',
        'print',
        'ptrcast_',
        'queueTask',
        'refcast',
        'runestr',
        'sizeof_',
        'typeInfo'
    ],
    typeKeywords: [
        'void',
        'bool',
        'symbol',
        'error',
        'int',
        'float',
        'placeholder2',
        'placeholder3',
        'byte',
        'taglit',
        'dyn',
        'any',
        'type',
        'ExprType',
        'List',
        'ListIterator',
        'Tuple',
        'Table',
        'Map',
        'MapIterator',
        'String',
        'ExternFunc',
        'Fiber',
        'Range',
        'TccState',
        'Future',
        'FutureResolver',
        'Memory',
        'array_t',
        'FuncSig',
        'funcptr_t',
        'funcunion_t',
        'Func',
        'funcsym_t',
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
            [/(--.*$)/, 'comment'],
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
