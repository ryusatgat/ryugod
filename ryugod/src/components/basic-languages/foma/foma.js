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
    tokenPostfix: '.foma',
    keywords: [
        'ambiguous',
        'apply',
        'apropos',
        'assert-stack',
        'att',
        'clear',
        'close',
        'cmatrix',
        'compact',
        'complete',
        'compose',
        'concatenate',
        'crossproduct',
        'define',
        'defined',
        'determinize',
        'dot',
        'down',
        'echo',
        'eliminate',
        'equivalent',
        'export',
        'extract',
        'factorize',
        'flag-diacritics',
        'flag',
        'flags',
        'functional',
        'help',
        'identity',
        'ignore',
        'in',
        'intersect',
        'invert',
        'label',
        'letter',
        'lexc',
        'license',
        'load',
        'lower-side',
        'lower-universal',
        'lower-words',
        'machine',
        'med',
        'minimize',
        'name',
        'negate',
        'net',
        'non-null',
        'null',
        'one-plus',
        'out',
        'pairs',
        'pop',
        'print',
        'prolog',
        'prune',
        'push',
        'quit',
        'random-lower',
        'random-pairs',
        'random-upper',
        'random-words',
        'read',
        'regex',
        'reverse',
        'rotate',
        'save',
        'sequential',
        'sequentialize',
        'set',
        'shortest-string-length',
        'shortest-string',
        'show',
        'shuffle',
        'sigma',
        'size',
        'sort',
        'source',
        'spaced-text',
        'stack',
        'substitute',
        'symbol',
        'system',
        'test',
        'text',
        'turn',
        'twosided',
        'unambiguous',
        'undefine',
        'union',
        'up',
        'upper-side',
        'upper-universal',
        'upper-words',
        'upper',
        'variable',
        'variables',
        'view',
        'warranty',
        'words',
        'write',
        'zero-plus',
    ],
    builtins: [
        'ambiguous',
        'close',
        'med',
        'size',
        'loadd',
        'lower-words',
        'upper-words',
        'net',
        'random-lower',
        'random-upper',
        'words',
        'random-words',
        'regex',
        'rpl',
        'au',
        'revoir',
        'bye',
        'exit',
        'saved',
        'seq',
        'ss',
        'stack',
        'tunam',
        'tid',
        'tfu',
        'tlu',
        'tuu',
        'tnu',
        'tnn',
        'tseq',
        'tsf',
        'equ',
        'pss',
        'psz',
        'ratt',
        'tfd',
        'hyvästi',
        'watt',
        'wpl',
        'examb',
        'exunamb',
        'pairs',
        'random-pairs',
    ],
    typeKeywords: [

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
                /[a-zA-Z_][\-\w]*/,
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
