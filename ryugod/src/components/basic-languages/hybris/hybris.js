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
    tokenPostfix: '.hy',
    keywords: [
        'while',
        'do',
        'for',
        'foreach',
        'of',
        'unless',
        'if',
        'else',
        'switch',
        'case',
        'break',
        'next',
        'default',
        'new',
        'struct',
        'class',
        'extends',
        'static',
        'public',
        'private',
        'protected',
        'throw',
        'try',
        'catch',
        'finally',
        'return',
        'function',
        'method',
        'operator',
        'import',
        'include',
    ],
    builtins: [
        '__attribute',
        '__expire',
        '__method',
        '__size',
        '__to_string',
        'accept',
        'add',
        'appendError',
        'appendSuccess',
        'assert',
        'assertEqual',
        'assertNotEqual',
        'bind',
        'ClientSocket',
        'close',
        'connect',
        'Directory',
        'Dll',
        'Exception',
        'exec',
        'exit',
        'fail',
        'failIf',
        'failIfEqual',
        'failUnless',
        'failUnlessEqual',
        'File',
        'getFileName',
        'getPosition',
        'getSize',
        'input',
        'join',
        'kill',
        'listen',
        'merge',
        'message',
        'open',
        'peername',
        'Pipe',
        'print',
        'println',
        'Process',
        'read',
        'readAll',
        'readline',
        'readLine',
        'readType',
        'reset',
        'run',
        'seek',
        'ServerSocket',
        'setHost',
        'setPort',
        'setProcessArgs',
        'setProcessMode',
        'setProcessName',
        'setTimeout',
        'Socket',
        'sockname',
        'start',
        'sym',
        'terminate',
        'TestResult',
        'TestSuite',
        'Thread',
        'write',
    ],
    typeKeywords: [
        'std.io.console',
        'std.io.file',
        'std.io.network.socket',
        'std.io.network.tcp',
        'std.lang.map',
        'std.lang.reflection',
        'std.lang.type',
        'std.os.dll',
        'std.os.process',
        'std.os.threads',
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
            [/__[a-zA-Z_]\w*?__/, 'tag'],
            [
                /[a-zA-Z_][\.\w]*/,
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
            [/(#.*$)/, 'comment'],
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
