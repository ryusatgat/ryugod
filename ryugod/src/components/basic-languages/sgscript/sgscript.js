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
    tokenPostfix: '.sgs',
    keywords: [
        'break',
        'continue',
        'decltree',
        'defer',
        'do',
        'else',
        'for',
        'foreach',        
        'function',
        'global',
        'if',
        'new',
        'race',
        'return',
        'subthread',
        'sync',
        'thread',
        'use',        
        'var',
        'while',
    ],
    builtins: [
        'abort',
        'app_abort',
        'app_exit',
        'array_filter',
        'array_process',
        'array_sized',
        'array',
        'assert',
        'chr',
        'class',
        'clone',
        'co_create',
        'co_resume',
        'compile_sgs',
        'dict_filter',
        'dict_size',
        'dict',
        'dumpvar_ext',
        'dumpvar',
        'end_on',
        'errno_string',
        'errno_value',
        'errno',
        'errprintln',
        'errprintlns',
        'eval_file',
        'eval',
        'event',
        'find_include_file',
        'ftime',
        'gc_collect',
        'gc_findparents',
        'get_concat',
        'get_iterator',
        'get_keys',
        'get_merged_map',
        'get_merged',
        'get_props',
        'get_values',
        'hash_fnv',
        'import_cfunc',
        'include',
        'is_array',
        'is_callable',
        'is_dict',
        'is_map',
        'is_numeric',
        'isset',
        'iter_advance',
        'iter_getdata',
        'map_filter',
        'map_process',
        'map_size',
        'map',
        'metamethods_enable',
        'metamethods_test',
        'metaobj_get',
        'metaobj_set',
        'mm_getindex_router',
        'mm_setindex_router',
        'multiply_path_ext_lists',
        'parseint',
        'parsereal',
        'pcall',
        'pooled_event',
        'println',
        'printlns',
        'printvar_ext',
        'printvar',
        'process_threads',
        'rand',
        'randf',
        'read_stdin',
        'serialize',
        'sgson_decode',
        'sgson_encode',
        'srand',
        'subthread_create',
        'sym_get',
        'sym_register',
        'sys_backtrace',
        'sys_curfile',
        'sys_curfiledir',
        'sys_curprocdir',
        'sys_curprocfile',
        'sys_msg',
        'sys_replevel',
        'sys_stat',
        'thread_create',
        'tobool',
        'toint',
        'toptr',
        'toreal',
        'tostring',
        'typeid',
        'typeof',
        'typeptr_by_name',
        'typeptr',
        'unserialize',
        'unset',
        'va_arg_count',
        'va_get_arg',
        'va_get_args',
        'yield',
    ],
    typeKeywords: [        
        'null',
        'true',
        'false',
        'this',
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
            [/\$/, 'metatag'],
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
