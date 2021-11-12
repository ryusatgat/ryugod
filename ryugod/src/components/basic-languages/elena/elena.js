/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//'],
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
        //{ open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        //{ open: "'", close: "'" }
    ],
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.l',
    keywords: [
        'abstract',
        'auto',
        'byte',
        'catch',
        'char',
        'class',
        'closed',
        'const',
        'constructor',
        'do',
        'else',
        'extension',
        'field',
        'finally',
        'for',
        'if',
        'ifnot',
        'import',
        'int',
        'interface',
        'long',
        'mssg',
        'new',
        'preloaded',
        'public',
        'readonly',
        'real',
        'sealed',
        'self',
        'short',
        'static',
        'string',
        'struct',
        'this',
        'try',
        'uint',
        'until',
        'var',
        'while',
        '$shl',
        '$shr',
    ],
    builtins: [
        'bool',
        'nil',
        'toByte',
        'toShort',
        'toInt',
        'toUInt',
        'toLong',
        'toReal',
        'allMask',
        'anyMask',
        'Absolute',
        'Inverted',
        'Negative',
        'isOdd',
        'isEven',
        'isZero',
        'isPositive',
        'isNegative',
        'isNonnegative',
        'mod',
        'modulo',
        'Rounded',
        'RoundedInt',
        'Integer',
        'IntegerInt',
        'frac',
        'ceil',
        'floor',
        'truncate',
        'Reciprocal',
        'power',
        'sqr',
        'sqrt',
        'exp',
        'ln',
        'sin',
        'cos',
        'tan',
        'arctan',
        'arcsin',
        'arccos',
        'log2',
        'log10',
        'Radian',
        'Degree',
        'trimLeft',
        'trimRight',
        'trim',
        'padLeft',
        'padRight',
        '__float',
        '__int',
        '__raw',
        '__ptr',
        '__mssg',
        '__subj',
        '__symbol',
        '__string',
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
            [/^`\w+/, 'type.identifier'],
            [
                /\$?[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@builtins': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^\/\/.*$)/, 'comment'],
            //[/(^#.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[hH]?[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[rR]?[hH]?[lL]?/, 'number']
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
