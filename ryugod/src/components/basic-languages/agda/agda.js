/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '--',
        blockComment: ["{-", "-}"]
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
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
    tokenPostfix: '.agda',
    keywords: [
        'abstract',
        'data',
        'hiding',
        'import',
        'as',
        'infix',
        'infixl',
        'infixr',
        'module',
        'mutual',
        'open',
        'primitive',
        'private',
        'public',
        'record',
        'renaming',
        'rewrite',
        'using',
        'where',
        'with',
        'field',
        'constructor',
        'instance',
        'syntax',
        'pattern',
        'inductive',
        'coinductive',
        'variable',
        'postulate',
        'codata',
        'let',
        'in',
        'forall',
        'by',
    ],
    builtins: [
        'NUL',
        'SOH',
        'STX',
        'ETX',
        'EOT',
        'ENQ',
        'ACK',
        'BEL',
        'BS',
        'HT',
        'LF',
        'VT',
        'FF',
        'CR',
        'SO',
        'SI',
        'DLE',
        'DC1',
        'DC2',
        'DC3',
        'DC4',
        'NAK',
        'SYN',
        'ETB',
        'CAN',
        'EM',
        'SUB',
        'ESC',
        'FS',
        'GS',
        'RS',
        'US',
        'SP',
        'DEL',        
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
            [/[,:;_]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/[⊥∘∧∨↔¬∎λ→∀≡≈]/, 'metatag'],
            [
                /[a-zA-Z]\w*/,
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
            [/(--.*$)/, 'comment'],
            [/{-/, 'comment', '@comment'],
        ],
        comment: [
            [/[^{-]+/, 'comment'],
            [/-}/, 'comment', '@pop'],
            [/[{-]/, 'comment']
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
