/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '//',
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
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
    tokenPostfix: '.jakt',
    keywords: [
        'if',
        'else',
        'while',
        'for',
        'loop',
        'try',
        'must',
        'catch',
        'cpp',
        'unsafe',
        'defer',
        'match',
        'guard',
        'return',
        'throw',
        'continue',
        'break',
        'yield',
        'import',
        'extern',
        'export',
        'not',
        'and',
        'or',
        'is',
        'as',
        'in',
        'true',
        'false',
        'throws',
    ],
    builtins: [
        'abort',
        'add_capacity',
        'add',
        'append_code_point',
        'append_escaped_for_json',
        'append',
        'Array',
        'ArrayIterator',
        'as_saturated',
        'byte_at',
        'capacity',
        'clear',
        'code',
        'contains',
        'create',
        'debug_this_scope',
        'Dictionary',
        'DictionaryIterator',
        'ends_with',
        'ensure_capacity',
        'eprint',
        'eprintln',
        'Error',
        'exclusive',
        'exists',
        'File',
        'first',
        'format',
        'from_errno',
        'from_string_literal',
        'get',
        'has_value',
        'hash',
        'inclusive',
        'is_empty',
        'is_whitespace',
        'iterator',
        'keys',
        'last',
        'length',
        'map',
        'next',
        'number',
        'open_for_reading',
        'open_for_writing',
        'Optional',
        'pop',
        'print',
        'println',
        'push_values',
        'push',
        'Range',
        'read_all',
        'read',
        'remove',
        'repeated',
        'replace',
        'set',
        'Set',
        'SetIterator',
        'shrink',
        'size',
        'split',
        'starts_with',
        'String',
        'StringBuilder',
        'substring',
        'target_triple_string',
        'to_number',
        'to_string',
        'unchecked_add',
        'unchecked_mul',
        'user_configuration_value',
        'value_or',
        'value',
        'write',
    ],
    typeKeywords: [
        'String',
        'i8',
        'i16',
        'i32',
        'i64',
        'u8',
        'u16',
        'u32',
        'u64',
        'f32',
        'f64',
        'bool',
        'c_int',
        'c_char',
        'usize',
        'void',
        'mut',
        'raw',
        'weak',
        'anon',
        'public',
        'private',
        'extern',
        'override',
        'virtual',
        'fn',
        'comptime',
        'let',
        'struct',
        'namespace',
        'boxed',
        'enum',
        'class',
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
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n|(?:[ui](?:8|16|32|64))|usize)?/, 'number.hex'],
            [/0(?:b|B)[01][01_]*(n|(?:[ui](?:8|16|32|64))|usize)?/, 'number.binary'],
            [/[0-9](?:[0-9]|_)*((?:[f](?:32|64)))/, 'number'],
            [/[0-9](?:[0-9]|_)*(?:\\.)(?:[0-9]|_)*((?:[f](?:32|64)))?/, 'number'],
            [/[0-9][0-9_]*(n|(?:[ui](?:8|16|32|64))|usize)?/, 'number']
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
