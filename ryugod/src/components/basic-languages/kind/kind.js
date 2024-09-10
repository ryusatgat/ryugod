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
            beforeText: new RegExp('^\\s*(?:function|if|else|while).*?\\s*$'),
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
    tokenPostfix: '.kind',
    keywords: [
        'as',
        'break',
        'continue',
        'else',
        'export',
        'if',
        'return',
        'while',        
        'false',
        'this',
        'true',
        'sizeof',
        'null',
        'new',
        'alignof',
    ],
    builtins: [
        'App',
        'Array',
        'BBT',
        'BVH',
        'Bits',
        'BitsMap',
        'BitsSet',
        'Bool',
        'Buffer8',
        'Bytes',
        'Char',
        'Cmp',
        'Col32',
        'Continuation',
        'Crypto',
        'Date',
        'Debug',
        'Deserializer',
        'Dyadic',
        'Either',
        'Empty',
        'Equal',
        'Ether',
        'Example',
        'F32',
        'F64',
        'Fin',
        'Function',
        'Functor',
        'GPT',
        'GSet',
        'HSL',
        'Hexagonal',
        'I128',
        'I16',
        'I256',
        'I32',
        'I64',
        'I8',
        'IO',
        'Int',
        'Kind',
        'Lambda',
        'List',
        'ListMap',
        'Logic',
        'Map',
        'Matrix',
        'Maybe',
        'Monad',
        'Monoid',
        'Mons',
        'Nat',
        'NatMap',
        'NatSet',
        'Pair',
        'Parser',
        'Physics',
        'PixelFont',
        'Pos32',
        'PriorityQueue',
        'Provit',
        'Puzzle',
        'Queue',
        'Random',
        'Refinement',
        'Result',
        'Serializer',
        'Set',
        'Shape',
        'Sigma',
        'String',
        'Stringifier',
        'TestSuite',
        'Trampoline',
        'U1024',
        'U128',
        'U16',
        'U256',
        'U32',
        'U32Map',
        'U64',
        'U8',
        'Unit',
        'User',
        'V2',
        'V3',
        'Variadic',
        'Vector',
        'VoxBox',
        'Word',        
    ],
    typeKeywords: [
        'enum',
        'extends',
        'extern',
        'function',
        'unsafe',
        'static',
        'class',
        'const',
        'declare',
        'let',
        'implements',
        'import',
        'interface',
        'operator',
        'private',
        'protected',
        'public',
        'var',
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
