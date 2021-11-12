/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['#'],
        blockComment: ["#|", "|#"]
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
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.zig',
    keywords: [
        'end',
        'block',
        'type',
        'type-let',
        'newtype',
        'include',
        'import',
        'provide',
        'provide-types',
        'as',
        'fun',
        'lam',
        'doc',
        'where',
        'check',
        'examples',
        'is',
        'is-not',
        'is-roughly',
        'satisfies',
        'violates',
        'raises',
        'does-not-raise',
        'raises-violates',
        'raises-satisfies',
        'raises-other-than',
        'data',
        'with',
        'sharing',
        'deriving',
        'for',
        'from',
        'and',
        'or',
        'not',
        'if',
        'else',
        'when',
        'cases',
        'ask',
        'then',
        'otherwise',
        'var',
        'ref',
        'shadow',
        'let',
        'letrec',
        'rec',
        'method',
    ],
    builtins: [
        'true',
        'false',
        'nothing',
        'Number',
        'String',
        'Boolean',
        'RawArray',
        'Table',
        'List',
        'Set',
        'Array',
        'StringDict',
        'Option',
        'Pick',
        'Either',
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
            [/^`\w+/, 'type.identifier'],
            [
                /[a-zA-Z_-]+/,
                {
                    cases: {
                        '@builtins': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            //[/(^\/\/.*$)/, 'comment'],            
            [/#\|/, 'comment', '@comment'],
            [/(^#.*$)/, 'comment'],
        ],
        comment: [
            [/[^\|#]+/, 'comment'],
            [/\|#/, 'comment', '@pop'],
            [/[\|#]/, 'comment']
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
            [/"/, 'string.escape', '@dblStringBody'],
            [/```$/, 'string.escape', '@popall'],
            [/```/, 'string.escape', '@tplStringBody']
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
        ],
        tplStringBody: [
            [/[^```]+$/, 'string', '@popall'],
            [/[^```]+/, 'string'],
            [/\\./, 'string'],
            [/```/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
