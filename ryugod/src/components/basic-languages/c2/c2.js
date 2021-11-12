/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else|interface).*?\\s*$'),
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
    tokenPostfix: '.c2',
    keywords: [
        'module',
        'import',
        'as',
        'public',
        'break',
        'case',
        'continue',
        'default',
        'do',
        'else',
        'fallthrough',
        'for',
        'goto',
        'if',
        'return',
        'switch',
        'sswitch',
        'while',
    ],
    builtins: [
        '_IOFBF',
        '_IOLBF',
        '_IONBF',
        'EOF',
        'SEEK_SET',
        'SEEK_CUR',
        'SEEK_END',
        'SEEK_DATA',
        'SEEK_HOLE',
        'FILE',
        'Offset',
        'stdin',
        'stdout',
        'stderr',
        'remove',
        'rename',
        'tmpfile',
        'tempnam',
        'fclose',
        'fflush',
        'fopen',
        'freopen',
        'fdopen',
        'setbuf',
        'setvbuf',
        'setbuffer',
        'setlinebuf',
        'fprintf',
        'printf',
        'sprintf',
        'dprintf',
        'fscanf',
        'scanf',
        'sscanf',
        'fgetc',
        'getc',
        'getchar',
        'getc_unlocked',
        'getchar_unlocked',
        'fputc',
        'putc',
        'putchar',
        'putchar_unlocked',
        'getw',
        'putw',
        'fgets',
        'getdelim',
        'getline',
        'fputs',
        'puts',
        'ungetc',
        'fread',
        'fwrite',
        'fseek',
        'ftell',
        'rewind',
        'fseeko',
        'ftello',
        'clearerr',
        'feof',
        'ferror',
        'perror',
        'fileno',
        'popen',
        'pclose',
        'ctermid',
        'flockfile',
        'ftrylockfile',
        'funlockfile',
        'tmpfile64',
        'tmpnam_r',
        'renameat',
        'fmemopen',
        'open_memstream',
        'fflush_unlocked',
        'fgetc_unlocked',
        'putc_unlocked',
        'fputc_unlocked',
        '__getdelim',
        'fread_unlocked',
        'fwrite_unlocked',
        'clearerr_unlocked',
        'feof_unlocked',
        'ferror_unlocked',
        'asprintf',
        'ctermid_r',
        'fgetln',
        'c_char',
        'fpurge',
        'zopen',
        'sizeof',
        'elemsof',
        'offsetof',
        'to_container',
    ],
    typeKeywords: [
        'auto',
        'asm',
        'bool',
        'cast',
        'char',
        'const',
        'elemsof',
        'enum_min',
        'enum_max',
        'enum',
        'false',
        'f32',
        'f64',
        'func',
        'i8',
        'i16',
        'i32',
        'i64',
        'local',
        'nil',
        'offsetof',
        'to_container',
        'sizeof',
        'struct',
        'true',
        'type',
        'u8',
        'u16',
        'u32',
        'u64',
        'union',
        'void',
        'volatile',
        'min_i8',
        'max_i8',
        'min_i16',
        'max_i16',
        'min_i32',
        'max_i32',
        'min_i64',
        'max_i64',
        'min_isize',
        'max_isize',
        'min_u8',
        'max_u8',
        'min_u16',
        'max_u16',
        'min_u32',
        'max_u32',
        'min_u64',
        'max_u64',
        'min_uize2',
        'max_usize',
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
