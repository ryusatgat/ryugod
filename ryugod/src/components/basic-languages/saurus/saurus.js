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
    tokenPostfix: '.su',
    keywords: [
        'cdec',
        'cfun',
        'cinclude',
        'def',
        'do',
        'else',
        'false',
        'for',
        'if',
        'include',
        'nil',
        'true',
    ],
    builtins: [
        '_ARGS',
        '_VERSION',
        '_G',
        'rec',
        'apply',
        'assert',
        'cat',
        'compile',
        'cons',
        'error',
        'first',
        'global',
        'hashmap ',
        'hashmap',
        'http.request',
        'io.delete',
        'io.print',
        'io.read',
        'io.size',
        'io.write',
        'load',
        'local',
        'math.abs',
        'math.acos',
        'math.asin',
        'math.atan',
        'math.ceil',
        'math.cos',
        'math.cosh',
        'math.deg',
        'math.floor',
        'math.fmod',
        'math.frexp',
        'math.huge',
        'math.ldexp',
        'math.log',
        'math.log10',
        'math.max',
        'math.min',
        'math.modf',
        'math.pi',
        'math.rad',
        'math.random',
        'math.seed',
        'math.sin',
        'math.sinh',
        'math.sqrt',
        'math.tan',
        'math.tanh',
        'Mutable',
        'os.execute',
        'os.loadlib',
        'os.name',
        'os.time',
        'process.async',
        'process.force',
        'process.num_cores',
        'process.num_threads',
        'process.peak',
        'process.sleep',
        'process.sync',
        'rest',
        'seq',
        'sequence.assoc',
        'sequence.dissoc',
        'sequence.length',
        'sequence.list',
        'sequence.pop',
        'sequence.push',
        'sequence.range',
        'sequence.rseq',
        'set',
        'string',
        'string.find',
        'string.format',
        'string.number',
        'string.string',
        'type',
        'unref',
        'vector',
    ],
    typeKeywords: [
        'number',
        'boolean',
        'string',
        'local',
        'global',
        'promise',
        'sequence',
        'vector',
        'hashmap',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            [/[(..),:;]/, 'delimiter'],
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },            
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_][\w.]*/, 'tag'],
            [
                /[a-zA-Z_][\w.]*/,
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
