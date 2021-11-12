/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '\'',
        blockComment: ["{{", "}}"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{{', close: '}}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{{', close: '}}' },
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
    tokenPostfix: '.spin',
    keywords: [
        'abort',
        'and',
        'byte',
        'case',
        'con',
        'dat',
        'else',
        'elseif',
        'elseifnot',
        'float',
        'from',
        'if',
        'ifnot',
        'long',
        'next',
        'not',
        'obj',
        'or',
        'other',
        'pri',
        'pub',
        'quit',
        'reboot',
        'repeat',
        'result',
        'return',
        'step',
        'to',
        'until',
        'var',
        'while',
        'word',
    ],
    builtins: [
        '_clkfreq',
        '_clkmode',
        '_free',
        '_stack',
        '_xinfreq',
        'bytefill',
        'bytemove',
        'chipver',
        'clkfreq',
        'clkmode',
        'clkset',
        'cnt',
        'cogid',
        'coginit',
        'cognew',
        'cogstop',
        'constant',
        'ctra',
        'ctrb',
        'dira',
        'dirb',
        'false',
        'file',
        'frqa',
        'frqb',
        'ina',
        'inb',
        'lockclr',
        'locknew',
        'lockret',
        'lockset',
        'longfill',
        'longmove',
        'lookdown',
        'lookdownz',
        'lookup',
        'lookupz',
        'negx',
        'outa',
        'outb',
        'par',
        'phsa',
        'phsb',
        'pi',
        'pll16x',
        'pll1x',
        'pll2x',
        'pll4x',
        'pll8x',
        'posx',
        'rcfast',
        'rcslow',
        'round',
        'spr',
        'strcomp',
        'string',
        'strsize',
        'true',
        'trunc',
        'vcfg',
        'vscl',
        'waitcnt',
        'waitpeq',
        'waitpne',
        'waitvid',
        'wordfill',
        'wordmove',
        'xinput',
        'xtal1',
        'xtal2',
        'xtal3',
    ],
    brackets: [
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[\[\]()]/, '@brackets'],
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
            [/(\'.*$)/, 'comment'],
            [/{{/, 'comment', '@comment'],
        ],
        comment: [
            [/\}\}/, 'comment', '@pop'],
            [/[^{]+/, 'comment'],            
            [/[{]/, 'comment']
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
