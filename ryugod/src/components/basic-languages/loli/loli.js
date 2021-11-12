/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["#[", "]#"]
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
    tokenPostfix: '.li',
    keywords: [
        'as',
        'case',
        'class',
        'elif',
        'else',
        'enum',
        'except',
        'false',
        'fn',
        'for',
        'future',
        'if',
        'import',
        'in',
        'match',
        'pub',
        'raise',
        'return',
        'self',
        'sta',
        'true',
        'try',
        'unit',
        'var',
        'while',
    ],
    builtins: [
        'Boolean',
        'Byte',
        'ByteString',
        'Exception',
        'DivisionByZeroError',
        'Coroutine',
        'Double',
        'File',
        'Function',
        'Hash',
        'Integer',
        'List',
        'String',
        'Tuple',
        'Option',
        'Result',
        'sayln',
        'say',
        'input',
        'range',
        'calltrace',
        'md5',
        'sha1',
        'huge',
        'nan',
        'pi',
        'abs',
        'acos',
        'asin',
        'atan',
        'ceil',
        'cos',
        'cosh',
        'exp',
        'fabs',
        'floor',
        'fmod',
        'is_infinity',
        'is_nan',
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
        'to_deg',
        'to_rad',
        'Random',
        'argv',
        'listdir',
        'rmdir',
        'remove',
        'mkdir',
        'exists',
        'is_dir',
        'is_file',
        'exit',
        'getenv',
        'setenv',
        'recursion_limit',
        'set_recursion_limit',
        'Time',
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
            [/@[a-zA-Z_]\w*/, 'metatag'],
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
            [/#\[/, 'comment', '@comment'],
            [/(#.*$)/, 'comment'],
        ],
        comment: [            
            [/[^#\]]+/, 'comment'],          
            [/\]#/, 'comment', '@pop'],
            [/[\]]/, 'comment']
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
