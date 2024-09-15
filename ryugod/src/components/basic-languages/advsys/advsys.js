/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ';',
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
    tokenPostfix: '.adv',
    keywords: [
        'action',
        'actor',
        'adjective',
        'adventure',
        'article',
        'aux',
        'class',
        'code',
        'conjunction',
        'default',
        'define',
        'direct',
        'extended',
        'forbidden',
        'indirect',
        'main',
        'method',
        'nil',
        'noun',
        'object',
        'optional',
        'preposition',
        'property',
        'required',
        'synonym',
        't',
        'variable',
        'verb',
    ],
    builtins: [
        'a-close',
        'a-inventory',
        'a-lock',
        'a-open',
        'a-unlock',
        'abort',
        'after',
        'and',
        'before',
        'chain',
        'child',
        'class-property',
        'close-err',
        'closed',
        'complain',
        'connect',
        'connect-all',
        'curloc',
        'describe',
        'description',
        'disconnect',
        'down',
        'drop',
        'drop-err',
        'e',
        'east',
        'enter',
        'error',
        'findobject',
        'finish',
        'get',
        'give',
        'give-err',
        'go-down',
        'go-east',
        'go-north',
        'go-south',
        'go-up',
        'go-west',
        'i',
        'in-location',
        'in-pocket',
        'init',
        'initial-location',
        'inventory',
        'key',
        'list-contents',
        'location',
        'lock-err',
        'locked',
        'look',
        'n',
        'north',
        'open-err',
        'other-side',
        'parent',
        'pick',
        'picture',
        'portal',
        'print-contents',
        'put',
        'quit',
        'rand',
        'randomize',
        'resource',
        'restart',
        'restore',
        's',
        'save',
        'send-super',
        'short-description',
        'sibling',
        'south',        
        'take',
        'that',
        'the',
        'thing',
        'unlock-err',
        'up',
        'update',
        'visited',
        'w',
        'west',
    ],
    typeKeywords: [
        'ST-ABORT',
        'ST-CHAIN',
        'ST-FINISH',
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
            [/@[\.\/a-zA-Z_][\.\/\w]*/, 'metatag'],
            [/%[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_][\-\w]*/,
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
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(;.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"/, 'string.escape', '@endString']
        ],
        endString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"/, 'string.escape', '@popall'],
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
    }
};
