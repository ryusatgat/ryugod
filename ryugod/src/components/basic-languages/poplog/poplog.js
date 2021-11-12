/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
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
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
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
    tokenPostfix: '.pop',
    keywords: [
        'mod',
        'and',
        'or',
        'not',
        'from',
        'to',
        'in',
        'true',
        'false',
        'if',
        'then',
        'else',
        'endif',
        'unless',
        'endunless',
        'lvars',
        'return',
        'elseif',
        'until',
        'enduntil',
        'for',
        'endfor',
        'do',
        'procedure',
        'while',
        'endwhile',
        'foreach',
        'endforeach',
        'endprocedure',
        'lblock',
        'endlblock',
        'vars',
        'define',
        'enddefine',
        'uses',
        'global',
        'load',
        'dlocal',
        'recordclass',
        'defclass',
        'vectorclass',
        'constant',
        'lconstant',
        'dlvars',
        'slot',
        'instance',
        'endinstance',
        'class',
        'method',
        'mixin',
        'is',
        'rem',
    ],
    builtins: [
        'RULE',
        'REPLACE',
        'WHERE',
        'DEL',
        'POP11',
        'DLOCAL',
        'VARS',
        'DO',
        'CUT',
        'INDATA',
        'NOT_EXISTS',
        'IMPLIES',
        'ALL',
        'FILTER',
        'ADD',
        'TESTADD',
        'ADDALL',
        'ADDIF',
        'ADDUNLESS',
        'SAY',
        'SAYIF',
        'EXPLAIN',
        'STOP',
        'STOPIF',
        'QUIT',
        'QUITIF',
        'PUSH',
        'POP',
        'REPLACE',
        'MODIFY',
        'RMODIFY',
        'NULL',
        'TYPE',
        'SAVE',
        'RESTORE',
        'PUSHRULES',
        'POPRULES',
        'PUSHDATA',
        'POPDATA',
        'SELECT',
        'MAP',
        'DOALL',
        'FAIL',
        'PAUSE',
        'READ',
        'MENU',
        'NEWLIMIT',
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
