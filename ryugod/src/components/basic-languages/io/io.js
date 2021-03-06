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
    tokenPostfix: '.io',
    ignoreCase: true,
    keywords: [
        'call',
        'clone',
        'init',
        'return',
        'yield',
        'type',
        'sender',
        'try',
        'catch',
        'pass',
        'suite',
        'spec',
        'specs',
        'if',
        'then',
        'else',
        'self',
        'to',
        'loop',
        'repeat',
        'redo',
        'retry',
        'while',
        'for',
        'foreach',
        'reverseForeach',
        'break',
        'continue',
        'pause',
        'resume',
        'and',
        'or',
        'not',
        'yes',
        'no',
        'elseif',
    ],
    builtins: [
        'Object',
        'File',
        'Date',
        'URL',
        'Socket',
        'WebRequest',
        'HttpServer',
        'HttpRequestHandler',
        'Server',
        'Thread',
        'Scheduler',
        'Importer',
        'Exception',
        'Error',
        'Suite',
        'Spec',
        'Matcher',
        'String',
        'Number',
        'Dictionary',
        'Directory',
        'List',
        'Sequence',
        'Range',
        'nil',
        'null',
        'true',
        'false',
        'method',
        'block',
        'interpolate',
        'at',
        'atPut',
        'atInsert',
        'with',
        'println',
        'print',
        'run',
        'do',
        'raise',
        'ifTrue',
        'ifFalse',
        'ifTrueIfFalse',
        'asCharacter',
        'asString',
        'asNumber',
        'asMutable',
        'asLowercase',
        'asUppercase',
        'asXML',
        'makeFirstCharacterUppercase',
        'lowercase',
        'uppercase',
        'getSlot',
        'setSlot',
        'addSlot',
        'hasSlot',
        'slotNames',
        'setProtos',
        'setProto',
        'prependProto',
        'appendProto',
        'log',
        'log10',
        'mathematical',
        'sqrt',
        'exp',
        'abs',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'round',
        'floor',
        'ceil',
        'max',
        'min',
        'encoding',
        'code',
        'start',
        'fetch',
        'connect',
        'now',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'close',
        'exists',
        'pop',
        'push',
        'join',
        'first',
        'last',
        'keys',
        'hasKey',
        'values',
        'reduce',
        'reverse',
        'reverseReduce',
        'unique',
        'elementsWithName',
        'setItemType',
        'itemType',
        'attributes',
        'sort',
        'sortBy',
        'serialize',
        'slice',
        'split',
        'select',
        'selectInPlace',
        'size',
        'setSize',
        'indexOf',
        'insertAt',
        'flatten',
        'list',
        'vector',
        'map',
        'asyncSend',
        'futureSend',
        'resend',
        'append',
        'appendSeq',
        'beginsWithSeq',
        'betweenSeq',
        'message',
        'openForUpdating',
        'createThread',
        'streamTo',
        'streamWrite',
        'streamReadNextChunk',
        'readBuffer',
        'detect',
        'wait',
        'contains',
        'containsSeq',
        'remove',
        'removeAt',
        'removeFirst',
        'removeLast',
        'setPort',
        'setHostName',
        'argsEvaluatedIn',
        'setPath',
        'doFile',
        'doRelativeFile',
        'writeln',
        'write',
        'getScope',
        'setScope',
        'forwardTo',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            [/(``.*?``$)/, 'metatag'],
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
            [/(^\/\/.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
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