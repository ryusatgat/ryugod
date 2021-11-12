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
    tokenPostfix: '.cpp',
    keywords: [
        'operator',
        'new',
        'if',
        'echo',
        'const',
        'async',
        'yield',
        'try',
        'throw',
        'namespace',
        'var',
        'else',
        'for',
        'foreach',
        'do',
        'while',
        'class',
        'module',
        'struct',
        'break',
        'continue',
        'case',
        'switch',
        'enum',
        'return',
        'dofile',
        'import',
        'include',
        'dostring',
        'parse',
        'assert',
        'donode',
    ],
    builtins: [
        'reverse',
        'where',
        'remove',
        'select',
        'run_until_complete',
        'result',
        'get_event_loop',
        'create_task',
        'sleep',
        'wait',
        'wait_for',
        'run',
        'parse',
        'printf',
        'print',
        'printfln',
        'println',
        'endl',
        'dump',
        'setechofunc',
        'loadlibrary',
        'freelibrary',
        'getargs',
        'execmd',
        'encode',
        'decode',
        'open',
        'close',
        'log',
        'breakpoint',
        'trace',
        'Collect',
        'CollectAll',
        'gcinfo',
        'getc',
        'getch',
        'getline',
        'splitdrive',
        'walk',
        'listdir',
        'stat',
        'where',
        'select',
        'where',
        'select',
        'byte2str',
        'split',
        'cut',
        'strcuts',
        'split',
        'cut',
        'strcuts',
        'chr',
        'unicode_fromCodeAt',
        'constructor',
        'nanoseconds',
        'microseconds',
        'milliseconds',
        'seconds',
        'minutes',
        'hours',
        'slice',
        'range',
        'xrange',
        'nrange',
    ],
    typeKeywords: [
        'true',
        'catch',
        'null',
        'nil',
        'NULL',
        'false',
        'map',
        'vector',
        'math',
        'string',
        'time',
        'io',
        'GC',
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
            [/'/, 'string.escape', '@stringBody'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
