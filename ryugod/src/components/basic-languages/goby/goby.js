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
    tokenPostfix: '.goby',
    keywords: [
        'abort',
        'alias',
        'alnum',
        'alpha',
        'and',
        'ARGF',
        'ARGV',
        'ascii',
        'at_exit',
        'attr',
        'attr_accessor',
        'attr_reader',
        'attr_writer',
        'autoload',
        'begin',
        'blank',
        'break',
        'callcc',
        'caller',
        'case',
        'catch',
        'class',
        'class_eval',
        'cntrl',
        'def',
        'deferr',
        'defined',
        'defout',
        'digit',
        'do',
        'else',
        'elsif',
        'end',
        'ensure',
        'ENV',
        'eval',
        'exit',
        'extend',
        'fail',
        'false',
        'for',
        'fork',
        'get_block',
        'graph',
        'if',
        'in',
        'include',
        'instance_eval',
        'lambda',
        'load',
        'loop',
        'lower',
        'module',
        'module_eval',
        'next',
        'nil',
        'not',
        'or',
        'prepend',
        'print',
        'private',
        'proc',
        'protected',
        'public',
        'punct',
        'raise',
        'redo',
        'require',
        'require_relative',
        'rescue',
        'retry',
        'return',
        'self',
        'space',
        'stderr',
        'stdin',
        'stdout',
        'super',
        'then',
        'throw',
        'trap',
        'true',
        'undef',
        'unless',
        'until',
        'upper',
        'when',
        'while',
        'xdigit',
        'yield',
    ],
    builtins: [
        '__callee__',
        '__ENCODING__',
        '__FILE__',
        '__LINE__',
        '__method__',
        'DATA',
        'DEBUG',
        'FILENAME',
        'KCODE',
        'LOAD_PATH',
        'LOADED_FEATURES',
        'MatchingData',
        'PROGRAM_NAME',
        'SAFE',
        'TOPLEVEL_BINDING',
        'VERBOSE',
    ],
    typeKeywords: [],
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
