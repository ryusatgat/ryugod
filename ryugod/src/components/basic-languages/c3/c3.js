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
    tokenPostfix: '.c3',
    keywords: [
        'tlocal',
        'try',
        'switch',
        'static',
        'require',
        'private',
        'public',
        'module',
        'local',
        'foreach_r',
        'foreach',
        'if',
        'for',
        'export',
        'const',
        'continue',
        'break',
        'and',
        'case',
        'catch',
        'def',
        'do',
        'dynamic',
        'else',
        'extern',
        'import',
        'include',
        'init',
        'inline',
        'interface',
        'or',
        'return',
        'while',
    ],
    builtins: [
        'align',
        'alignof',        
        'append',
        'asm',
        'assert',
        'assignable',
        'benchmark',
        'bigendian',
        'builtin',
        'callconv',
        'compact',
        'concat',
        'default',
        'defer',
        'defined',
        'deprecated',
        'distinct',
        'echo',
        'embed',
        'endfor',
        'endforeach',
        'endif',
        'endswitch',
        'ensure',
        'error',
        'eval',
        'evaltype',
        'exec',
        'extnameof',
        'fails',
        'feature',
        'finalizer',
        'is_const',
        'link',
        'littleendian',
        'maydiscard',
        'naked',
        'nameof',
        'nextcase',
        'nodiscard',
        'noinit',
        'noinline',
        'nopadding',
        'noreturn',
        'nosanitize',
        'nostrip',
        'obfuscate',
        'offsetof',
        'operator',
        'optional',
        'overlap',
        'packed',
        'pure',
        'qnameof',
        'reflect',
        'safemacro',
        'section',
        'sizeof',
        'stringify',
        'test',
        'typefrom',
        'typeof',
        'unused',
        'used',
        'vaarg',
        'vaconst',
        'vacount',
        'vaexpr',
        'varef',
        'vasplat',
        'vatype',
        'wasm',
        'weak',
        'var',
        'winmain',
    ],
    typeKeywords: [
        'fn',
        'macro',
        'struct',
        'bitstruct',
        'void',
        'bool',
        'char',
        'double',
        'float',
        'float16',
        'int128',
        'ichar',
        'int',
        'iptr',
        'isz',
        'long',
        'short',
        'uint128',
        'uint',
        'ulong',
        'uptr',
        'ushort',
        'usz',
        'float128',
        'any',
        'anyfault',
        'typeid',
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
            [/[@$][a-zA-Z_]\w*/, 'metatag'],
            [/#[a-zA-Z_]\w*/, 'tag'],
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
            [/\/\*/, 'comment', '@push' ],
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
