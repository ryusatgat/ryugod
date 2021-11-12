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
    tokenPostfix: '.fluffy',
    keywords: [
        'cast',
        'sizeof',
        'goto',
        'return',
        'continue',
        'break',
        'step',
        'instance',
        'export',
        'enum',
        'class',
        'extern',
        'for',
        'while',
        'loop',
        'if',
        'else',
        'module',
        'import',
    ],
    builtins: [
        'FILE',
        'stdout',
        'stderr',
        'stdin',
        'errno',
        'fputc',
        'fputs',
        'fopen',
        'fclose',
        'fflush',
        'fread',
        'fwrite',
        'ungetc',
        'puts',
        'putchar',
        'printf',
        'fprintf',
        'sprintf',
        'snprintf',
        'EOF',
        'calloc',
        'malloc',
        'realloc',
        'free',
        'abort',
        'atexit',
        'exit',
        'getenc',
        'system',
        'abs',
        'llabs',
        'atof',
        'atoi',
        'atoll',
        'rand',
        'srand',
        'memcpy',
        'memmove',
        'memcmp',
        'memset',
        'strcpy',
        'strncpy',
        'strcat',
        'strncat',
        'strcmp',
        'strncmp',
        'strlen',
        'strerror',
        'time_t',
        'time',
        'difftime',
        'ctime',
        'isalpha',
        'isalnum',
        'isblank',
        'iscntrl',
        'isdigit',
        'isgraph',
        'islower',
        'isprint',
        'ispunct',
        'isspace',
        'isupper',
        'isxdigit',
        'tolower',
        'toupper',
        'size_t',
        'String',
        'flexarray_resize',
        'flexarray_append_char',
        'flexarray_append',
        'flexarray_append_string',
    ],
    typeKeywords: [
        'byte',
        'short',
        'int',
        'long',
        'float',
        'double',
        'void',
        'unsigned',
        'signed',
        'bool',
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
