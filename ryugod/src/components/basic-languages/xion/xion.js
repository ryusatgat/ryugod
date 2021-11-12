/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//', '#', '--'],
        blockComment: ["∞∞", "∞∞"]
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
    ignoreCase: true,
    tokenPostfix: '.xn',
    keywords: [
        'after',
        'all',
        'as',
        'by',
        'case',
        'catch',
        'char',
        'const',
        'create',
        'default',        
        'divde',
        'do',
        'down',
        'downto',
        'else',
        'end',
        'exit',
        'extends',
        'finally',
        'for',
        'foreach',
        'function',
        'get',
        'if',
        'implements',
        'include',
        'into',
        'is',
        'lastly',
        'local',
        'me',
        'new',
        'next',
        'not',
        'object',
        'of',
        'on',
        'ordinal',
        'pass',
        'put',
        'repeat',
        'return',
        'require',        
        'send',
        'set',
        'step',
        'super',
        'switch',
        'tell',
        'the',
        'then',
        'throw',
        'times',
        'to',
        'try',
        'type',
        'until',
        'use',
        'while',
        'with',
        'without',
    ],
    builtins: [
        '∞',
        'quote',
        'apostrophe',
        'comma',
        'period',
        'fullstop',
        'shared',
        'slash',
        'colon',
        'semicolon',
        'backslash',
        'backspace',
        'del',
        'delete',
        'eight',
        'eighteen',
        'eleven',
        'empty',
        'escape',
        'euler',
        'false',
        'fifteen',
        'first',
        'five',
        'forever',
        'formfeed',
        'four',
        'fourteen',
        'inf',
        'infinity',
        'last',
        'linefeed',
        'nan',
        'never',
        'newline',
        'nine',
        'nineteen',
        'null',
        'once',
        'one',
        'phi',
        'pi',
        'seven',
        'seventeen',
        'six',
        'sixteen',
        'space',
        'tab',
        'ten',
        'thirteen',
        'three',
        'thrice',
        'true',
        'twelve',
        'twenty',
        'twice',
        'two',
        'zero',
        'π',
        '__LINE__',
        '__FILE__',
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
                /[π∞a-zA-Z_]\w*/,
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
            [/(#.*$)/, 'comment'],
            [/(--.*$)/, 'comment'],
            [/∞∞+/, 'comment', '@comment'],
        ],
        comment: [
            [/[^∞]+/, 'comment'],
            [/∞∞+/, 'comment', '@pop'],
            [/[∞]/, 'comment']
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
