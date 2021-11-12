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
    tokenPostfix: '.jolie',
    keywords: [
        'inputPort',
        'outputPort',
        'interface',
        'type',
        'define',
        'service',
        'location',
        'Location',
        'protocol',
        'Protocol',
        'interfaces',
        'Interfaces',
        'aggregates',
        'Aggregates',
        'redirects',
        'Redirects',
        'class',
        'Jolie',
        'JavaScript',
        'Java',
        'OneWay',
        'oneWay',
        'RequestResponse',
        'requestResponse',
        'execution',
        'constants',
        'cH',
        'instanceof',
        'execution',
        'comp',
        'concurrent',
        'nullProcess',
        'single',
        'sequential',
        'main',
        'foreign',
        'java',
        'init',
        'cset',
        'is_defined',
        'embed',
        'embedded',
        'extender',
        'courier',
        'forward',
        'install',
        'undef',
        'include',
        'synchronized',
        'throws',
        'throw',
        'from',
        'import',
        'as',
        'if',
        'else',
        'while',
        'for',
        'foreach',
        'provide',
        'until',
        'in',
        'throw',
        'forward',
        'scope',
    ],
    builtins: [
        'Console',
        'print',
        'println',
        'registerForInput',
        'unsubscribeSessionListener',
        'subscribeSessionListener',
        'enableTimestamp',
        'File',
        'convertFromBase64ToBinaryValue',
        'getMimeType',
        'convertFromBinaryToBase64Value',
        'toAbsolutePath',
        'getParentPath',
        'list',
        'copyDir',
        'delete',
        'getSize',
        'getFileSeparator',
        'rename',
        'readFile',
        'exists',
        'setMimeTypeFile',
        'deleteDir',
        'getServiceDirectory',
        'writeFile',
        'mkdir',
        'isDirectory',
        'Math',
        'random',
        'abs',
        'round',
        'pi',
        'pow',
        'summation',
        'Exec',
        'exec',
        'Runtime',
        'getVersion',
        'loadLibrary',
        'removeOutputPort',
        'setRedirection',
        'getOutputPorts',
        'loadEmbeddedService',
        'getOutputPort',
        'dumpState',
        'getLocalLocation',
        'getRedirection',
        'setOutputPort',
        'halt',
        'callExit',
        'stats',
        'removeRedirection',
        'setMonitor',
        'getProcessId',
        'getIncludePaths',
        'getenv',
    ],
    typeKeywords: [
        'void',
        'bool',
        'int',
        'string',
        'long',
        'double',
        'any',
        'raw',
        'csets',
        'global',
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
            //[/@[a-zA-Z_]\w*/, 'tag'],
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
