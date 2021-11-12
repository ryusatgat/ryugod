/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '%',
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
    tokenPostfix: '.pal',
    keywords: [
        'add',
        'addr',
        'and',
        'attr',
        'bcall',
        'bclone',
        'bdef',
        'bglobal',
        'blocal',
        'bresize',
        'bsize',
        'bstatic',
        'call',
        'child',
        'class',
        'clone',
        'clr',
        'cmp',
        'commit',
        'commitref',
        'conv',
        'copy',
        'debug',
        'decr',
        'def',
        'del',
        'dim',
        'direct',
        'div',
        'dump',
        'edit',
        'eq',
        'error',
        'export',
        'flush',
        'func',
        'ge',
        'get',
        'global',
        'gt',
        'iconv',
        'import',
        'incr',
        'index',
        'itree',
        'jmp',
        'jmpeq',
        'jmpge',
        'jmpgt',
        'jmple',
        'jmplt',
        'jmpne',
        'jsr',
        'jsreq',
        'jsrge',
        'jsrgt',
        'jsrle',
        'jsrlt',
        'jsrne',
        'lcmp',
        'le',
        'level',
        'list',
        'load',
        'local',
        'lock',
        'lt',
        'mask',
        'mod',
        'move',
        'mtx',
        'mult',
        'mvadd',
        'mvdel',
        'mvmod',
        'mvtest',
        'ne',
        'noop',
        'not',
        'now',
        'obj',
        'op',
        'opa',
        'opo',
        'opx',
        'or',
        'pa',
        'pull',
        'push',
        'rcmp',
        'refresh',
        'reg',
        'reserved1',
        'reserved2',
        'resize',
        'rol',
        'roll',
        'ror',
        'rtn',
        'save',
        'set',
        'shl',
        'shr',
        'size',
        'source',
        'stack',
        'static',
        'sub',
        'swap',
        'test',
        'tree',
        'type',
        'unlock',
        'var',
        'xconv',
        'xcopy',
        'xload',
        'xor',
        'xscan',
        'xtree',
    ],
    builtins: [

    ],
    typeKeywords: [],
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
            [/[,:;/]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/\.[a-zA-Z_]\w*/, 'metatag'],
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
            [/(%.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/\]$/, 'string.escape', '@popall'],
            [/\[/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\\]]+$/, 'string', '@popall'],
            [/[^\\\]]+/, 'string'],
            [/\\./, 'string'],
            [/\]/, 'string.escape', '@popall'],
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
