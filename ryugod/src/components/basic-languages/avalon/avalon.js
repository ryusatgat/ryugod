/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '--',
        blockComment: ["-[", "]-"]
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
    tokenPostfix: '.avl',
    keywords: [
        'and',
        'band',
        'bnot',
        'bor',
        'break',
        'case',
        'cast',
        'const',
        'continue',
        'default',
        'def',
        'dref',
        'elif',
        'else',
        'empty',
        'for',
        'if',
        'import',
        'in',
        'is',
        'lsh',
        'namespace',
        'next',
        'not',
        'or',
        'pass',
        'prev',
        'private',
        'ptr',
        'public',
        'ref',
        'return',
        'rsh',
        'switch',
        'type',
        'unique',
        'var',
        'val',
        'while',
        'xor',        
    ],
    builtins: [        
        'print',
        'println',
        'readln',
        'PI',
        'id',
        'cid',
        'px',
        'cx',
        'py',
        'cy',
        'pz',
        'cz',
        'rx',
        'crx',
        'ry',
        'cry',
        'rz',
        'crz',
        'phase',
        'cphase',
        's',
        'cs',
        't',
        'ct',
        'had',
        'chad',
        'swap',        
    ],
    typeKeywords: [
        'point',
        'maybe',
        'None',
        'Just',
        'Point',
        'Io',
        'Math',        
        'Quant',
        'void',
        'unit',
        'bool',
        'int',
        'float',
        'string',
        'bit',
        'qubit',
        'tuple',
        'list',
        'map',
        'True',
        'False',
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
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(--.*$)/, 'comment'],
            [/-\[/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\-\]]+/, 'comment'],
            [/\]-/, 'comment', '@pop'],
            [/[\-\]]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eEbq][+\-]?\d+)?[jJ]?[lL]?/, 'number']
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
