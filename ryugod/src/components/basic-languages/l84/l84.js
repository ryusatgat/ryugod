/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ';',
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
    tokenPostfix: '.84',
    keywords: [
        'Begin',
        'Block',
        'Cond',
        'Continue',
        'Define',
        'Fold',
        'From',
        'Func',
        'If',
        'In',
        'Infix',
        'Iterate',
        'Let',
        'Match',
        'Matches',
        'Open',
        'Package',
        'Pattern',
        'Prefix',
        'Prim',
        'Reduce',
        'Unfold',
        'When',
        'Where',
    ],
    builtins: [
        'abs',
        'alloc',
        'append',
        'arglist_printf',
        'args',
        'argv',
        'clip',
        'close',
        'compare',
        'concat_map',
        'concat',
        'concatss',
        'cons',
        'copy',
        'curried_printf',
        'die',
        'epoll_create1',
        'epoll_ctl',
        'epoll_wait',
        'equal',
        'exec',
        'exit',
        'fetch_fd',
        'fetch_top',
        'fetch',
        'file_close',
        'file_create',
        'file_open',
        'file_read_all',
        'filter',
        'flush',
        'fold',
        'for_each_numbered',
        'for_each',
        'format',
        'gcd',
        'getcwd',
        'getpid',
        'head',
        'init',
        'interpretf',
        'iota',
        'is_digit',
        'is_empty',
        'is_letter',
        'is_lower',
        'is_upper',
        'is_visible',
        'join',
        'last',
        'length',
        'locate_token',
        'map',
        'max',
        'min',
        'mmap',
        'munmap',
        'new_writer',
        'new_writer2',
        'new',
        'open',
        'pop_all',
        'pop',
        'pow',
        'print_line',
        'print',
        'printss',
        'push_all',
        'push',
        'read_all',
        'read',
        'reduce',
        'repeat',
        'reverse_append',
        'reverse',
        'show_token',
        'show',
        'size',
        'store_fd',
        'store_strings',
        'store_top',
        'subst',
        'tail',
        'unzip',
        'with_output_file',
        'with_writer',
        'write_all',
        'write_byte',
        'write',
        'zip',
    ],
    typeKeywords: [
        'True',
        'False',
        'And',
        'Or',
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
            [/[A-Z][A-Z_]+/, 'metatag'],
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
            [/(;.*$)/, 'comment'],
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
