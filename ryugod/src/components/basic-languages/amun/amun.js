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
            beforeText: new RegExp('^\\s*(?:fun|for|if|else|while).*?\\s*$'),
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
    tokenPostfix: '.amun',
    keywords: [
        'if',
        'for',
        'load',        
        'cast',
        'else',
        'while',
        'defer',
        'break',
        'return',
        'switch',
        'varargs',
        'continue',
        'operator',
        'type_size',
        'value_size',
        'type_allign',
    ],
    builtins: [
        'acos',
        'asin',
        'atan',
        'atan2',
        'ceil',
        'cos',
        'cosh',
        'exp',
        'abs',
        'fabs',
        'floor',
        'fmod',
        'frexp',
        'ldexp',
        'log',
        'log10',
        'modf',
        'pow',
        'sin',
        'sinh',
        'sqrt',
        'tan',
        'tanh',
        'erf',
        'erfc',
        'gamma',
        'hypot',
        'lgamma',
        'isnan',
        'acosh',
        'asinh',
        'atanh',
        'cbrt',
        'expm1',
        'ilogb',
        'log1p',
        'logb',
        'nextafter',
        'remainder',
        'rint',
        'getchar',
        'puts',
        'printf',
        'perror',
        'getenv',
        'system',
        'malloc',
        'free',
        'exit',
        'isalnum',
        'isalpha',
        'iscntrl',
        'isdigit',
        'isgraph',
        'islower',
        'isprint',
        'ispunct',
        'isspace',
        'isupper',
        'isxdigit',
        'tolower',
        'toupper',
        'memchr',
        'memcmp',
        'memcpy',
        'memmove',
        'memset',
    ],
    typeKeywords: [
        'fun',
        'var',
        'enum',
        'type',
        'false',
        'const',
        'import',
        'struct',
        'undefined',
        'null',
        'true',
        'int1',
        'int8',
        'int16',
        'int32',
        'int64',
        'char',
        'uchar',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'float32',
        'float64',
        'void',
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
