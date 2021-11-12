/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '%',
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
    tokenPostfix: '.strl',
    keywords: [
        'abort',
        'abs',
        'after',
        'always',
        'and',
        'assert',
        'assert',
        'unsigned',
        'await',
        'bin2u',
        'bin2s',
        'bin',
        'size',
        'bool',
        'bool2u',
        'call',
        'case',
        'clock',
        'combine',
        'constant',
        'data',
        'default',
        'do',
        'dodown',
        'dopar',
        'double',
        'doup',
        'each',
        'else',
        'emit',
        'end',
        'enum',
        'every',
        'exit',
        'extends',
        'false',
        'finalize',
        'float',
        'for',
        'function',
        'generic',
        'gray2u',
        'halt',
        'handle',
        'host',
        'if',
        'immediate',
        'in',
        'init',
        'inout',
        'input',
        'inputoutput',
        'integer',
        'interface',
        'lcat',
        'loop',
        'main',
        'map',
        'mcat',
        'mcrun',
        'mem',
        'mirror',
        'mod',
        'module',
        'multiclock',
        'mux',
        'never',
        'next',
        'not',
        'nothing',
        'onehot2u',
        'open',
        'or',
        'oracle',
        'out',
        'output',
        'pause',
        'port',
        'positive',
        'pre',
        'pre1',
        'procedure',
        'refine',
        'reg',
        'reg1',
        'relation',
        'repeat',
        'reset',
        'reverse',
        'run',
        's2bin',
        'sat',
        'seq',
        'sextend',
        'signal',
        'sign',
        'signed',
        'string',
        'suspend',
        'sustain',
        'switch',
        'temp',
        'then',
        'tick',
        'times',
        'trap',
        'true',
        'type',
        'u2bin',
        'u2gray',
        'u2onehot',
        'unsigned',
        'upto',
        'value',
        'var',
        'weak',
        'when',
        'with',
        'xor',
    ],
    builtins: [

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
            [/$[a-zA-Z_]+/, 'metatag'],
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
            [/(%.*$)/, 'comment'],
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
