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
    tokenPostfix: '.das',
    keywords: [
        'abstract',
        'addr',
        'array',
        'as',
        'break',
        'cast',
        'class',
        'const',
        'continue',
        'def',
        'delete',
        'deref',
        'elif',
        'else',
        'enum',
        'expect',
        'false',
        'finally',
        'for',
        'generator',
        'goto',
        'if',
        'implicit',
        'in',
        'is',
        'iterator',
        'label',
        'let',
        'module',
        'new',
        'null',
        'operator',
        'options',
        'override',
        'pass',
        'private',
        'public',
        'recover',
        'reinterpret',
        'require',
        'return',
        'shared',
        'smart_ptr',
        'static_elif',
        'static_if',
        'struct',
        'table',
        'true',
        'try',
        'type',
        'typedef',
        'typeinfo',
        'unsafe',
        'upcast',
        'var',
        'where',
        'while',
        'with',
        'yield',
    ],
    builtins: [
        'escapeString',
        'namesAndDimensions',
        'typeQualifiers',
        'refAddresses',
        'humanReadable',
        'DBL_MAX',
        'DBL_MIN',
        'FLT_MAX',
        'FLT_MIN',
        'INT_MAX',
        'INT_MIN',
        'LONG_MAX',
        'LONG_MIN',
        'UINT_MAX',
        'ULONG_MAX',
        'print_flags_debugger',
        '__builtin_table_erase',
        '__builtin_table_find',
        '__builtin_table_key_exists',
        '_macro',
        'assert',
        'builtin_array_sort',
        'clock',
        'concept_assert',
        'das_string',
        'debug',
        'expect_any_vector',
        'export',
        'finalize',
        'generic',
        'hybrid',
        'init',
        'invoke',
        'local_only',
        'marker',
        'memzero',
        'no_aot',
        'run',
        'sideeffects',
        'static_assert',
        'to be documented',
        'unsafe_deref',
        'unsafe_operation',
        'unused_argument',
        'verify',
        'i_das_ptr_add',
        'i_das_ptr_dec',
        'i_das_ptr_diff',
        'i_das_ptr_inc',
        'i_das_ptr_set_add',
        'i_das_ptr_set_sub',
        'i_das_ptr_sub',
        'clone',
        'clone_string',
        'clone_dim',
        'clone_to_move',
        'finalize',
        'finalize_dim',
        'capacity',
        'clear',
        'each',
        'each_enum',
        'each_ref',
        'emplace',
        'empty',
        'erase',
        'find',
        'find_for_edit',
        'find_for_edit_if_exists',
        'find_if_exists',
        'find_index',
        'find_index_if',
        'has_value',
        'key_exists',
        'keys',
        'length',
        'lock',
        'lock_forever',
        'next',
        'nothing',
        'pop',
        'push',
        'push_clone',
        'reserve',
        'resize',
        'sort',
        'to_array',
        'to_array_move',
        'to_table',
        'to_table_move',
        'values',
        'breakpoint',
        'get_das_root',
        'hash',
        'intptr',
        'is_in_aot',
        'lock_data',
        'lock_data',
        'map_to_array',
        'map_to_ro_array',
        'memcmp',
        'memcpy',
        'panic',
        'print',
        'set_variant_index',
        'sprint',
        'stackwalk',
        'terminate',
        'variant_index',
        'binary_load',
        'binary_save',
        'get_command_line_arguments',
        'iter_range',
        'swap',
        'get_clock',
        'get_time_usec',
        'ref_time_ticks',
    ],
    typeKeywords: [
        'auto',
        'bitfield',
        'block',
        'bool',
        'double',
        'float',
        'float2',
        'float3',
        'float4',
        'function',
        'int',
        'int16',
        'int2',
        'int3',
        'int4',
        'int64',
        'int8',
        'lambda',
        'range',
        'string',
        'tuple',
        'uint',
        'uint16',
        'uint2',
        'uint3',
        'uint4',
        'uint64',
        'uint8',
        'urange',
        'variant',
        'void',        
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
