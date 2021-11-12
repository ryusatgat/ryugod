/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: 'ã',
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:fn|for|if|else|interface).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
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
    tokenPostfix: '.+',
    keywords: [
        'vars',
        'fns',
        'ops',
        'xfs',
        'si',
        'wa',
        'cx',
        'rl',
        'load',
        'cd',
        'off',
        'mode',
        'cxs',
        'ex',
        'pp',
        'sfs',
        'stop',
        'vers',
        'loadrm',
        'cmds',
        'def',
        'dep',
        'Tf',
        'Sf',
        'Xf',
        'Df',
        'Gf',
        'deps',
        'Ef',
        '_sfs',
        'dbg',
        'excxt',
        'globs',
        'undef',
        'Xfpef',
        'laod',
        'maplim',
        'doErrorStack',
        'oldDepModel',
        'su',
        '+su',
        '#',
        'Ú',
        'Ø',
        '!',
        '~',
        '©',
        'Â',
        'Î',
        'à',
        'è',
    ],
    builtins: [
        '_alldep',
        '_alsf',
        '_atts',
        '_cd',
        '_cfi',
        '_dbg',
        '_def',
        '_dep',
        '_dyld',
        '_ex',
        '_excxt',
        '_exit',
        '_fi',
        '_flat',
        '_fmt',
        '_gcb',
        '_gcd',
        '_get',
        '_gfmtsym',
        '_gpcb',
        '_gsr',
        '_gsv',
        '_hashstat',
        '_index',
        '_index_of',
        '_issf',
        '_items',
        '_load',
        '_loadrm',
        '_locals',
        '_name',
        '_nanfind',
        '_nc',
        '_nl',
        '_ns',
        '_nsr',
        '_scb',
        '_scd',
        '_scfi',
        '_set',
        '_sfi',
        '_sfmt',
        '_spcb',
        '_ss',
        '_ssr',
        '_ssv',
        '_undef',
        '_valence',
        '_wa',
    ],
    typeKeywords: [
        '`busexit',
        '`corelim',
        '`cx',
        '`Df',
        '`dyme',
        '`Ef',
        '`Gf',
        '`language',
        '`loadfile',
        '`majorRelease',
        '`minorRelease',
        '`mode',
        '`phaseOfRelease',
        '`pp',
        '`releaseCode',
        '`rl',
        '`segvexit',
        '`Sf',
        '`si',
        '`stdin',
        '`stop',
        '`Tf',
        '`vers',
        '`Xf',
        '`char',
        '`int',
        '`float',
        '`box',
        '`null',
        '`sym',
        '`func',
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
            [/\$[a-zA-Z_]\w*/, 'metatag'],
            [
                /[`+a-zA-Z_]\w*/,
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
            [/(ã.*$)/, 'comment'],
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
