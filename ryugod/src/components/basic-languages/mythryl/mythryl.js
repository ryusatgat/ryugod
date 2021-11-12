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
        { open: '`', close: '`', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '`', close: '`' },
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
    tokenPostfix: '.mythryl',
    keywords: [
        'abstype',
        'also',
        'and',
        'api',
        'as',
        'case',
        'class',
        'elif',
        'else',
        'end',
        'eqtype',
        'esac',
        'except',
        'exception',
        'fi',
        'field',
        'fn',
        'for',
        'fprintf',
        'fun',
        'generic',
        'generic_api',
        'herein',
        'if',
        'include',
        'infix',
        'infixr',
        'lazy',
        'method',
        'my',
        'nonfix',
        'op',
        'or',
        'overload',
        'package',
        'print',
        'printf',
        'raise',
        'rec',
        'sharing',
        'sprintf',
        'stipulate',
        'then',
        'type',
        'val',
        'where',
        'with',
        'withtype',
    ],
    builtins: [
        'Apptask',
        'Array',
        'Bool',
        'Char',
        'Controller',
        'Element',
        'Exception',
        'Float',
        'Input_Stream',
        'Int',
        'List',
        'Log_To',
        'Logtree_Node',
        'Mailcaster',
        'Maildrop',
        'Mailop',
        'Mailqueue',
        'Mailslot',
        'Make_Thread_Args',
        'Microthread',
        'Null_Or',
        'Oneshot_Maildrop',
        'Order',
        'Output_Stream',
        'Readqueue',
        'Ref',
        'Rw_Vector',
        'String',
        'Substring',
        'Unt',
        'Vector',
        'Void',
        'When',
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
            [/(^#!.*$)/, 'metatag'],
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
            [/"/, 'string.escape', '@dblStringBody'],
            [/`$/, 'string.escape', '@popall'],
            [/`/, 'string.escape', '@exStringBody']
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
        ],
        exStringBody: [
            [/[^\\`]+$/, 'string', '@popall'],
            [/[^\\`]+/, 'string'],
            [/\\./, 'string'],
            [/`/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
