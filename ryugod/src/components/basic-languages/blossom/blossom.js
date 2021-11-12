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
    defaultToken: 'invalid',
    tokenPostfix: '.bls',
    keywords: [
        'let',
        'func',
        'impl',
        'if',
        'elif',
        'else',
        'for',
        'in',
        'while',
        'return',
        'continue',
        'break',
        'or',
        'import',
        'as',
        'with',
    ],
    builtins: [
        'cdprint',
        'cdprintln',
        'chmod_native',
        'close',
        'cp',
        'cprint',
        'cprintln',
        'enum',
        'eval',
        'exec_native',
        'exists',
        'exit_native',
        'fflush',
        'fopen_native',
        'format_native',
        'fprint',
        'fprintln',
        'get_attrs',
        'get_call_stack_max',
        'get_cwd',
        'get_env',
        'get_native',
        'install',
        'isblk_native',
        'ischr_native',
        'isdir_native',
        'isfifo_native',
        'islnk_native',
        'isreg_native',
        'issock_native',
        'max',
        'mkdir',
        'mv',
        'new_native',
        'new_native',
        'new',
        'new',
        'new',
        'new',
        'new',
        'nproc',
        'open_native',
        'os_get_name_native',
        'print',
        'println',
        'read',
        'readch',
        'rm',
        'scan_native',
        'scaneof_native',
        'seed',
        'set_attrs',
        'set_call_stack_max_native',
        'set_cwd',
        'set_env_native',
        'sleep',
        'stat_native',
        'strerr',
        'struct',
        'system_clock_now_native',
        'system',
        'var_exists',
        'walkdir_native',
        'write',
    ],
    typeKeywords: [
        'Int',
        'Float',
        'String',
        'Ident',
        'true',
        'false',
        'nil',
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
