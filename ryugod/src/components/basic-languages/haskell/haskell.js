/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '--',
      },
      brackets: [['{','}'],['[',']'],['(',')'],['<','>']],
      autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] },
      ]
};
export var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.haskell',
    keywords: [
        'qualified',
        'hiding',
        'case',
        'default',
        'deriving',
        'do',
        'else',
        'if',
        'import',
        'in',
        'infix',
        'infixr',
        'let',
        'of',
        'then',
        'type',
        'where',
        'show',
        '_'
    ],
    typeKeywords: [],
    operators: [
        '<=',
        '>=',
        '==',
        '!=',
        '===',
        '!==',
        '=>',
        '+',
        '-',
        '**',
        '*',
        '/',
        '%',
        '++',
        '--',
        '<<',
        '</',
        '>>',
        '>>>',
        '&',
        '|',
        '^',
        '!',
        '~',
        '&&',
        '||',
        '??',
        '?',
        ':',
        '=',
        '+=',
        '-=',
        '*=',
        '**=',
        '/=',
        '%=',
        '<<=',
        '>>=',
        '>>>=',
        '&=',
        '|=',
        '^=',
        '@'
    ],
    // we include these common regular expressions
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    tokenizer: {
        root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }, { include: '@comments' }],
        common: [
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[A-Z][\w\$]*/, 'type.identifier'],
            // [/[A-Z][\w\$]*/, 'identifier'],
            // whitespace
            { include: '@whitespace' },
            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
            // delimiters and operators
            [/[()\[\]]/, '@brackets'],
            [/!(?=([^=]|$))/, 'delimiter'],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
            [/0[xX](@hexdigits)n?/, 'number.hex'],
            [/0[oO]?(@octaldigits)n?/, 'number.octal'],
            [/0[bB](@binarydigits)n?/, 'number.binary'],
            [/(@digits)n?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string_double'],
            [/'/, 'string', '@string_single'],
            [/`/, 'string', '@string_backtick']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comments: [
            [/\-\-+.*/, 'comment'],
        ],
        comment: [
            [/[^\-\-]+/, 'comment'],
        ],
        string_double: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        string_single: [
            [/[^\\']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/'/, 'string', '@pop']
        ],
        string_backtick: [
            [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
            [/[^\\`$]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/`/, 'string', '@pop']
        ],
        bracketCounting: [
            [/\{/, 'delimiter.bracket', '@bracketCounting'],
            [/\}/, 'delimiter.bracket', '@pop'],
            { include: 'common' }
        ]
    }
};
