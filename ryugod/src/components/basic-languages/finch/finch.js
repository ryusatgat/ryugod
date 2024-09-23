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
    tokenPostfix: '.finch',
    keywords: [
        'at',
        'call',
        'callstack',
        'ceiling',
        'current',
        'done',
        'from',
        'index',
        'mod',
        'neg',
        'new',
        'parent',
        'remove',
        'running',
        'switch',
        'to',
        'abs',
        'acos',
        'add',
        'asin',
        'atan',
        'cos',
        'count',
        'floor',
        'hash',
        'read',
        'sin',
        'sqrt',
        'tan',
        'write',
        'self',
    ],
    builtins: [
        'and:',
        'at:',
        'between:',
        'call:',
        'case:',
        'contains:',
        'count:',
        'current:',
        'default:',
        'do:',
        'each:',
        'else:',
        'else-if:',
        'end:',
        'from:',
        'fromcount:',
        'if:',
        'if-true:',
        'iterate:',
        'loop:',
        'map:',
        'new:',
        'not:',
        'or:',
        'outer-self:',
        'put:',
        'return:',
        'right:',
        'run:',
        'run-by:',
        'spawn:',
        'starts-with:',
        'then:',
        'to:',
        'turn:',
        'step:',
        'until:',
        'while:',
        'write:',
        'write-line:',
        'yield:',
        'generate:',
    ],
    typeKeywords: [
        'string',
        'false',
        'array?',
        'block?',
        'boolean?',
        'fiber?',
        'number?',
        'string?',
        'to-string',
        'true',
        'nil',
        'Object',
        'Array',
        'Arrays',
        'Blocks',
        'Ether',
        'Fiber',
        'Fibers',
        'Numbers',
        'Strings',
        'not',
        'run',
        'run-by',
        'yield',
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
            [/\*[a-zA-Z_]\w*\*/, 'metatag'],
            [
                /[a-zA-Z_][-\w]*[\?:]?/,
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
