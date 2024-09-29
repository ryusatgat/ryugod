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
    tokenPostfix: '.rsc',
    keywords: [
        'as',
        'else',
        'fn',
        'for',
        'if',
        'in',
        'let',
        'match',
        'mod',
        'then',
        'when',
    ],
    builtins: [
        'abs',
        'add',
        'all',
        'any',
        'concat_sep',
        'concat',
        'count',
        'crypto_hash',
        'div',
        'drop',
        'enumerate_rev',
        'enumerate',
        'eq',
        'filter_rev',
        'filter',
        'find',
        'fold',
        'foreach',
        'fst',
        'geq',
        'get',
        'group_by',
        'gt',
        'inspect',
        'intersperse_rev',
        'intersperse',
        'is_sorted_by',
        'is_sorted',
        'length',
        'leq',
        'list_dir',
        'lt',
        'map_keys',
        'map_rev',
        'map_to_list',
        'map',
        'max',
        'merge_maps',
        'merge',
        'min',
        'mkdir',
        'mul',
        'nth',
        'op_cmp',
        'partition_rev',
        'partition',
        'print',
        'println',
        'range_step',
        'range',
        'read_file',
        'repeat',
        'replace_substr',
        'replace',
        'reverse',
        'scanln',
        'set_nth',
        'skip_while',
        'slice',
        'snd',
        'sort',
        'split_at',
        'split',
        'start_server_ssl',
        'start_server',
        'starts_with',
        'step_by',
        'string_to_int',
        'string_to_num',
        'sub',
        'sum',
        'take_while',
        'take',
        'to_charlist',
        'to_string',
        'truncate',
        'typeof',
        'validate_pass',
        'write_file',
        'zip_rev',
        'zip',
    ],
    typeKeywords: [
        'T',
        'F',
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
            [/:[a-zA-Z_]\w*/, 'metatag'],
            [
                /[_A-Za-z@!?][_A-Za-z0-9@!?]*/,
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
