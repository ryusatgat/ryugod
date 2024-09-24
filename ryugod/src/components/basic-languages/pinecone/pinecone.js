/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["//", "\\\\"]
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
    tokenPostfix: '.pn',
    keywords: [
        'VERSION',
        'tru',
        'fls',
        'OS_IS_LINUX',
        'OS_IS_WINDOWS',
        'OS_IS_MAC',
        'OS_IS_UNIX',
        '__copy__',
        '__destroy__',
        'arg',
        'ascii',
        'at',
        'cppCode',
        'cppHead',
        'Dub',
        'get',
        'input',
        'Int',
        'IntArray',
        'len',
        'print',
        'runCmd',
        'set',
        'String',
        'sub',
    ],
    builtins: [
        'argLen',
        'Bool',
        'Byte',
        'Dub',
        'inputc',
        'inputInt',
        'Int',
        'IntArray',
        'IS_TRANSPILED',
        'print',
        'printc',
    ],
    typeKeywords: [
        'auto',
        'const',
        'double',
        'float',
        'int',
        'short',
        'struct',
        'unsigned',
        'break',
        'continue',
        'else',
        'for',
        'long',
        'signed',
        'switch',
        'void',
        'case',
        'default',
        'enum',
        'goto',
        'register',
        'sizeof',
        'typedef',
        'volatile',
        'char',
        'do',
        'extern',
        'if',
        'return',
        'static',
        'union',
        'while',
        'asm',
        'dynamic_cast',
        'namespace',
        'reinterpret_cast',
        'try',
        'bool',
        'explicit',
        'new',
        'static_cast',
        'typeid',
        'catch',
        'false',
        'operator',
        'template',
        'typename',
        'class',
        'friend',
        'private',
        'this',
        'using',
        'const_cast',
        'inline',
        'public',
        'throw',
        'virtual',
        'delete',
        'mutable',
        'protected',
        'true',
        'wchar_t',
        'and',
        'bitand',
        'compl',
        'not_eq',
        'or_eq',
        'xor_eq',
        'and_eq',
        'bitor',
        'not',
        'or',
        'xor',
        'endl',
        'INT_MIN',
        'std',
        'INT_MAX',
        'MAX_RAND',
        'NULL',
        'main',
        'argc',
        'argv',
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
            [/(#.*$)/, 'comment'],
            [/\/\//, 'comment', '@comment'],
        ],
        comment: [
            [/[^\\\\]+/, 'comment'],
            [/\\\\/, 'comment', '@pop'],
            [/[\\\\]/, 'comment']
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
