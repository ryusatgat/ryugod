/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|forall|if|else|with).*?\\s*$'),
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
    tokenPostfix: '.v',
    keywords: [
        'let',
        'import!',
        'if',
        'then',
        'else',
        'match',
        'with',
        'do',
        'rec',
        'forall',
        'for',
        'seq',
        'type',
        'where',
        'impl',
        'Self',
        'enum',
        'use',
        'fn',
    ],
    builtins: [
        'True',
        'False',
        'infix',
        'implicit',
        'derive',
        'doc',
        'assert',
        'assert_eq!',
        'assert_ne!',
        'assert_gt!',
        'assert_lt!',
        'assert_ge!',
        'assert_le!',
        'str',
        'u64',
        'u32',
        'panic!',
        'String',
        'Int',
        'Bool',
        
        'std.alternative',
        'std.applicative',
        'std.array',
        'std.assert',
        'std.bool',
        'std.byte',
        'std.category',
        'std.channel',
        'std.char',
        'std.cmp',
        'std.debug',
        'std.disposable',
        'std.effect',
        'std.env',
        'std.float',
        'std.foldable',
        'std.fs',
        'std.function',
        'std.functor',
        'std.group',
        'std.http',
        'std.identity',
        'std.int',
        'std.io',
        'std.json',
        'std.lazy',
        'std.lazyt',
        'std.list',
        'std.map',
        'std.monad',
        'std.monoid',
        'std.num',
        'std.option',
        'std.parser',
        'std.path',
        'std.prelude',
        'std.process',
        'std.random',
        'std.reference',
        'std.regex',
        'std.result',
        'std.semigroup',
        'std.show',
        'std.state',
        'std.statet',
        'std.stream',
        'std.string',
        'std.test',
        'std.thread',
        'std.transformer',
        'std.traversable',
        'std.types',
        'std.unit',
        'std.writer',
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
            [/[{}/[\]()]/, '@brackets'],
            [
                /[a-zA-Z_.!]+/,
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
            [/(\/\/.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
            [/#\[/, 'metatag', '@metatag'],
        ],
        comment: [
            [/[^*\/]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        metatag: [
            [/[^\]]+/, 'metatag'],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [/\]/, 'metatag', '@pop'],
            [/[#\[]/, 'metatag']
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
