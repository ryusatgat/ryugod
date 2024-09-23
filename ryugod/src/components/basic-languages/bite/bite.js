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
    tokenPostfix: '.bite',
    keywords: [
        'abstract',
        'add',
        'as',
        'ascending',
        'async',
        'await',
        'base',
        'break',
        'by',
        'case',
        'catch',
        'checked',
        'const',
        'continue',
        'default',
        'delegate',
        'descending',
        'descending ',
        'do',
        'else',
        'equals',
        'event',
        'explicit',
        'extern',
        'finally',
        'fixed',
        'for',
        'foreach',
        'from',
        'get',
        'goto',
        'group',
        'if',
        'implicit',
        'import',
        'in',
        'internal',
        'into',
        'is',
        'join',
        'let',
        'lock',
        'module',
        'new',
        'on',
        'operator',
        'orderby',
        'override',
        'partial',
        'private',
        'protected',
        'public',
        'readonly',
        'remove',
        'return',
        'sealed',
        'select',
        'set',
        'sizeof',
        'sizeof ',
        'stackalloc',
        'static',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'unchecked',
        'unsafe',
        'using',
        'value',
        'var',
        'virtual',
        'volatile',
        'where',
        'while',
        'yield',
    ],
    builtins: [
        'GetConstructor',
        'GetStaticMember',
        'GetStaticMethod',
        'GetMethod',
        'GetStaticClass',
        'GetGenericMethod',
        'Print',
        'PrintLine',
    ],
    typeKeywords: [
        'bool',
        'byte',
        'char',
        'class',
        'decimal',
        'double',
        'enum',
        'float',
        'function',
        'int',
        'interface',
        'long',
        'object',
        'sbyte',
        'short',
        'string',
        'struct',
        'uint',
        'ulong',
        'ushort',
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
            [/((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?/, 'number']
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
