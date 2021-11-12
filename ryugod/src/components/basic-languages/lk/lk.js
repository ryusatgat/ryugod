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
    tokenPostfix: '.lk',
    keywords: [
        'break',
        'const',
        'continue',
        'define',
        'else',
        'elseif',
        'enum',
        'exit',
        'for',
        'function',
        'global',
        'if',
        'import',
        'return',
        'typeof',
        'while',
    ],
    builtins: [
        'msgbox',
        'yesno',
        'progressbar',
        'in',
        'choose_from_list',
        'transp',
        'scrnres',
        'html_dialog',
        'choose_file',
        'choose_dir',
        'date_time',
        'start_timer',
        'elapsed_time',
        'millisleep',
        'homedir',
        'tempfile',
        'uiyield',
        'username',
        'env',
        'open',
        'close',
        'seek',
        'tell',
        'eof',
        'flush',
        'read_line',
        'read',
        'write_line',
        'write',
        'to_int',
        'to_real',
        'to_bool',
        'to_string',
        'alloc',
        'dir_list',
        'file_exists',
        'rename_file',
        'dir_exists',
        'remove_file',
        'mkdir',
        'path_only',
        'file_only',
        'ext_only',
        'cwd',
        'system',
        'read_text_file',
        'write_text_file',
        'load_extension',
        'extensions',
        'ostype',
        'async_func',
        'async',
        'promise',
        'stable_sort',
        'json_file',
        'json_write',
        'json_read',
        'sprintf',
        'strpos',
        'first_of',
        'last_of',
        'left',
        'right',
        'mid',
        'strlen',
        'ascii',
        'isalpha',
        'isdigit',
        'isalnum',
        'char',
        'ch',
        'upper',
        'lower',
        'strcmp',
        'stricmp',
        'replace',
        'split',
        'join',
        'real_array',
        'sum',
        'mean',
        'median',
        'stddev',
        'min',
        'max',
        'ceil',
        'round',
        'floor',
        'sqrt',
        'pow',
        'exp',
        'log',
        'log10',
        'pi',
        'abs',
        'sgn',
        'sin',
        'sind',
        'cos',
        'cosd',
        'tan',
        'tand',
        'asin',
        'asind',
        'acos',
        'acosd',
        'atan',
        'atand',
        'atan2',
        'atan2d',
        'nan',
        'isnan',
        'mod',
        'besj0',
        'besj1',
        'besy0',
        'besy1',
        'besi0',
        'besi1',
        'besk0',
        'besk1',
        'gammaln',
        'pearson',
        'erf',
        'erfc',
        'sql_open',
        'sql_close',
        'sql_exec',
        'sql_error',
        'out',
        'outln',
    ],
    typeKeywords: [
        'null',
        'true',
        'false',
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
