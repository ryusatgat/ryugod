/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '//',
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else|interface).*?\\s*$'),
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
    tokenPostfix: '.arturo',
    keywords: [
        'break',
        'call',
        'case',
        'continue',
        'do',
        'else',
        'globalize',
        'if',
        'if?',
        'let',
        'new',
        'pop',
        'push',
        'return',
        'try',
        'try?',
        'until',
        'var',
        'when?',
        'while',
        'array',
        'as',
        'dictionary',
        'function',
        'to',
        'and',
        'nand',
        'nor',
        'not',
        'or',
        'shl',
        'shr',
        'xnor',
        'xor',
        'all?',
        'and?',
        'any?',
        'false?',
        'nand?',
        'nor?',
        'not?',
        'or?',
        'true?',
        'xnor?',
        'arity',
        'attr',
        'attr?',
        'attribute?',
        'attributeLabel?',
        'attrs',
        'benchmark',
        'binary?',
        'block?',
        'boolean?',
        'char?',
        'database?',
        'date?',
        'dictionary?',
        'help',
        'info',
        'inline?',
        'inspect',
        'integer?',
        'is?',
        'floating?',
        'function?',
        'label?',
        'literal?',
        'null?',
        'path?',
        'pathLabel?',
        'set?',
        'stack',
        'standalone?',
        'string?',
        'symbol?',
        'symbols',
        'type',
        'type?',
        'word?',
        'loop',
        'every?',
        'filter',
        'fold',
        'map',
        'select',
        'some?',
        'clear',
        'input',
        'print',
        'prints',
        'true',
        'false',
        'null'
    ],
    builtins: [
        'add',
        'dec',
        'div',
        'fdiv',
        'inc',
        'mod',
        'mul',
        'neg',
        'pow',
        'sub',
        'append',
        'chop',
        'combine',
        'contains?',
        'drop',
        'empty',
        'empty?',
        'extend',
        'first',
        'flatten',
        'get',
        'in?',
        'index',
        'insert',
        'key?',
        'keys',
        'last',
        'max',
        'min',
        'permutate',
        'remove',
        'repeat',
        'reverse',
        'sample',
        'set',
        'shuffle',
        'size',
        'slice',
        'sort',
        'split',
        'take',
        'unique',
        'values',
        'equal?',
        'greater?',
        'greaterOrEqual?',
        'less?',
        'lessOrEqual?',
        'notEqual?',
        'decode',
        'encode',
        'digest',
        'hash',
        'close',
        'query',
        'open',
        'now',
        'exists?',
        'read',
        'unzip',
        'write',
        'zip',
        'download',
        'mail',
        'serve',
        'abs',
        'acos',
        'acosh',
        'asin',
        'asinh',
        'atan',
        'atanh',
        'average',
        'ceil',
        'cos',
        'cosh',
        'csec',
        'csech',
        'ctan',
        'ctanh',
        'even?',
        'exp',
        'factors',
        'floor',
        'gamma',
        'gcd',
        'ln',
        'log',
        'median',
        'negative?',
        'odd?',
        'positive?',
        'prime?',
        'product',
        'random',
        'range',
        'round',
        'sec',
        'sech',
        'sin',
        'sinh',
        'sqrt',
        'sum',
        'tan',
        'tanh',
        'zero?',
        'extract',
        'module',
        'relative',
        'difference',
        'intersection',
        'subset?',
        'superset?',
        'union',
        'ascii?',
        'capitalize',
        'color',
        'join',
        'levenshtein',
        'lower',
        'lower?',
        'match',
        'numeric?',
        'pad',
        'prefix',
        'prefix?',
        'render',
        'replace',
        'strip',
        'suffix',
        'suffix?',
        'upper',
        'upper?',
        'whitespace?',
        'ensure',
        'execute',
        'exit',
        'list',
        'panic',
        'pause',
        'webview',
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
            [/[,;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/[\':][a-zA-Z_]\w*/, 'metatag'],
            [
                /[a-zA-Z_]\w*\??/,
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
            [/(;.*$)/, 'comment'],
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
