/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '||',
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
    tokenPostfix: '.m',
    keywords: [
        'goto',
        'break',
        'return',
        'continue',
        'asm',
        'otherwise',
        'num',
        'char',
        'bool',
        'abstype',
        'div',
        'where',
        'mod',
        'readvals',
        'show',
        'type',
        'with',
    ],
    builtins: [
        'sys_message',
        'False',
        'True',
        'Appendfile',
        'Closefile',
        'Exit',
        'Stderr',
        'Stdout',
        'System',
        'Tofile',
        'abs',
        'and',
        'arctan',
        'cjustify',
        'code',
        'concat',
        'const',
        'converse',
        'cos',
        'decode',
        'digit',
        'drop',
        'dropwhile',
        'entier',
        'error',
        'exp',
        'filemode',
        'filter',
        'foldl',
        'foldl1',
        'foldr',
        'foldr1',
        'force',
        'fst',
        'getenv',
        'hd',
        'hugenum',
        'id',
        'index',
        'init',
        'integer',
        'iterate',
        'last',
        'lay',
        'layn',
        'letter',
        'limit',
        'lines',
        'ljustify',
        'log',
        'log10',
        'map',
        'map2',
        'max',
        'max2',
        'member',
        'merge',
        'min',
        'min2',
        'mkset',
        'neg',
        'numval',
        'or',
        'pi',
        'postfix',
        'product',
        'read',
        'rep',
        'repeat',
        'reverse',
        'rjustify',
        'scan',
        'seq',
        'showfloat',
        'shownum',
        'showscaled',
        'sin',
        'snd',
        'sort',
        'spaces',
        'sqrt',
        'subtract',
        'sum',
        'system',
        'take',
        'takewhile',
        'tinynum',
        'tl',
        'transpose',
        'undef',
        'until',
        'zip2',
        'zip3',
        'zip4',
        'zip5',
        'zip6',
        'zip',
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
            [/%[a-zA-Z_]\w*/, 'metatag'],
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
            [/(\|\|.*$)/, 'comment'],
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
