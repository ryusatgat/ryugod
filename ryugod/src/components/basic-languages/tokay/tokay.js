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
    tokenPostfix: '.tok',
    keywords: [
        'accept',
        'begin',
        'break',
        'continue',
        'else',
        'end',
        'exit',
        'false',
        'for',
        'if',
        'in',
        'loop',
        'next',
        'null',
        'push',
        'reject',
        'repeat',
        'reset',
        'return',
        'self',
        'true',
        'void',

    ],
    builtins: [
        'Float',
        'Ident',
        'Int',
        'Word',
        'ast',
        'ast2rust',
        'ast_print',
        'bool',
        'chr',
        'debug',
        'dict',
        'dict_clone',
        'dict_get_item',
        'dict_items',
        'dict_keys',
        'dict_len',
        'dict_merge',
        'dict_pop',
        'dict_push',
        'dict_set_item',
        'eof',
        'error',
        'float',
        'float_ceil',
        'float_fract',
        'float_trunc',
        'int',
        'iter',
        'iter_collect',
        'iter_enum',
        'iter_len',
        'iter_map',
        'iter_next',
        'iter_rev',
        'list',
        'list_add',
        'list_flatten',
        'list_get_item',
        'list_iadd',
        'list_len',
        'list_pop',
        'list_push',
        'list_set_item',
        'list_sort',
        'offset',
        'ord',
        'print',
        'range',
        'repr',
        'str',
        'str_add',
        'str_byteslen',
        'str_endswith',
        'str_get_item',
        'str_join',
        'str_len',
        'str_lower',
        'str_mul',
        'str_replace',
        'str_split',
        'str_startswith',
        'str_substr',
        'str_upper',
        'type',
    ],
    typeKeywords: [
        'Char',
        'Chars',
        'Empty',
        'EOF',
        'Expect',
        'Not',
        'Kle',
        'Opt',
        'Peek',
        'Pos',
        'Repeat',
        'Self',
        'Void',
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
            [/@[a-zA-Z_]\w*/, 'metatag'],
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
