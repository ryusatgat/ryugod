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
    tokenPostfix: '.znn',
    keywords: [
        'if',
        'else',
        'return',
        'true',
        'false',
        'struct',
        'extern',
        'embed',
        'union',
        'switch',
        'case',
        'default',
        'template',
        'for',
        'while',
        'import',
        'export',
        'const',
        'enum',
        'operator',
        'concept',
        'requires',
        'move',
        'mutable',
        'break',
        'continue',
        'virtual',
        'discard',
        'null',
        'static',
        'countof',
        'unchecked',
        'attribute',
        'try',
        'mixin',
        'using',

        'import',
        'new',
        'delete',
        'this',
        'friend',
        'using',
        'move',
        'requires',
        'public',
        'protected',
        'private',
        'inline',
        'virtual',
        'explicit',
        'export',
        'throw',
        'try',
        'catch',
        'operator',
        'typeid',
        'and',
        'bitor',
        'or',
        'xor',
        'compl',
        'bitand',
        'and_eq',
        'or_eq',
        'xor_eq',
        'not',
        'not_eq',
    ],
    builtins: [
        'destruct',
        'file_exists',
        'file_input',
        'file_output',
        'FILE',
        'get_canonical_path',
        'get_modification_time',
        'list_files',
        'printf',
        'read_content',
        'remove_file',
        'scan_double',
        'scan_int',
        'scan_line',
        'scan_string',
        'to_double',
        'to_int',
        'to_string',
        'get_hash',
        'implicit_copy',
    ],
    typeKeywords: [
        'int',
        'double',
        'long',
        'short',
        'byte',
        'void',
        'bool',
        'string',
        'char',
        'noreturn',
        'any_type',
        'anything',
        'enum_type',
        'null_type',
        'struct_type',
        'union_type',
        'attribute_type',
        'concept_type',
        'ATOMIC_FLAG_INIT',
        'ATOMIC_VAR_INIT',
        'ATOMIC_BOOL_LOCK_FREE',
        'ATOMIC_CHAR_LOCK_FREE',
        'ATOMIC_CHAR16_T_LOCK_FREE',
        'ATOMIC_CHAR32_T_LOCK_FREE',
        'ATOMIC_WCHAR_T_LOCK_FREE',
        'ATOMIC_SHORT_LOCK_FREE',
        'ATOMIC_INT_LOCK_FREE',
        'ATOMIC_LONG_LOCK_FREE',
        'ATOMIC_LLONG_LOCK_FREE',
        'ATOMIC_POINTER_LOCK_FREE',
        'bool',
        'wchar_t',
        'string',
        'byte',
        'contained',
        'override',
        'final',
        'nullptr_t',
        'noexcept',
        'constexpr',
        'decltype',
        'thread_local',
        'nullptr',
        'const_cast',
        'static_cast',
        'dynamic_cast',
        'reinterpret_cast',
        'mutable',
        'class',
        'typename',
        'template',
        'namespace',
        'variant',
        'embed',
        'embed_returns',
        'mixin',
        'concept',
        'unchecked',
        'true',
        'false',
        '__cplusplus',
        'null',
        'display',
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
