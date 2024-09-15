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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
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
    tokenPostfix: '.dora',
    keywords: [
        'true',
        'false',
        'class',
        'enum',
        'value',
        'union',
        'trait',
        'impl',
        'annotation',
        'mod',
        'use',
        'package',
        'fun',
        'let',
        'var',
        'const',
        'return',
        'if',
        'else',
        'while',
        'for',
        'in',
        'self',
        'super',
        'is',
        'as',
        'of',
        'type',
        'alias',
        'Self',
    ],
    builtins: [
        'abort',
        'abs',
        'argc',
        'argv',
        'Array',
        'asFloat32',
        'asFloat64',
        'asInt32',
        'asInt64',
        'assert',
        'bitwiseAnd',
        'bitwiseOr',
        'bitwiseXor',
        'ChartoInt32',
        'clone',
        'compareExchange',
        'compareTo',
        'countOneBits',
        'countOneBitsLeading',
        'countOneBitsTrailing',
        'countZeroBits',
        'countZeroBitsLeading',
        'countZeroBitsTrailing',
        'debug',
        'div',
        'equals',
        'exchange',
        'exit',
        'fatalError',
        'fetchAdd',
        'Float32toInt32',
        'Float64toInt32',
        'forceCollect',
        'forceMinorCollect',
        'get',
        'getByte',
        'Int32toUInt8',
        'Int64toUInt8',
        'isNan',
        'join',
        'minus',
        'not',
        'plus',
        'print',
        'println',
        'remainder',
        'reverseBits',
        'reverseBytes',
        'rotateLeft',
        'rotateRight',
        'roundDown',
        'roundHalfEven',
        'roundToZero',
        'roundUp',
        'set',
        'shiftLeft',
        'shiftRight',
        'shiftRightSigned',
        'size',
        'sleep',
        'sortsAs',
        'sqrt',
        'Stringhash',
        'times',
        'timestamp',
        'toCharUnchecked',
        'toFloat32',
        'toFloat64',
        'toInt32',
        'toInt64',
        'toString',
        'UInt8toChar',
        'unaryMinus',
        'unaryPlus',
        'UnitBooltoInt32',
        'unreachable',
        'wrappingAdd',
        'wrappingMul',
        'wrappingSub',
    ],
    typeKeywords: [
        'u8',
        'i32',
        'i64',
        'f32',
        'f64',
        'Unit',
        'Bool',
        'Int32',
        'Char',
        'Int64',
        'Float32',
        'Float64',
        'UInt8',
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
            [/-?(['\d]*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
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
