/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ['//'],
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
            beforeText: new RegExp('^\\s*(?:for|if|else|while|switch).*?\\s*$'),
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
    defaultToken: '',
    tokenPostfix: '.l',
    keywords: [
        'break',
        'case',
        'class',
        'constructor',
        'continue',
        'default',
        'defined',
        'destructor',
        'do',
        'else',
        'expand',
        'extern',
        'goto',
        'float',
        'for',
        'foreach',
        'goto',
        'if',
        'instance',
        'int',
        'poly',
        'private',
        'public',
        'return',
        'string',
        'struct',
        'switch',
        'typedef',
        'unless',
        'void',
        'while',
        'widget',
    ],
    builtins: [
        '__FILE__',
        '__LINE__',
        '__FUNC__',
        'END',
        'stdio_status',
        'undef',
        'string',
        'abs',
        'assert',
        'basename',
        'caller',
        'chdir',
        'chmod',
        'chown',
        'cpus',
        'die',
        'dirname',
        'eq',
        'exists',
        'fclose',
        'fopen',
        'fprintf',
        'Fprintf',
        'ftype',
        'getdir',
        'getdir',
        'getdirx',
        'getenv',
        'getopt',
        'getpid',
        'here',
        'insert',
        'isalpha',
        'isalnum',
        'isdigit',
        'isdir',
        'islink',
        'islower',
        'isreg',
        'isspace',
        'isupper',
        'iswordchar',
        'join',
        'keys',
        'lc',
        'length',
        'length',
        'length',
        'link',
        'lstat',
        '|floatmax',
        '|floatmin',
        'milli',
        'milli_reset',
        'mkdir',
        'mtime',
        'normalize',
        'ord',
        'pclose',
        'pclose',
        'perror',
        'perror',
        'pop',
        'popen',
        'popen',
        'printf',
        'push',
        'putenv',
        'puts',
        'read',
        'rename',
        'require',
        'rmdir',
        'shift',
        'shsplit',
        'size',
        'sleep',
        'sort',
        'spawn',
        'split',
        'sprintf',
        'stat',
        'strchr',
        'strlen',
        'strrchr',
        'symlink',
        'system',
        'trim',
        'typeof',
        'uc',
        'undef',
        'unlink',
        'unshift',
        'waitpid',
        'wait',
        'warn',
        'write',
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
            [/#[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(\/\/.*$)/, 'comment'],
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
