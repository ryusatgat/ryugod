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
    tokenPostfix: '.fox',
    keywords: [
        'abstract',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'def',
        'default',
        'else',
        'elif',
        'for',
        'if',
        'import',
        'in',
        'let',
        'null',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'var',
        'while',
        'yield',
    ],
    builtins: [
        '_close',
        '_read',
        '_seek',
        '_write',
        'add',
        'alive',
        'all',
        'any',
        'appendfile',
        'b58decode',
        'b58encode',
        'b64decode',
        'b64encode_url',
        'b64encode',
        'base',
        'basedir',
        'basename_bytes',
        'basename',
        'begin',
        'buffering',
        'call',
        'capture_count',
        'capture_index',
        'charset',
        'chdir',
        'clamp',
        'clear',
        'close',
        'collapse',
        'content_type',
        'cookie_param',
        'count_if',
        'count',
        'cpfile',
        'data_bidi',
        'data_json',
        'data_langtag',
        'data',
        'date',
        'day_of_month',
        'day_of_week',
        'day_of_year',
        'days_float',
        'days',
        'delete',
        'denominator',
        'dir',
        'dirs',
        'dup',
        'each',
        'empty',
        'end',
        'entries',
        'exists',
        'expires',
        'extended',
        'extentions',
        'fetch',
        'filename_bytes',
        'filename',
        'files',
        'fill',
        'find_if',
        'find',
        'flags',
        'flatten',
        'flush',
        'fopen',
        'fragment',
        'get_list',
        'get_map',
        'get_param',
        'get',
        'getcwd',
        'getln',
        'gets',
        'glob',
        'group_by',
        'has_key',
        'has_value',
        'has',
        'header',
        'headers',
        'heap_count',
        'hexdecode',
        'hexencode',
        'host',
        'hour',
        'hours',
        'httpdate',
        'iana',
        'index_of',
        'is_dir',
        'is_dst',
        'is_file',
        'is_negative',
        'is_url',
        'is_valid_encoding',
        'isinf',
        'iso8601',
        'isodate',
        'isoweek_year',
        'isoweek',
        'join',
        'key',
        'keys',
        'langtag',
        'language',
        'limit',
        'list',
        'locale',
        'map_self',
        'map',
        'marshal_bytes',
        'marshal_load',
        'marshal_save',
        'match',
        'max',
        'message',
        'millisecond',
        'milliseconds_float',
        'millisecs',
        'min',
        'minute',
        'minutes',
        'mkdir',
        'month',
        'mtime',
        'mvfile',
        'name',
        'next',
        'numerator',
        'offset',
        'pack',
        'pairs',
        'pass',
        'path_bytes',
        'path',
        'peek',
        'pop',
        'port',
        'pos',
        'post_param',
        'print',
        'printf',
        'push',
        'puts',
        'query',
        'readfile',
        'reduce',
        'ref_count',
        'relative',
        'replace',
        'representable',
        'resource_bytes',
        'resource_str',
        'resource_stream',
        'reverse_self',
        'reverse',
        'round',
        'scheme',
        'script',
        'second',
        'seconds_float',
        'seconds',
        'select_self',
        'select',
        'session_id',
        'set_content_type',
        'shift',
        'sign',
        'single',
        'size',
        'skip',
        'sleep',
        'sort_by_self',
        'sort_by',
        'sort_self',
        'sort',
        'source',
        'splice',
        'split',
        'sprintf',
        'stack_trace',
        'step',
        'stream',
        'sub',
        'suffix',
        'supported',
        'territory',
        'testfunc',
        'timestamp',
        'timezone',
        'to_bytes',
        'to_char',
        'to_file',
        'to_list',
        'to_map',
        'to_set',
        'to_uri',
        'tolower',
        'toupper',
        'translit',
        'trim',
        'typeof',
        'unlink',
        'unpack',
        'unshift',
        'urldecode',
        'urlencode_form',
        'urlencode',
        'user',
        'utf8str',
        'validate_loop_ref',
        'value',
        'values',
        'write_stream',
        'write',
        'writefile',
        'year',
        'zone_abbr',
    ],
    typeKeywords: [
        'false',
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
