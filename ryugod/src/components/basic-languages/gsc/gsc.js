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
    tokenPostfix: '.gsc',
    keywords: [
        '__stdcall',
        'break',
        'comment',
        'define',
        'else',
        'endif',
        'endon',
        'false',
        'for',
        'foreach',
        'if',
        'include',
        'lib',
        'notify',
        'pop',
        'pragma',
        'push',
        'return',
        'struct',
        'thread',
        'true',
        'typedef',
        'var',
        'wait',
        'waittill',
        'while',
    ],
    builtins: [
        'set_pixel',
        '__internal_thread_set_sleep_time',
        '__internal_thread_run',
        'abs',
        'sinf',
        'cosf',
        'eval',
        'exit',
        'is_dir',
        'is_file',
        'buffer',
        'set_signal_handler',
        'file_get_contents',
        'file_put_contents',
        'rename',
        'remove',
        'listdir',
        'sendpacket',
        'print',
        'println',
        'fopen',
        'filesize',
        'feof',
        'ftell',
        'fread',
        'fwritevalue',
        'strpos',
        'tolower',
        'toupper',
        'strtok',
        'implode',
        'explode',
        'isdigit',
        'isalnum',
        'islower',
        'isupper',
        'isalpha',
        'substr',
        'get_object_vars',
        'getarraykeys',
        'get_in_string',
        'printf',
        'sprintf',
        'getchar',
        'isdefined',
        'get_time',
        'randomint',
        'randomfloat',
        'spawnstruct',
        'typeof',
        'cstring',
        'sizeof',
    ],
    typeKeywords: [
        'unsigned',
        'char',
        'short',
        'int',
        'long',
        'float',
        'double',
        'string',
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
            [/#[a-zA-Z_]\w*/, 'metatag'],
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
