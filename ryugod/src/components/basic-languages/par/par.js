/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
        { open: '`', close: '`', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "`", close: "`" }
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
    tokenPostfix: '.par',
    keywords: [
        'if',
        'then',
        'else',
        'module',
        'import',
        'export',
        'for',
        'impl',
        'let',
        'in',
        'match',
        'try',
        'catch',
        'ensure',
        'after',
        'raise',
        'discard',
        'assume',
        'test',
        'assert',
        'enum',
        'struct',
        'interface',
        'impl',
        'exception',
        'export',
    ],
    builtins: [
        'print',
        'debug',
        'to_str',
        'to_pretty',
        'fail',
        'length',
        'empty',
        'concat',
        'concat_all',
        'map',
        'fold',
        'filter',
        'find',
        'filter_map',
        'fold_map',
        'put',
        'delete',
        'contains',
        'all',
        'any',
        'head',
        'tail',
        'get',
        'lookup',
        'key',
        'remove',
        'first',
        'second',
        'some_or',
        'abs',
        'ceil',
        'floor',
        'max',
        'min',
        'round',
        'trunc',
        'to_int',
        'to_float',
        'to_char',
        'to_atom',
        'to_list',
        'to_set',
        'to_map',
    ],
    typeKeywords: [
        'Int',
        'String',
        'Bool',
        'Char',
        'Float',
        'Atom',
        'true',
        'false',
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
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/`$/, 'string.escape', '@popall'],
            [/`/, 'string.escape', '@rawStringBody'],
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        rawStringBody: [
            [/`/, 'string.escape', '@popall'],
            [/\\$/, 'string']
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
