/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:module|initial|begin|if|else).*?\\s*$'),
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
    defaultToken: '',
    tokenPostfix: '.v',
    keywords: [
        'always',
        'end',
        'ifnone',
        'or',
        'rpmos',
        'tranif1',
        'and',
        'endcase',
        'initial',
        'output',
        'rtran',
        'tri',
        'assign',
        'endmodule',
        'inout',
        'parameter',
        'rtranif0',
        'tri0',
        'begin',
        'endfunction',
        'input',
        'pmos',
        'rtranif1',
        'tri1',
        'buf',
        'endprimitive',
        'integer',
        'posedge',
        'scalared',
        'triand',
        'bufif0',
        'endspecify',
        'join',
        'primitive',
        'small',
        'trior',
        'bufif1',
        'endtable',
        'large',
        'pull0',
        'specify',
        'trireg',
        'case',
        'endtask',
        'macromodule',
        'pull1',
        'specparam',
        'vectored',
        'casex',
        'event',
        'medium',
        'pullup',
        'strong0',
        'wait',
        'casez',
        'for',
        'module',
        'pulldown',
        'strong1',
        'wand',
        'cmos',
        'force',
        'nand',
        'rcmos',
        'supply0',
        'weak0',
        'deassign',
        'forever',
        'negedge',
        'real',
        'supply1',
        'weak1',
        'default',
        'for',
        'nmos',
        'realtime',
        'table',
        'while',
        'defparam',
        'function',
        'nor',
        'reg',
        'task',
        'wire',
        'disable',
        'highz0',
        'not',
        'release',
        'time',
        'wor',
        'edge',
        'highz1',
        'notif0',
        'repeat',
        'tran',
        'xnor',
        'else',
        'if',
        'notif1',
        'rnmos',
        'tranif0',
        'xor',
    ],
    systemvars: [
        '$display',
        '$strobe',
        '$monitor',
        '$displayb',
        '$strobeh',
        '$monitoro',
        '$time',
        '$stime',
        '$realtime',
        '$reset',
        '$stop',
        '$finish',
        '$scope',
        '$showscope',
        '$random',
        '$dumpfile',
        '$dumpvars',
        '$dumpon',
        '$dumpoff',
        '$dumpal'
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
            [/^`\w+/, 'type.identifier'],
            [
                /\$?[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@systemvars': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
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
