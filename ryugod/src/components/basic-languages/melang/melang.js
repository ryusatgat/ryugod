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
    tokenPostfix: '.m',
    keywords: [
        'Import',
        'else',
        'if',
        'for',
        'while',
        'switch',
        'goto',
        'break',
        'continue',
        'return',
    ],
    builtins: [
        'send',
        'recv',
        'subscribe',
        'unsubscribe',
        'tcp_listen',
        'tcp_accept',
        'tcp_recv',
        'tcp_send',
        'tcp_connect',
        'tcp_shutdown',
        'tcp_close',
        'udp_create',
        'udp_close',
        'udp_send',
        'udp_recv',
        'encode',
        'decode',
        'aes',
        'parse',
        'create',
        'rc4',
        'connect',
        'close',
        'commit',
        'rollback',
        'error',
        'errno',
        'execute',
        'autocommit',
        'base64',
        'sha1',
        'sha256',
        'md5',
        'mul',
        'inv',
        'prime',
        'strncmp',
        'split',
        'strlen',
        'b2s',
        's2b',
        'hex2bin',
        'bin2hex',
        'bin2int',
        'int2bin',
        'bin2real',
        'real2bin',
        'replace',
        'upper',
        'lower',
        'join',
        'capitalize',
        'open',
        'lseek',
        'read',
        'write',
        'close',
        'errmsg',
        'size',
        'array',
        'obj',
        'str',
        'real',
        'bool',
        'int',
        'is_int',
        'is_real',
        'is_str',
        'is_nil',
        'is_bool',
        'is_obj',
        'is_func',
        'is_array',
        'size',
        'has',
        'keys',
        'merge',
        'diff',
        'key_diff',
        'type',
        'getter',
        'setter',
        'remove',
        'mkdir',
        'exist',
        'lsdir',
        'isdir',
        'time',
        'utctime',
        'cron',
        'exec',
        'print',
        'msleep',
        'path',
        'des',
        'des3',
    ],
    typeKeywords: [
        'aes',
        'base64',
        'des',
        'file',
        'http',
        'json',
        'matrix',
        'md5',
        'msgqueue',
        'mysql',
        'network',
        'prime',
        'rc',
        'sha',
        'string',
        'sys',
        'false',
        'nil',
        'true',
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
            [/\$[a-zA-Z_]\w*/, 'metatag'],
            [/[#@][a-zA-Z_]\w*/, 'tag'],
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
