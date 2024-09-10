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
    tokenPostfix: '.fat',
    keywords: [
        'false',
        'null',
        'root',
        'self',
        'true',
        'infinity',
    ],
    builtins: [
        'atomic',
        'processors',
        'Worker',
        'apply',
        'start',
        'cancel',
        'await',
        'isDone',
        'detectDepth',
        'to8',
        'to16',
        'to256',
        'log',
        'print',
        'stderr',
        'input',
        'flush',
        'cls',
        'moveTo',
        'isTTY',
        'showProgress',
        'box',
        'fill',
        'clear',
        'refresh',
        'getMax',
        'printAt',
        'makePair',
        'usePair',
        'frameTo',
        'readKey',
        'readText',
        'flushKeys',
        'endCurses',
        'getHash',
        'genUUID',
        'genKey',
        'derive',
        'encrypt',
        'decrypt',
        'digest',
        'bytes',
        'pbkdf2',
        'hmac',
        'encryptAES',
        'decryptAES',
        'trap',
        'trapWith',
        'untrap',
        'noCrash',
        'FileInfo',
        'basePath',
        'resolve',
        'exists',
        'read',
        'readBin',
        'write',
        'append',
        'remove',
        'isDir',
        'mkDir',
        'lsDir',
        'stat',
        'Route',
        'HttpRequest',
        'HttpResponse',
        'setHeaders',
        'post',
        'get',
        'put',
        'delete',
        'setName',
        'verifySSL',
        'setSSL',
        'listen',
        'abs',
        'ceil',
        'floor',
        'isInf',
        'isNaN',
        'logN',
        'random',
        'sqrt',
        'round',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'radToDeg',
        'degToRad',
        'sinh',
        'cosh',
        'tanh',
        'mean',
        'median',
        'sigma',
        'variance',
        'max',
        'min',
        'sum',
        'fact',
        'exp',
        'sigmoid',
        'relu',
        'minify',
        'toBase64',
        'fromBase64',
        'toJSON',
        'fromJSON',
        'toURL',
        'fromURL',
        'toFormData',
        'fromFormData',
        'toCSV',
        'fromCSV',
        'toRLE',
        'fromRLE',
        'ast',
        'stringify',
        'eval',
        'getVersion',
        'printStack',
        'readLib',
        'typeOf',
        'getTypes',
        'getDef',
        'getMeta',
        'setKey',
        'setMem',
        'runGC',
        'quickGC',
        'ContactInfo',
        'config',
        'send',
        'CommandResult',
        'args',
        'exit',
        'getEnv',
        'shell',
        'capture',
        'fork',
        'kill',
        'getLocale',
        'setLocale',
        'getMacId',
        'blockSig',
        'setZone',
        'getZone',
        'now',
        'format',
        'parse',
        'wait',
        'getElapsed',
    ],
    typeKeywords: [
        '_',
        'async',
        'Boolean',
        'Chunk',
        'color',
        'console',
        'curses',
        'enigma',
        'Error',
        'extra',
        'failure',
        'fat',
        'file',
        'http',
        'HugeInt',
        'List',
        'math',
        'Method',
        'Number',
        'recode',
        'Scope',
        'sdk',
        'smtp',
        'std',
        'system',
        'Text',
        'time',
        'type',
        'Void',
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
            [/\$[a-zA-Z_]\w*/, 'tag'],
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