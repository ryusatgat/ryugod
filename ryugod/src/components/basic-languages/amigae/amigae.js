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
    tokenPostfix: '.e',
    keywords: [
        'PROC',
        'ENDPROC',
        'DEF',
        'AND',
        'OR',
        'BUT',
        'IF',
        'THEN',
        'ELSEIF',
        'ELSE',
        'ENDIF',
        'SELECT',
        'CASE',
        'DEFAULT',
        'ENDSELECT',
        'FOR',
        'STEP',
        'ENDFOR',
        'WHILE',
        'DO',
        'ENDWHILE',
        'REPEAT',
        'UNTIL',
        'RETURN',
        'CONST',
        'ENUM',
        'SET',
        'LONG',
        'PTR',
        'ARRAY',
        'OBJECT',
        'LIST',
        'CHAR',
        'REAL',
        'INT',
        'TO',
        'DEF',
        'OF',
        'OBJECT',
        'ENDOBJECT',
        'VOID',
        'SIZEOF',
        'INC',
        'DEC',
        'INCBIN',
        'JUMP',
        'LOOP',
        'ENDLOOP',
        'HANDLE',
        'EXCEPT',
        'RAISE',
        'OPT',
    ],
    builtins: [
        'String',
        'StrCmp',
        'StrCopy',
        'StrAdd',
        'StrLen',
        'StrMax',
        'RightStr',
        'MidStr',
        'InStr',
        'TrimStr',
        'LowerStr',
        'UpperStr',
        'SetStr',
        'Val',
        'Link',
        'Next',
        'Forward',
        'MapList',
        'ForAll',
        'Exists',
        'TRUE',
        'FALSE',
        'NIL',
        'ALL',
        'GADGETSIZE',
        'OLDFILE',
        'NEWFILE',
        'STRLEN',
        'arg',
        'wbmessage',
        'stdout',
        'conout',
        'stdrast',
        'dosbase',
        'execbase',
        'gfxbase',
        'intuitionbase',
        'WriteF',
        'StringF',
        'Out',
        'Inp',
        'ReadStr',
        'FileLength',
        'SetStdOut',
        'OpenW',
        'CloseW',
        'OpenS',
        'CloseS',
        'Gadget',
        'Mouse',
        'MouseX',
        'MouseY',
        'WaitIMessage',
        'MsgCode',
        'MsgIaddr',
        'MsgQualifier',
        'Plot',
        'Line',
        'Box',
        'Colour',
        'TextF',
        'SetStdRast',
        'SetTopaz',
        'Mul',
        'Not',
        'Eor',
        'Abs',
        'Even',
        'Odd',
        'Mod',
        'Rnd',
        'RndQ',
        'Shl',
        'Shr',
        'Long',
        'PutLong',
        'New',
        'Dispose',
        'DisposeLink',
        'List',
        'CleanUp',
        'CtrlC',
        'FreeStack',
        'KickVersion',
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
            [/[a-zA-Z_]\w*:$/, 'metatag'],
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
            [/\/\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?\$([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?%?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
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
