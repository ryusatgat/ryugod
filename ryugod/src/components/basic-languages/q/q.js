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
    defaultToken: '',
    tokenPostfix: '.',
    keywords: [
        'and',
        'as',
        'const',
        'def',
        'div',
        'else',
        'extern',
        'from',
        'if',
        'import',
        'include',
        'mod',
        'not',
        'or',
        'otherwise',
        'private',
        'public',
        'special',
        'then',
        'type',
        'undef',
        'var',
        'virtual',
        'where',
    ],
    builtins: [
        'atan',
        'atan2',
        'Bool',
        'chr',
        'cos',
        'enum',
        'enum_from',
        'eof',
        'exists',
        'exp',
        'fclose',
        'fcopy',
        'feof',
        'fflush',
        'flip',
        'float',
        'flush',
        'fopen',
        'frac',
        'fread',
        'freadc',
        'freadq',
        'freads',
        'fwrite',
        'fwritec',
        'fwriteq',
        'fwrites',
        'hash',
        'int',
        'isconst',
        'isdef',
        'isfun',
        'isint',
        'isspecial',
        'isvar',
        'list',
        'ln',
        'open',
        'ord',
        'popen',
        'pos',
        'pred',
        'random',
        'read',
        'readc',
        'readq',
        'reads',
        'round',
        'seed',
        'shl',
        'shr',
        'sin',
        'sleep',
        'sqrt',
        'str',
        'str',
        'strq',
        'sub',
        'substr',
        'succ',
        'sysinfo',
        'time',
        'trunc',
        'tuple',
        'val',
        'valq',
        'version',
        'view',
        'which',
        'write',
        'write',
        'writec',
        'writeq',
        'writes',
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
