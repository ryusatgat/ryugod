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
    tokenPostfix: '.lang',
    keywords: [
        'struct',
        'func',
        'import',
        'public',
        'if',
        'while',
        'return',
        'raise',
        'as',
        'func',
        'struct',
        'else',
        'if',
        'new',
    ],
    builtins: [
        'print',
        '::is',
        '::repeat',
        '::push',
        '::pop',
        '::insert',
        '::is',
        '::into',
        '::is',
        '::into',
        '::heap_size',
        '::is',
        '::into',
        '::input',
        '::stdout',
        '::stdin',
        '::stderr',
        '::open',
        '::close',
        '::read',
        '::read_up_to',
        '::write',
        '::flush',
        '::len',
        '::abs',
        '::max',
        '::min',
        '::exp',
        '::ln',
        '::log2',
        '::log10',
        '::sqrt',
        '::cbrt',
        '::hypot',
        '::pow',
        '::sin',
        '::cos',
        '::tan',
        '::asin',
        '::acos',
        '::atan',
        '::atan2',
        '::sinh',
        '::cosh',
        '::tanh',
        '::asinh',
        '::acosh',
        '::atanh',
        '::erf',
        '::erfc',
        '::lgamma',
        '::tgamma',
        '::ceil',
        '::floor',
        '::trunc',
        '::round',
        '::is_finite',
        '::is_infinite',
        '::is_nan',
        '::is_normal',
        '::into',
        '::char',
        '::ord',
        '::bytes',
        '::code_points',
        '::index_of',
        '::contains',
        '::starts_with',
        '::ends_with',
        '::is_space',
        '::is_digit',
        '::abort',
        '::test1',
        '::test2',
    ],
    typeKeywords: [
        'const',
        'let',
        'true',
        'false',
        'nil',
        'str',
        'array',
        'bool',
        'float',
        'int',
        'gc',
        'io',
        'list',
        'math',
        'sys',
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
            [/[,;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /(::)?[a-zA-Z_]\w*/,
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
