/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['{', '}', '(*', '*)']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(*', close: '*)' },
        { open: '(', close: ')' },
        { open: "'", close: "'" },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(*', close: '*)' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp('^\\s*\\{\\$ENDREGION\\}')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.pascal',
    ignoreCase: true,
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'absolute',
        'abstract',
        'all',
        'and_then',
        'array',
        'as',
        'asm',
        'attribute',
        'begin',
        'bindable',
        'case',
        'class',
        'const',
        'contains',
        'default',
        'div',
        'else',
        'end',
        'except',
        'exports',
        'external',
        'far',
        'file',
        'finalization',
        'finally',
        'forward',
        'generic',
        'goto',
        'if',
        'implements',
        'import',
        'in',
        'index',
        'inherited',
        'initialization',
        'interrupt',
        'is',
        'label',
        'library',
        'mod',
        'module',
        'name',
        'near',
        'not',
        'object',
        'of',
        'on',
        'only',
        'operator',
        'or_else',
        'otherwise',
        'override',
        'package',
        'packed',
        'pow',
        'private',
        'program',
        'protected',
        'public',
        'published',
        'interface',
        'implementation',
        'qualified',
        'read',
        'record',
        'resident',
        'requires',
        'resourcestring',
        'restricted',
        'segment',
        'set',
        'shl',
        'shr',
        'specialize',
        'stored',
        'then',
        'threadvar',
        'to',
        'try',
        'type',
        'unit',
        'uses',
        'var',
        'view',
        'virtual',
        'dynamic',
        'overload',
        'reintroduce',
        'with',
        'write',
        'xor',
        'true',
        'false',
        'procedure',
        'function',
        'constructor',
        'destructor',
        'property',
        'break',
        'continue',
        'exit',
        'abort',
        'while',
        'do',
        'for',
        'raise',
        'repeat',
        'until',
        'return',
    ],
    builtins: [
        'dispose',
        'page',
        'readln',
        'unpack',
        'get',
        'put',
        'reset',
        'write',
        'new',
        'read',
        'rewrite',
        'writeln',
        'pack',
        'abs',
        'eof',
        'odd',
        'round',
        'sqrt',
        'arctan',
        'eoln',
        'ord',
        'sin',
        'succ',
        'chr',
        'exp',
        'pred',
        'sqr',
        'trunc',
        'cos',
        'ln',
    ],
    typeKeywords: [
        'boolean',
        'double',
        'byte',
        'integer',
        'shortint',
        'char',
        'longint',
        'float',
        'string',
        'word',
        'qword',
        'int64',
        'real',
    ],
    operators: [
        '=',
        '>',
        '<',
        '<=',
        '>=',
        '<>',
        ':',
        ':=',
        'and',
        'or',
        '+',
        '-',
        '*',
        '/',
        '@',
        '&',
        '^',
        '%'
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@strings' },
            // identifiers and keywords
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
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
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            [/\#\d+/, 'string']
        ],
        comment: [
            [/[^\}]+/, 'comment'],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [/\}/, 'comment', '@pop'],
            [/[\{]/, 'comment']
        ],
        comment2: [
            [/[^\*\)]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/[\(\)\*]/, 'comment']
        ],
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
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\{/, 'comment', '@comment'],
            [/\(\*/, 'comment', '@comment2'],
            [/\/\/.*$/, 'comment']
        ]
    }
};
