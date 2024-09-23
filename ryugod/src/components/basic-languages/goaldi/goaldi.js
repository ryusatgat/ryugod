/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
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
    tokenPostfix: '.gd',
    keywords: [
        'break',
        'by',
        'case',
        'catch',
        'continue',
        'create',
        'default',
        'do',
        'else',
        'every',
        'extends',
        'fail',
        'global',
        'if',
        'initial',
        'lambda',
        'local',
        'not',
        'nil',
        'of',
        'package',
        'procedure',
        'record',
        'repeat',
        'return',
        'select',
        'static',
        'suspend',
        'then',
        'to',
        'until',
        'while',
        'with',
        'yield',
    ],
    builtins: [
        'buffer',
        'read',
        'write',
        'writes',
        'print',
        'println',
        'stop',
        'copy',
        'image',
        'noresult',
        'nilresult',
        'errresult',
        'exit',
        'throw',
        'sleep',
        'date',
        'time',
        'now',
        'duration',
        'cputime',
        'seq',
        'log',
        'atan',
        'randomize',
        'randgen',
        'rtod',
        'dtor',
        'iand',
        'ior',
        'ixor',
        'iclear',
        'icom',
        'ishift',
        'min',
        'max',
        'gcd',
        'amean',
        'gmean',
        'hmean',
        'qmean',
        'char',
        'ord',
        'reverse',
        'left',
        'center',
        'right',
        'unquote',
        'map',
    ],
    typeKeywords: [
        'chdir',
        'getwd',
        'chmod',
        'remove',
        'mkdir',
        'mkdirall',
        'rename',
        'truncate',
        'printf',
        'fprintf',
        'sprintf',
        'getenv',
        'setenv',
        'environ',
        'clearenv',
        'hostname',
        'getpid',
        'getppid',
        'command',
        'abs',
        'ceil',
        'floor',
        'integer',
        'cbrt',
        'sqrt',
        'hypot',
        'exp',
        'seed',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'sinh',
        'cosh',
        'tanh',
        'asinh',
        'acosh',
        'atanh',
        'contains',
        'containsany',
        'equalfold',
        'fields',
        'regex',
        'regexp',
        'quote',
        'replace',
        'repl',
        'split',
        'toupper',
        'tolower',
        'trim',
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
            [/[,;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/[%\/][a-zA-Z_]\w*/, 'metatag'],
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
