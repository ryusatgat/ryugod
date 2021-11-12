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
    tokenPostfix: '.pic',
    keywords: [
        '.PS',
        '.PE',
        'define',
        'undef',
        'for',
        'to',
        'do',
        'if',
        'then',
        'else',
        'copy',
        'until',
        'thru',
        'sh',
        'print',
        'reset',
    ],
    builtins: [
        'box',
        'circle',
        'ellipse',
        'arc',
        'line',
        'arrow',
        'spline',
        'move',
        'ht',
        'height',
        'wid',
        'width',
        'rad',
        'radius',
        'diam',
        'diameter',
        'from',
        'to',
        'at',
        'with',
        'by',
        'then',
        'chop',
        'invis',
        'solid',
        'fill',
        'same',
        'sprintf',        
    ],
    typeKeywords: [
        'dotted',
        'dashed',
        'filled',
        'center',
        'ljust',
        'rjust',
        'above',
        'below',
        'the way',
        'between',
        'and',
        'of',
        'th',
        'up',
        'top',
        'down',
        'left',
        'right',
        'last',
        '.n',
        '.e',
        '.w',
        '.s',
        '.ne',
        '.nw',
        '.se',
        '.sw',
        '.c',
        '.start',
        '.end',
        'thickness',        
        'bot',
        'startc',
        'end',
        'boxht',
        'boxwid',
        'lineht',
        'linewid',
        'arcrad',
        'circlerad',
        'ellipseht',
        'ellipsewid',
        'moveht',
        'movewid',
        'textht',
        'textwid',
        'arrowht',
        'arrowwid',
        'arrowhead',
        'dashwid',
        'maxpswid',
        'maxpsht',
        'scale',
        'fillval',
        '.x',
        '.y',
        '.ht',
        '.wid',
        '.rad',
        'sin',
        'cos',
        'log',
        'exp',
        'sqrt',
        'max',
        'atan2',
        'min',
        'int',
        'rand',        
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
                /\.?[a-zA-Z_]\w*/,
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
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?(st|nd|rd|th)?/, 'number']
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