/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//', '**'],
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
    tokenPostfix: '.fanx',
    keywords: [ 
        'abstract',
        'as',
        'assert',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'default',
        'do',
        'else',
        'false',
        'final',
        'finally',
        'for',
        'foreach',
        'if',
        'internal',
        'is',
        'isnot',
        'it',
        'mixin',
        'native',
        'new',
        'null',
        'once',
        'override',
        'private',
        'protected',
        'public',
        'readonly',
        'return',
        'static',
        'super',
        'switch',
        'this',
        'throw',
        'true',
        'try',
        'using',
        'virtual',
        'volatile',
        'void',
        'while',
        'extension',
        'rtconst',
        'inline',
        'refer',
        'async',
        'yield',
        'lret',
        'await',
        'addressof',
        'sizeof',
        'offsetof',
        'uninit',
        'weak',
        'var',
        'let',
        'fun',
    ],
    builtins: [
        'assert_',
        'compare',
        'compareTo',
        'doTrap',
        'echo',
        'equals',
        'getClass',
        'hash',
        'hashCode',
        'isImmutable',
        'notify',
        'notifyAll',
        'toImmutable',
        'toStr',
        'toString',
        'trap',
        'typeof',
        'wait',
        'with',
    ],
    typeKeywords: [
        'plus',
        'minus',
        'mult',
        'div',
        'mod',
        'get',
        'set',
        'slice',
        'lshift',
        'rshift',
        'and',
        'or',
        'xor',
        'inverse',
        'negate',
        'increment',
        'decrement',
        'equals',
        'compare',
        'Void',
        'Bool',
        'Int',
        'Float',
        'Decimal',
        'Str',
        'Duration',
        'Uri',
        'Type',
        'Range',
        'List',
        'Map',
        'Obj',
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
            [/(\*\*.*$)/, 'comment'],
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
