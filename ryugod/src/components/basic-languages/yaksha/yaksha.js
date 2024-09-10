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
    tokenPostfix: '.yaksha',
    keywords: [
        'while',
        'def',
        'import',
        'continue',
        'break',
        'if',
        'elif',
        'else',
        'class',
        'struct',
        'enum',
        'return',
        'pass',
        'as',
        'for',
        'in',
        'macros',
        'defer',
        'del',
        'ccode',
        'runtimefeature',
        'directive',
    ],
    builtins: [
        'print',
        'println',
        'len',
        'arrput',
        'arrpop',
        'arrnew',
        'array',
        'getref',
        'unref',
        'charat',
        'shnew',
        'shput',
        'shget',
        'shgeti',
        'hmnew',
        'hmput',
        'hmget',
        'hmgeti',
        'cast',
        'qsort',
        'iif',
        'foreach',
        'countif',
        'filter',
        'map',
        'binarydata',
        'arrsetlen',
        'arrsetcap',
        'fixedarr',
    ],
    typeKeywords: [
        'True',
        'False',
        'None',
        'int',
        'float',
        'i8',
        'i16',
        'i32',
        'i64',
        'u8',
        'u16',
        'u32',
        'u64',
        'float',
        'f32',
        'f64',
        'Array',
        'Function',
        'In',
        'Const',
        'AnyPtr',
        'Out',
        'SMEntry',
        'MEntry',
        'str',
        'bool',
        'Ptr',
        'Tuple',
        'AnyPtrToConst',
        'FixedArr',
        'nativedefine',
        'varargs',
        'onstack',
        'nativemacro',
        'native',
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
            [/-?0x([abcdef]|[ABCDEF]|\d)+(i8|u8|i16|u16|i32|u32|i64|u64)?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?(i8|u8|i16|u16|i32|u32|i64|u64|f)?/, 'number']
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
