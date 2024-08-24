/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["'''", "'''"]
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$'),
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
    defaultToken: 'invalid',
    tokenPostfix: '.mojo',
    keywords: [
        'raises',
        'alias',
        'struct',
        'var',
        'inout',
        'abs',
        'all',
        'and',
        'any',
        'apply',
        'as',
        'assert',
        'async',
        'await',
        'break',
        'case',
        'chr',
        'classmethod',
        'cmp',
        'coerce',
        'compile',
        'continue',
        'del',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'elif',
        'else',
        'enumerate',
        'eval',
        'except',
        'exec',
        'execfile',
        'False',
        'file',
        'filter',
        'finally',
        'for',
        'format',
        'from',
        'frozenset',
        'getattr',
        'global',
        'hasattr',
        'hash',
        'help',
        'id',
        'if',
        'import',
        'in',
        'input',
        'intern',
        'is',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'map',
        'match',
        'max',
        'memoryview',
        'min',
        'next',
        'None',
        'nonlocal',
        'not',
        'object',
        'oct',
        'open',
        'or',
        'ord',
        'pass',
        'pow',
        'print',
        'property',
        'raise   ',
        'raise',
        'range',
        'raw_input',
        'reduce',
        'reload',
        'repr',
        'return',
        'reversed',
        'round',
        'self',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'True',
        'try',
        'tuple',
        'type',
        'unichr',
        'unicode',
        'vars',
        'while',
        'with',
        'xrange',
        'yield',
        'zip',
        'fn',
    ],
    builtins: [        
        'bytes',
        'List',
        'Dict',
        'Iterable',
        'Sequence',
        'Set',
        'FrozenSet',
        'Callable',
        'Union',
        'Tuple',
        'Any',

        'basestring',
        'bin',
        'async',
        'class',
        'def',
        'global',
        'lambda',
        'nonlocal',
        'int',
        'float',
        'long',
        'complex',
        'hex',
        'bool',
        'buffer',
        'bytearray',
        'callable',
        'complex',
        'globals',
        'locals',
        
        '__dict__',
        '__methods__',
        '__members__',
        '__class__',
        '__bases__',
        '__name__',
        '__mro__',
        '__subclasses__',
        '__init__',
        '__import__'
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
            [/(^#.*$)/, 'comment'],
            [/'''/, 'string', '@endDocString'],
            [/"""/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/[^']+/, 'string'],
            [/\\'/, 'string'],
            [/'''/, 'string', '@popall'],
            [/'/, 'string']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string', '@popall'],
            [/"/, 'string']
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
