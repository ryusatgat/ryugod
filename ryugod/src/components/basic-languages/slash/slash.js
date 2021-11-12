/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//', '#'],
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
    tokenPostfix: '.sl',
    keywords: [
        'self',
        'class',
        'extends',
        'def',
        'if',
        'elsif',
        'else',
        'unless',
        'for',
        'in',
        'while',
        'until',
        'and',
        'or',
        'not',
        'lambda',
        'try',
        'catch',
        'return',
        'next',
        'last',
        'throw',
        'use',
        'switch',
    ],
    builtins: [
        'after',
        'all',
        'any',
        'before',
        'byte_offset',
        'call_with_self',
        'call',
        'capture',
        'ceil',
        'char',
        'close',
        'closed',
        'compile',
        'concat',
        'current',
        'decode',
        'delete',
        'drop',
        'each',
        'empty',
        'enumerate',
        'exit',
        'filter',
        'find',
        'finite',
        'first',
        'floor',
        'fold',
        'has_key',
        'hash',
        'includes',
        'infinite',
        'inspect',
        'join',
        'keys',
        'last',
        'length',
        'lower',
        'map',
        'match',
        'merge',
        'nan',
        'next',
        'offset',
        'options',
        'pop',
        'pred',
        'print',
        'push',
        'rand',
        'read',
        'reduce',
        'regexp',
        'reject',
        'require',
        'round',
        'shift',
        'sort',
        'source',
        'strftime',
        'succ',
        'sum',
        'take',
        'to_a',
        'to_f',
        'to_i',
        'to_s',
        'unshift',
        'upper',
        'write',
    ],
    typeKeywords: [
        'nil',
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
            [/@?@[a-zA-Z_]\w*/, 'variable'],
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
            [/(#.*$)/, 'comment'],
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
