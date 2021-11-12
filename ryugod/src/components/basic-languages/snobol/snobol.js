/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['*', ';*'],
        //blockComment: ["/*", "*/"]
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
    ignoreCase: true,
    tokenPostfix: '.sno',
    keywords: [
        'any',
        'apply',
        'arb',
        'arbno',
        'arg',
        'array',
        'break',
        'char',
        'clear',
        'code',
        'collect',
        'convert',
        'copy',
        'data',
        'datatype',
        'date',
        'define',
        'detach',
        'differ',
        'dump',
        'dupl',
        'end',
        'endfile',
        'eq',
        'eval',
        'field',
        'ge',
        'gt',
        'ident',
        'input',
        'integer',
        'item',
        'le',
        'len',
        'gt',
        'local',
        'loop',
        'lpad',
        'lt',
        'ne',
        'notany',
        'opsyn',
        'output',
        'pos',
        'prototype',
        'remdr',
        'replace',
        'rpad',
        'rpos',
        'rtab',
        'rewind',
        'size',
        'span',
        'stoptr',
        'tab',
        'table',
        'time',
        'trace',
        'trim',
        'terminal',
        'unload',
        'value',
    ],
    builtins: [        
        'breakx',
        'char',
        'chop',
        'date',
        'delete',
        'exp',
        'freeze',
        'function',
        'host',
        'io_findunit',
        'label',
        'lpad',
        'leq',
        'lge',
        'lle',
        'llt',
        'lne',
        'log',
        'ord',
        'reverse',
        'rpad',
        'rsort',
        'rename',
        'serv_listen',
        'sset',
        'set',
        'sort',
        'sqrt',
        'substr',
        'thaw',
        'vdiffer',
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
                /[a-zA-Z_]\w*/,
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
            [/^\*.*$/, 'comment'],
            [/;\*.*$/, 'comment'],
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
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
    }
};
