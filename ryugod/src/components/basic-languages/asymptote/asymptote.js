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
    defaultToken: '',
    tokenPostfix: '.v',
    keywords: [
        'break',
        'return',
        'continue',
        'unravel',
        'if',
        'else',
        'while',
        'for',
        'do',
        'access',
        'from',
        'import',
        'include',
        'new',
        'operator',
        'void',
        'bool',
        'int',
        'real',
        'string',
        'pair',
        'triple',
        'transform',
        'guide',
        'path',
        'pen',
        'frame',
        'picture',
        'struct',
        'typedef',
        'static',
        'public',
        'readable',
        'private',
        'explicit',
        'and',
        'cycle',
        'controls',
        'tension',
        'atleast',
        'curl',
        'true',
        'false',
        'null',
        'nullframe',
        'nullpath',
    ],
    builtins: [
        'currentpicture',
        'currentpen',
        'currentprojection',
        'inch',
        'inches',
        'cm',
        'mm',
        'bp',
        'pt',
        'up',
        'down',
        'right',
        'left',
        '',
        'E',
        'NE',
        'N',
        'NW',
        'W',
        'SW',
        'S',
        'SE',
        'ENE',
        'NNE',
        'NNW',
        'WNW',
        'WSW',
        'SSW',
        'SSE',
        'ESE',
        'I',
        'pi',
        'twopi',
        'solid',
        'dotted',
        'dashed',
        'dashdotted',
        'longdashed',
        'longdashdotted',
        'squarecap',
        'roundcap',
        'extendcap',
        'miterjoin',
        'roundjoin',
        'beveljoin',
        'zerowinding',
        'evenodd',
        'invisible',
        'black',
        'gray',
        'grey',
        'white',
        'lightgray',
        'lightgrey',
        'red',
        'green',
        'blue',
        'cmyk',
        'Cyan',
        'Magenta',
        'Yellow',
        'Black',
        'yellow',
        'magenta',
        'cyan',
        'brown',
        'darkgreen',
        'darkblue',
        'orange',
        'purple',
        'royalblue',
        'olive',
        'chartreuse',
        'fuchsia',
        'salmon',
        'lightblue',
        'springgreen',
        'pink',
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
