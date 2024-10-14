/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
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
    tokenPostfix: '.ric',
    keywords: [

    ],
    builtins: [
        'exit',
        'print',
        'printf',
        'append',
        'push',
        'pop',
        'popFirst',
        'popIdx',
        'len',
        'contains',
        'keys',
        'isDefined',
        'help',
        'type',
        'typeInText',
        'list',
        'data',
        'text',
        'printEnv',
        'sum',
        'sort',
        'join',
        'cachepot',
        'jsonLoad',
        'jsonConvert',
        'parseInt',
        'split',
        'charCode',
        'toUpper',
        'toLower',
        'startsWith',
        'endsWith',
        'trim',
        'isnumeric',
        'bigInt',
        'minHeap',
        'maxHeap',
        'heapInsert',
        'heapPop',
        'isFile',
        'fileOpen',
        'fileClose',
        'fileWrite',
        'fileRead',
        'fileReadAll',
        'fileReadLines',
        'input',
        'pow',
        'log',
        'sqrt',
        'sin',
        'cos',
        'tan',
        'exp',
        'abs',
        'floor',
        'ceil',
        'randomInt',
        'random',
        'textBase',
        'intBase',
        'sha256',
        'md5',
        'base64',
        'base64Dec',
        'hex',
        'hexDec',
        'blowfishKeys',
        'blowfishKeysDestroy',
        'blowfish',
        'blowfishDec',
        'load',
        'now',
        'timeSeconds',
        'timeMinutes',
        'timeHours',
        'timeDays',
        'timeWeeks',
        'timeMonths',
        'timeYears',
        'timeSecond',
        'timeMinute',
        'timeHour',
        'timeDay',
        'timeWeek',
        'timeMonth',
        'timeYear',
        'xattrList',
        'xattrGet',
        'xattrSet',
        'xattrFindKey',
        'xattrRm',
        'sleep',
        'isDir',
        'ls',
        'rm',
        'mkdir',
        'find',
        'cd',
        'osName',
        'setTimeout',
        'setInterval',
        'socketServer',
        'socketAccept',
        'socketRead',
        'socketWrite',
        'socketClose',
        'socketConnect',
    ],
    typeKeywords: [

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
            [/@\ *?[a-zA-Z_]\w*/, 'metatag'],
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
            [/(#.*$)/, 'comment'],
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
