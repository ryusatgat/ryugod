/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.n',
    keywords: [
        'import',
        'pub',
        'priv',
        'class',
        'static',
        'new',
        'op',
        'fn',
        'native',
        'if',
        'for',
        'else',
        'while',
        'do',
        'throw',
        'try',
        'catch',
    ],
    builtins: [
        'char',
        'derive',
        'import',
        'printRepl',
        'add_builtin_fn',
        'add_builtin_fn_nest',
        'align',
        'alt',
        'and_with',
        'append',
        'arity',
        'as_bytes',
        'as_ints',
        'bit',
        'byte',
        'cancel',
        'clear',
        'clock',
        'close',
        'contains',
        'copy',
        'exit',
        'fill',
        'flush',
        'fmt',
        'from',
        'gc',
        'get_binder',
        'get_class',
        'get_fn',
        'has',
        'has_fn',
        'hash',
        'import_file',
        'input',
        'insert',
        'insert_byte',
        'insert_int',
        'is_finished',
        'is_int',
        'is_same_type',
        'is_started',
        'is_yielded',
        'iterate',
        'keys',
        'lower',
        'name',
        'not',
        'or_with',
        'pop',
        'precision',
        'print',
        'println',
        'read',
        'readall',
        'readbyte',
        'readbytes',
        'remove',
        'reset',
        'rewind',
        'run',
        'seek',
        'set',
        'shift_left',
        'shift_right',
        'sign',
        'size',
        'step',
        'str',
        'substr',
        'tell',
        'to',
        'to_bytes',
        'to_int',
        'to_ints',
        'toggle',
        'type',
        'type_of',
        'upper',
        'values',
        'width',
        'write',
        'writebyte',
        'writebytes',
        'xor_with',
        'yield',
        'zero_pad',
    ],
    typeKeywords: [
        'nil',
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
