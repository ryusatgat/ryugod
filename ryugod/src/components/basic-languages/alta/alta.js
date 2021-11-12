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
    tokenPostfix: '.alta',
    keywords: [
        'function',
        'import',
        'class',
        'all',
        'as',
        'async',
        'await',
        'break',
        'catch',
        'const',
        'continue',
        'delete',
        'else',
        'export',
        'for',
        'from',
        'generator',
        'generic',
        'if',
        'instanceof',
        'let',
        'literal',
        'long',
        'module',
        'not',
        'null',
        'package',
        'persistent',
        'private',
        'protected',
        'ptr',
        'public',
        'ref',
        'return',
        'short',
        'signed',
        'super',
        'this',
        'throw',
        'unsigned',
        'using',
        'var',
        'while',
        'yield',
    ],
    builtins: [
        'print',
        'printLine',
        'printError',
        'printf',
        'charAt',
        'byteAt',
        'append',
        'prepend',
        'substring',
        'includes',
        'indexOf',
        'lastIndexOf',
        'allocate',
        'zeroAllocate',
        'reallocate',
        'free',
        'unsafeAllocate',
        'unsafeZeroAllocate',
        'unsafeRealloc',
        'unsafeFree',
        'parseNumber',
        'parseFloatingPoint',
        'numberToString',
        'floatingPointToString',
        'get',
        'push',
        'pop',
        'from',
        'to',
        'clear',
    ],
    typeKeywords: [
        'int',
        'char',
        'byte',
        'double',
        'float',
        'bool',
        'void',
        'any',
        'true',
        'false',
        'Size',
        'rawstring',
        'rawconststring',
        'int8',
        'int16',
        'int32',
        'int64',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'Int8',
        'Int16',
        'Int32',
        'Int64',
        'UInt8',
        'UInt16',
        'UInt32',
        'UInt64',
        'Int8Minimum',
        'Int8Maximum',
        'UInt8Maximum',
        'Int16Minimum',
        'Int16Maximum',
        'UInt16Maximum',
        'Int32Minimum',
        'Int32Maximum',
        'UInt32Maximum',
        'Int64Minimum',
        'Int64Maximum',
        'UInt64Maximum',
        'SizeMaximum',
        'UInt64ToUInt32',
        'UInt64ToUInt16',
        'UInt64ToUInt8',
        'UInt32ToUInt16',
        'UInt32ToUInt8',
        'UInt16ToUInt8',
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
            //[/##[a-zA-Z_]\w*/, 'tag'],
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
