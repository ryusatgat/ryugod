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
    tokenPostfix: '.cl',
    keywords: [
        'break',
        'catch',
        'continue',
        'do',
        'else',
        'finally',
        'for',
        'if',
        'mixin',
        'new',
        'return',
        'revert',
        'Self',
        'super',
        'throw',
        'try',
        'while',
        'with',
    ],
    builtins: [
        'anonymous',
        'asciiOnly',
        'backward',
        'capitalize',
        'char',
        'chomp',
        'chop',
        'clear',
        'clone',
        'cmp',
        'compile',
        'correct',
        'count',
        'delete',
        'downcase',
        'dup',
        'each',
        'exit',
        'forward',
        'get',
        'getByte',
        'getLong',
        'getShort',
        'getUInt',
        'global',
        'hashValue',
        'head',
        'hex',
        'ignoreCase',
        'include',
        'index',
        'items',
        'join',
        'length',
        'lstrip',
        'match',
        'matchReverse',
        'merge',
        'multiLine',
        'oct',
        'outputValueForInterpreter',
        'point',
        'print',
        'println',
        'put',
        'replace',
        'reverse',
        'rindex',
        'rstrip',
        'setEncode',
        'setGlobal',
        'setHead',
        'setIgnoreCase',
        'setItem',
        'setMultiLine',
        'setPoint',
        'setTail',
        'setValue',
        'source',
        'squeeze',
        'strip',        
        'sub',
        'swapcase',
        'tail',
        'toBool',
        'toByte',
        'toBytes',
        'toChar',
        'toDouble',
        'toFloat',
        'toInt',
        'toLong',
        'toParser',
        'toRange',
        'toShort',
        'toString',
        'toUInt',
        'tr',
        'value',
    ],
    typeKeywords: [
        'false',
        'null',
        'true',
        'int',
        'byte',
        'short',
        'uint',
        'long',
        'char',
        'float',
        'double',
        'pointer',
        'String',
        'anonymous',
        'void',
        'bool',
        'Null',
        'Array',
        'Range',
        'Class',
        'Field',
        'Method',
        'Hash',
        'Bytes',
        'Block',
        'Encoding',
        'Thread',
        'OnigurumaRegex',
        'Type',
        'Mutex',
        'StringBuffer',
        'Parser',
        'System',
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
