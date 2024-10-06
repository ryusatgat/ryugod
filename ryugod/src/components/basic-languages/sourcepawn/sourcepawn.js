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
    tokenPostfix: '.sp',
    keywords: [
        'acquire',
        'as',
        'assert',
        'break',
        'builtin',
        'catch',
        'case',
        'cast_to',
        'char',
        'const',
        'continue',
        'decl',
        'default',
        'defined',
        'delete',
        'do',
        'double',
        'else',
        'enum',
        'exit',
        'explicit',
        'finally',
        'for',
        'foreach',
        'forward',
        'funcenum',
        'functag',
        'function',
        'goto',
        'if',
        'implicit',
        'import',
        'in',
        'INVALID_FUNCTION',
        'methodmap',
        'namespace',
        'new',
        '__nullable__',
        'object',
        'operator',
        'package',
        'private',
        'protected',
        'public',
        'readonly',
        'return',
        'sealed',
        'sizeof',
        'static',
        'static_assert',
        'stock',
        'struct',
        'switch',
        'this',
        'throw',
        'try',
        'typedef',
        'typeof',
        'typeset',
        'while',
        'with',
    ],
    builtins: [
        'printnum',
        'writenum',
        'printfloat',
        'writefloat',
        'printnums',
        'print',
        'dump_stack_trace',
        'report_error',
        'unbound_native',
        'donothing',
        'printf',
        'dynamic_native',
        'access_2d_array',
        'invoke',
        'execute',
        'call_with_string',
        'copy_2d_array_to_callback',
        'assert_eq',
        'strlen',
        'StrContains',
        'strcmp',
        'strncmp',
        'strcopy',
        'Format',
        'FormatEx',
        'VFormat',
        'StringToInt',
        'StringToIntEx',
        'StringToInt64',
        'IntToString',
        'Int64ToString',
        'StringToFloat',
        'StringToFloatEx',
        'FloatToString',
        'BreakString',
        'TrimString',
        'SplitString',
        'ReplaceString',
        'ReplaceStringEx',
        'GetCharBytes',
        'IsCharAlpha',
        'IsCharNumeric',
        'IsCharSpace',
        'IsCharMB',
        'IsCharUpper',
        'IsCharLower',
        'StripQuotes',
    ],
    typeKeywords: [
        'int',
        'int8',
        'int16',
        'int32',
        'int64',
        'interface',
        'intn',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'uintn',
        'union',
        'using',
        'var',
        'variant',
        'view_as',
        'virtual',
        'void',
        'volatile',
        'let',
        'native',
        'true',
        'false',
        'null',
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
            [/<[a-zA-Z_]\w*?>/, 'string'],
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
