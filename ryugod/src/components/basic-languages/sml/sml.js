/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        blockComment: ["(*", "*)"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{*', close: '*}' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{*', close: '*}' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.sml',
    keywords: [
        'abstype',
        'and',
        'andalso',
        'as',
        'case',
        'dat',
        'type',
        'do',
        'else',
        'end',
        'eqtype',
        'exception',
        'fn',
        'fun',
        'functor',
        'handle',
        'if',
        'in',
        'include',
        'infix',
        'infixr',
        'let',
        'local',
        'nonfix',
        'of',
        'op',
        'open',
        'orelse',
        'raise',
        'rec',
        'sharing',
        'sig',
        'signature',
        'struct',
        'structure',
        'then',
        'type',
        'val',
        'where',
        'with',
        'withtype',
        'while'
    ],
    builtins: [
        'print',        
        'toString',
        'fromInt',
    ],
    typeKeywords: [
        'Int',
        'Real',
        'String',
        'Bool',
        'Char',
        'int',
        'string',
        'real',
        'char',
        'bool',
        'true',
        'false',
        'float',
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
            [/\(\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\(\*]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/[\(\*]/, 'comment']
        ],
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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

