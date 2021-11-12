/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ['--', '//'],
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:procedure|function|class|for|if|elsif|else|try|catch|switch|while).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#pragma\\s+region\\b'),
            end: new RegExp('^\\s*#pragma\\s+endregion\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.exw',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'and',
        'or',
        'not',
        'xor',
        'break',
        'continue',
        'exit',
        'fallthru',
        'case',
        'default',
        'format',
        'fallthrough',
        'constant',
        'enum',
        'static',
        'iff',
        'try',
        'catch',
        'dynamic',
        'iif*',
        'class',
        'struct',
        'abstract',
        'extends',
        'do',
        'while',
        'switch',
        'public',
        'forward',
        'global',
        'export',
        'private',
        'for',
        'by',
        'to',
        'end',
        'if',
        'then',
        'elsif',
        'else',
        'true',
        'false',
        'null',
        'goto',
        'function',
        'procedure',
        'type',
        'return',
        'ifdef',
        'elsifdef',
        'elsedef',
        'include',
        'with',
        'without',
        'abort',
        'atom',
        'number',
        'bool',
        'close',
        'compare',
        'int',
        'integer',
        'seq',
        'sequence',
        'string',
        'object',
        'delete',
        'equal',
        'floor',
        'flush',
        'log',
        'peek',
        'poke',
        'power',
        'prepend',
        'profile',
        'trace',
        'seek',
        'sin',
        'sleep',
        'version',
        'where',
    ],
    builtins: [
        'apply',
        'assert',
        'boolean',
        'call',
        'choose',
        'crash',
        'date',
        'elapsed',
        'factors',
        'filter',
        'find',
        'free',
        'head',
        'join',
        'largest',
        'listen',
        'lower',
        'map',
        'match',
        'max',
        'min',
        'mod',
        'pad',
        'print',
        'product',
        'proper',
        'progress',
        'repeat',
        'reverse',
        'shorten',
        'shuffle',
        'sign',
        'smallest',
        'sort',
        'split',
        'substitute',
        'sum',
        'system',
        'tail',
        'trim',
        'union',
        'unique',
        'upper',
        'value',
        'sq_eq',
        'sq_int',
        'sq_add',
        'sq_and',
        'sq_and_bits',
        'sq_cos',
        'sq_rmdr',
        'sq_abs',
        'sq_ne',
        'sq_atom',
        'sq_sub',
        'sq_not',
        'sq_or_bits',
        'sq_sin',
        'sq_uminus',
        'sq_round',
        'sq_lt',
        'sq_str',
        'sq_mul',
        'sq_or',
        'sq_xor_bits',
        'sq_tan',
        'sq_rand',
        'sq_ceil',
        'sq_le',
        'sq_seq',
        'sq_div',
        'sq_xor',
        'sq_not_bits',
        'sq_arccos',
        'sq_log',
        'sq_sign',
        'sq_gt',
        'sq_floor',
        'sq_odd',
        'sq_arcsin',
        'sq_power',
        'sq_mod',
        'sq_ge',
        'sq_cmp',
        'sq_floor_div',
        'sq_even',
        'sq_arctan',
        'sq_sqrt',
        'sq_trunc',


        'arguments',
        'await',
        'const',
        'debugger',
        'delete',
        'eval',
        'final',
        'finally',
        'implements',
        'import',
        'in',
        'instanceof',
        'interface',
        'let',
        'native',
        'new',
        'package',
        'protected',
        'super',
        'synchronized',
        'this',
        'throws',
        'transient',
        'typeof',
        'var',
        'void',
        'volatile',
        'yield'
    ],
    operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    encoding: /u|u8|U|L/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // C++ 11 Raw String
            [/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            // The preprocessor checks must be before whitespace as they check /^\s*#/ which
            // otherwise fails to match later after other whitespace has been removed.
            // Inclusion
            [/^\s*#\s*include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directive
            [/^\s*#\s*\w+/, 'keyword.directive'],
            // whitespace
            { include: '@whitespace' },
            // [[ attributes ]].
            [/\[\s*\[/, { token: 'annotation', next: '@annotation' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
            [/\d[\d']*\d(@integersuffix)/, 'number'],
            [/\d(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
            [/--.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        raw: [
            [
                /(.*)(\))(?:([^ ()\\\t"]*))(\")/,
                {
                    cases: {
                        '$3==$S2': [
                            'string.raw',
                            'string.raw.end',
                            'string.raw.end',
                            { token: 'string.raw.end', next: '@pop' }
                        ],
                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
                    }
                }
            ],
            [/.*/, 'string.raw']
        ],
        annotation: [
            { include: '@whitespace' },
            [/using|alignas/, 'keyword'],
            [/[a-zA-Z0-9_]+/, 'annotation'],
            [/[,:]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [/\]\s*\]/, { token: 'annotation', next: '@pop' }]
        ],
        include: [
            [
                /(\s*)(<)([^<>]*)(>)/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ],
            [
                /(\s*)(")([^"]*)(")/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ]
        ]
    }
};
