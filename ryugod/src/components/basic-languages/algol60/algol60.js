/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        blockComment: ["comment", ";"]
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
    tokenPostfix: '.alg',
    keywords: [
        'alpha',
        'array',
        'begin',
        'boolean',
        'comment',
        'continue',
        'direct',
        'do',
        'double',
        'else',
        'end',
        'event',
        'false',
        'file',
        'for',
        'format',
        'go',
        'if',
        'integer',
        'label',
        'list',
        'long',
        'own',
        'pointer',
        'procedure',
        'real',
        'step',
        'switch',
        'task',
        'then',
        'true',
        'until',
        'value',
        'while',
        'zip',
    ],
    builtins: [
        'accept',
        'and',
        'attach',
        'by',
        'call',
        'case',
        'cause',
        'close',
        'deallocate',
        'define',
        'detach',
        'disable',
        'display',
        'div',
        'dump',
        'enable',
        'eql',
        'eqv',
        'exchange',
        'external',
        'fill',
        'forward',
        'geq',
        'gtr',
        'imp',
        'in',
        'interrupt',
        'is',
        'lb',
        'leq',
        'liberate',
        'line',
        'lock',
        'lss',
        'merge',
        'mod',
        'monitor',
        'mux',
        'neq',
        'no',
        'not',
        'on',
        'open',
        'or',
        'out',
        'picture',
        'process',
        'procure',
        'programdump',
        'rb',
        'read',
        'release',
        'replace',
        'reset',
        'resize',
        'rewind',
        'run',
        'scan',
        'seek',
        'set',
        'skip',
        'sort',
        'space',
        'swap',
        'thru',
        'times',
        'to',
        'wait',
        'when',
        'with',
        'write',
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
            [/[,;]/, 'delimiter'],
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
            [/'?comment'?/, 'comment', '@comment'],
            [/%/, 'comment', '@comment2'],
        ],
        comment: [
            [/[^;]+/, 'comment'],
            [/;/, 'comment', '@pop'],
            [/[;]/, 'comment']
        ],
        comment2: [
            [/[^%]+/, 'comment'],
            [/%/, 'comment', '@pop'],
            [/[%]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
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
