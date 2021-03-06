/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//', '#'],
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
    tokenPostfix: '.ucl',
    keywords: [
        'import',
        'namespace',
        'using',
        'class',
        'extends',
        'public',
        'private',
        'static',
        'abstract',
        'final',
        'parallel',
        'new',
        'free',
        'this',
        'type',
        'in',
        'if',
        'else',
        'do',
        'while',
        'for',
        'switch',
        'case',
        'default',
        'break',
        'continue',
        'return',
        'try',
        'catch',
        'and',
        'or',
    ],
    builtins: [
        'acos',
        'add_footer',
        'add_header',
        'add_watch',
        'all_true',
        'any_true',
        'append_ref',
        'append',
        'asin',
        'atan',
        'attr_',
        'bind_blob',
        'bind',
        'call',
        'callback_on_writable',
        'cancel',
        'cbrt',
        'chdir',
        'chmod',
        'classify',
        'clear',
        'client',
        'code',
        'compare',
        'connect',
        'contain',
        'contain#1"',
        'cos',
        'create_fun',
        'create_nice',
        'create',
        'datetime',
        'days',
        'decode',
        'detach',
        'digest_auth_check',
        'encode',
        'error_print',
        'escape_texts',
        'exec',
        'execute',
        'exit',
        'exp',
        'family',
        'fill',
        'filter',
        'first_idx',
        'get_file_name',
        'get_file',
        'get_idx',
        'get_idxs',
        'get_line',
        'get_source',
        'get_type',
        'get_value',
        'getenv',
        'getres',
        'gettime',
        'gre_key',
        'has_idx',
        'has_key',
        'head',
        'hostkey_hash',
        'hours',
        'hypot',
        'info',
        'insert_after_ref',
        'insert_after',
        'insert_before_ref',
        'insert_before',
        'insert_ref',
        'insert',
        'is_dir',
        'is_file',
        'isnan',
        'item',
        'join',
        'last_idx',
        'last',
        'lee_key',
        'length',
        'listdir',
        'listen',
        'lock',
        'log',
        'login',
        'map',
        'minutes',
        'mkdir',
        'mkfifo',
        'next_idx',
        'next_key',
        'node_',
        'node',
        'open',
        'operator_unary_post_double_minus',
        'operator_unary_post_double_plus',
        'operator_unary_pre_double_minus',
        'operator_unary_pre_double_plus',
        'operator_unary_pre_exclamation',
        'operator_unary_pre_minus',
        'operator_unary_pre_plus',
        'operator_unary_pre_tilde',
        'pack',
        'papply',
        'parse',
        'poll',
        'pop',
        'popen',
        'post_processor',
        'pow',
        'prepare',
        'prepend_ref',
        'prepend',
        'prev_idx',
        'prev_key',
        'print',
        'process',
        'protocol_idx',
        'push_ref',
        'push',
        'put_file',
        'queue_basic_auth_fail_response',
        'queue_digest_auth_fail_response',
        'queue_response',
        'range',
        'read_max',
        'read',
        'ready',
        'reduce',
        'remove_key',
        'remove',
        'rename',
        'replace',
        'resize',
        'rmdir',
        'rray',
        'rule_body',
        'schedule',
        'seconds',
        'seek',
        'send',
        'sendto',
        'set_timeout',
        'setenv',
        'settime',
        'sin',
        'size',
        'sleep',
        'sockopt',
        'split',
        'sqrt',
        'srand',
        'store_ref',
        'system',
        'tail',
        'tan',
        'terminal',
        'text_',
        'throw',
        'time_ticks',
        'time',
        'to_string',
        'try_join',
        'try_lock',
        'tuple_zip',
        'unbind',
        'unlock',
        'unpack',
        'userauth_fake_interactive',
        'userauth_list',
        'userauth_password',
        'userauth_publickey_fromfile',
        'value',
        'values',
        'write_close',
        'write',
        'xception',
        'yield',
        'zip',
    ],
    typeKeywords: [
        'Array',
        'Blank',
        'Char',
        'Dict',
        'Error',
        'Exception',
        'File',
        'Float',
        'FtpSession',
        'HttpResp',
        'HttpServer',
        'Integer',
        'List',
        'Mutex',
        'Nacl',
        'Pipe',
        'Poll',
        'Queue',
        'Range',
        'RustString',
        'Set',
        'Socket',
        'SocketAddr',
        'Stack',
        'String',
        'Time',
        'Tree',
        'Type',
        'WsContext',
        'XmlNode',
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
            [/\$[a-zA-Z_]\w*/, 'tag'],
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
            [/(#.*$)/, 'comment'],
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
