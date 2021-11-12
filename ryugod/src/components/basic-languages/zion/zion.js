/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
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
    tokenPostfix: '.zion',
    keywords: [
        'and',
        'as',
        'break',
        'continue',
        'fn',
        'else',
        'for',
        'if',
        'in',
        'let',
        'match',
        'not',
        'null',
        'or',
        'pass',
        'return',
        'sizeof',
        'struct',
        'var',
        'while',
    ],
    builtins: [
        'chr',
        'not',
        'i8',
        'u8',
        'strlen',
        'putch',
        'print',
        'alloc',
        'nothing',
        'isspace',
        'isdigit',
        'isalpha',
        'islower',
        'isupper',
        'tolower',
        'toupper',
        'id',
        'panic',
        'range',
        'map',
        'filter',
        'enumerate',
        'resource_acquired',
        'pointer_subtraction',
        'all',
        'any',
        'get_args',
        'readlines',
        'create_mode_default',
        'get_errno',
        'unlink',
        'close',
        'creat',
        'write',
        'seek',
        'getenv',
        'nth',
        'map_render',
        'str_tuple_show',
        'repr_tuple_show',
        'find_key_value',
        '_needs_to_grow',
        'grow_storage',
        'keys',
        'values',
        'from_pairs',
        'flatten',
        'reserve',
        'vector',
        'reset',
        'resize',
        'shrink_to',
        'reverse',
        'without_index',
        'getenv',
        'rand',
        'time',
    ],
    typeKeywords: [
        'Char',
        'Int',
        'UInt',
        'Int64',
        'UInt64',
        'Int32',
        'UInt32',
        'Int16',
        'UInt16',
        'Int8',
        'UInt8',
        'Float',
        'Bool',
        'Maybe',
        'Vector',
        'Map',
        'Set',
        'String',
        'char',
        'int',
        'uint',
        'int64',
        'uint64',
        'int32',
        'uint32',
        'int16',
        'uint16',
        'int8',
        'uint8',
        'float',
        'bool',
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
