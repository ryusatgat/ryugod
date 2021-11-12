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
            beforeText: new RegExp('^\\s*(?:for|if|else|while).*?\\s*$'),
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
    tokenPostfix: '.rix',
    keywords: [
        'asm',
        'break',
        'case',
        'continue',
        'default',
        'do',
        'else',
        'enum',
        'for',
        'fortran',
        'goto',
        'if',
        'return',
        'struct',
        'switch',
        'typedef',
        'union',
        'while',
        'sizeof',
    ],
    builtins: [
        'echo',
        'print',
        'NULL',
        'MAX',
        'MIN',
        'TRUE',
        'FALSE',
        '__LINE__',
        '__DATA__',
        '__FILE__',
        '__func__',
        '__TIME__',
        '__STDC__',
        'true',
        'false',
        'stdin',
        'stdout',
        'stderr',
        'SIGABRT',
        'SIGALRM',
        'SIGCHLD',
        'SIGCONT',
        'SIGFPE',
        'SIGHUP',
        'SIGILL',
        'SIGINT',
        'SIGKILL',
        'SIGPIPE',
        'SIGQUIT',
        'SIGSEGV',
        'SIGSTOP',
        'SIGTERM',
        'SIGTRAP',
        'SIGTSTP',
        'SIGTTIN',
        'SIGTTOU',
        'SIGUSR1',
        'SIGUSR2',
    ],
    typeKeywords: [
        '_Bool',
        '_Complex',
        '_Imaginary',
        'bool',
        'char',
        'double',
        'float',
        'int',
        'int8_t',
        'int16_t',
        'int32_t',
        'int34_t',
        'uint8_t',
        'uint16_t',
        'uint32_t',
        'uint34_t',
        'long',
        'ptrdiff_t',
        'off',
        'short',
        'signed',
        'size_t',
        'ssize_t',
        'unsigned',
        'void',
        'wchar_t',
        'wint_t',
        'float',
        'BaseType',
        'int',
        'Number',
        'String',
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
            [/#[a-zA-Z_]\w*/, 'variable'],
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
