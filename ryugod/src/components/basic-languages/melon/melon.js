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
    tokenPostfix: '.ms',
    keywords: [
        'break',
        'else',
        'if',
        'return',
        'this',
        'let',
        'func',
        'for',
        'in',
        'continue',
        'while',
    ],
    builtins: [
        'abs',
        'acos',
        'asin',
        'atan',
        'atan2',
        'basename',
        'call',
        'ceil',
        'charCodeAt',
        'clone',
        'close',
        'compile',
        'compileFile',
        'cos',
        'delete',
        'dirname',
        'exists',
        'exp',
        'find',
        'floor',
        'flush',
        'format',
        'fromCharCodes',
        'fromNumber',
        'fromString',
        'fromString',
        'getArchBits',
        'getArgsCount',
        'getFile',
        'getMelonVersion',
        'getName',
        'getRandomInt',
        'getRandomNumber',
        'getSeed',
        'hasKey',
        'isArray',
        'isBool',
        'isClosure',
        'isDirectory',
        'isEOF',
        'isFile',
        'isInfinity',
        'isInteger',
        'isNaN',
        'isNull',
        'isNumber',
        'isObject',
        'isProgram',
        'isReadable',
        'isString',
        'isWritable',
        'log',
        'lookup',
        'merge',
        'of',
        'open',
        'parse',
        'parseFile',
        'pow',
        'print',
        'read',
        'realpath',
        'removeKey',
        'replace',
        'resize',
        'round',
        'seed',
        'seek',
        'sin',
        'size',
        'split',
        'sqrt',
        'stringify',
        'tan',
        'tell',
        'toCapitalized',
        'toLower',
        'toString',
        'toUpper',
        'trim',
        'write',
    ],
    typeKeywords: [
        'false',
        'null',
        'true',
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
