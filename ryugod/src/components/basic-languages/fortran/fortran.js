/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['!', '#'],
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
    tokenPostfix: '.f90',
    keywords: [
        'assign',
        'backspace',
        'block data',
        'call',
        'close',
        'common',
        'continue',
        'data',
        'dimension',
        'do',
        'else',
        'end',
        'endfile',
        'endif',
        'entry',
        'equivalence',
        'external',
        'format',
        'function',
        'goto',
        'if',
        'implicit',
        'inquire',
        'intrinsic',
        'open',
        'parameter',
        'pause',
        'print',
        'program',
        'read',
        'return',
        'rewind',
        'rewrite',
        'save',
        'stop',
        'subroutine',
        'then',
        'write',
        'allocatable',
        'allocate',
        'case',
        'contains',
        'cycle',
        'deallocate',
        'elsewhere',
        'exit',
        'include',
        'interface',
        'intent',
        'module',
        'namelist',
        'nullify',
        'only',
        'operator',
        'optional',
        'pointer',
        'private',
        'procedure',
        'public',
        'recursive',
        'result',
        'select',
        'sequence',
        'target',
        'use',
        'while',
        'where',
        'string',
        'real',
        'integer',
    ],
    builtins: [
        'switch',
        'default',
        'include',
        'define',
        'for',
        'break',
        'next',        
        'HiLink',
        'hi',
        'def',
        'link',
        'ascii',
        'EOF',
        'repeat',
        'until',
        'endrat',
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
            [/(!.*$)/, 'comment'],
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
