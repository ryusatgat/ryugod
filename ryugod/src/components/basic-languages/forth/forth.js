/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: "\\",
        blockComment: ["( ", ")"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#Region\\b'),
            end: new RegExp('^\\s*#End Region\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.fth',
    ignoreCase: true,
    keywords: [
        'NIP',
        'TUCK',
        'ROT',
        'SWAP',
        'DUP',
        'OVER',
        'DROP',
        '2SWAP',
        '2DUP',
        '2DROP',
        'FNIP',
        'FTUCK',
        'FROT',
        'FSWAP',
        'FDUP',
        'FOVER',
        'FDROP',
        'F2SWAP',
        'F2DUP',
        'F2DROP',
        'F+',
        'F-',
        'F*',
        'F**',
        'FSQRT',
        'F/',
        'F.S',
        'EXECUTE',
        'ABORT',
        'CATCH',
        'C@',
        'F@',
        '>R',
        'R>',
        '!',
        '/MOD',
        'MOD',
        'DO',
        'LOOP',
        'AGAIN',
        'BEGIN',
        'DEFINED',
        'DO',
        'ELSE',
        'ENDIF',
        'FOR',
        'IF',
        'IFDEF',
        'IFUNDEF',
        'LOOP',
        'NEXT',
        'REPEAT',
        'THEN',
        'UNTIL',
        'WHILE',
        'COMPILE-ONLY',
        'IMMEDIATE',
        'IS',
        'RESTRICT',
        'TO',
        'WHAT\'S',
        'DO',
        'LOOP',
        'DO',
        'LEAVE',
        'DO',
        'LOOP',
        'ABORT',
        'AGAIN',
        'AHEAD',
        'BEGIN',
        'CASE',
        'DO',
        'ELSE',
        'ENDCASE',
        'ENDIF',
        'ENDOF',
        'ENDTRY-IFERROR',
        'ENDTRY',
        'FOR',
        'IF',
        'IFERROR',
        'LEAVE',
        'LOOP',
        'NEXT',
        'RECOVER',
        'REPEAT',
        'RESTORE',
        'THEN',
        'TRY',
        'U-DO',
        'U+DO',
        'UNTIL',
        'WHILE',
        '<COMPILATION',
        '<INTERPRETATION',
        'ASSERT',
        'ASSERT0',
        'ASSERT1',
        'ASSERT2',
        'ASSERT3',
        'COMPILATION>',
        'DEFERS',
        'DOES>',
        'INTERPRETATION>',
        'OF',
        'POSTPONE',
        '<IS>',
        '<TO>',
        'CHAR',
        'END-STRUCT',
        'INCLUDE',
        'INCLUDED',
        'LOAD',
        'NEEDS',
        'REQUIRE',
        'REQUIRED',
        'REVISION',
        'SEE',
        'STRUCT',
        'THRU',
        'USE',
        'BREAK:',
        'BREAK',
        'DBG',
    ],
    builtins: [
    ],
    typeKeywords: [
        '2CONSTANT',
        '2VARIABLE',
        'ALIAS',
        'CONSTANT',
        'CREATE-INTERPRET/COMPILE',
        'CREATE-INTERPRET/COMPILE:',
        'CREATE',
        'DEFER',
        'FCONSTANT',
        'FIELD',
        'FVARIABLE',
        'USER',
        'VALUE',
        'VARIABLE',
        'VOCABULARY',
    ],
    // we include these common regular expressions
    symbols: /[=!~;\.,:&|\*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // identifiers, and keywords
            [
                /[a-zA-Z0-9_<>?$/\+\*@.-]+/,
                {
                    cases: {
                        '@keywords': 'keyword.$0',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ],
            // Preprocessor directive
            [/^\s*#@\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/["\u201c\u201d]/, { token: 'string.quote', next: '@string' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\(\ /, 'comment', '@comment'],
            [/\\.*$/, 'comment'],            
        ],
        comment: [
            [/[^\)]+/, 'comment'],
            [/\(\ /, 'comment', '@push' ],    // nested comment  not allowed :-(
            [/\)/, 'comment', '@pop'],
            [/[\)]/, 'comment']
        ],
        string: [
            [/[^"\u201c\u201d]+/, 'string'],
            [/["\u201c\u201d]{2}/, 'string.escape'],
            [/["\u201c\u201d]C?/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};
