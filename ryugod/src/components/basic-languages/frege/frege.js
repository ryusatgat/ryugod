/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '--',
        blockComment: ["{--", "-}"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{--', close: '--}' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{--', close: '--}' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:forall|if|else).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
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
    tokenPostfix: '.fr',
    keywords: [
        'abstract',
        'case',
        'class',
        'data',
        'derive',
        'do',
        'else',
        'false',
        'forall',
        'if',
        'import',
        'in',
        'infix',
        'infixl',
        'infixr',
        'instance',
        'interface',
        'let',
        'module',
        'mutable',
        'native',
        'of',
        'package',
        'private',
        'protected',
        'public',
        'pure',
        'then',
        'throws',
        'true',
        'type',
        'where',
    ],
    builtins: [
        'Monad',
        'Functor',
        'Eq',
        'Ord',
        'Read',
        'Show',
        'Num',
        'Enum',
        'Bounded',
        'Real',
        'RealFrac',
        'RealFloat',
        'Integral',
        'Floating',
        'Fractional',
        'Rational',
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
        'LANGUAGE',
        'UNPACK',
        'INLINE',
        'Int',
        'Integer',
        'Maybe',
        'Either',
        'Bool',
        'Float',
        'Double',
        'Char',
        'String',
        'Ordering',
        'ShowS',
        'ReadS',
        'FilePath',
        'IO',
        'IOError',
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
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(--.*$)/, 'comment'],
            [/\{--/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\{-]+/, 'comment'],
            [/-\}/, 'comment', '@pop'],
            [/[\{-]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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
