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
    defaultToken: '',
    tokenPostfix: '.slang',
    keywords: [
        'and',
        'andelse',
        'break',
        'case',
        'catch',
        'continue',
        'define',
        'do',
        'else',
        'ERROR_BLOCK',
        'exch',
        'EXIT_BLOCK',
        'finally',
        '_for',
        'for',
        'foreach',
        'forever',
        '!if',
        'if',
        'ifnot',
        'loop',
        'mod',
        'not',
        'or',
        'orelse',
        'pop',
        'private',
        'public',
        'return',
        'shl',
        'shr',
        'static',
        'struct',
        'switch',
        '__tmp',
        'then',
        'throw',
        'try',
        'typedef',
        'USER_BLOCK0',
        'USER_BLOCK1',
        'USER_BLOCK2',
        'USER_BLOCK3',
        'USER_BLOCK4',
        'using',
        'variable',
        'while',
        'xor',
        'import',
        'require',
    ],
    builtins: [
        'fopen',
        'fclose',
        'fgets',
        'fputs',
        'fprintf',
        'fwrite',
        'fread',
        'fread_bytes',
        'feof',
        'ferror',
        'clearerr',
        'fflush',
        'ftell',
        'fseek',
        'fgetslines',
        'message',
        'Char_Type',
        'UChar_Type',
        'Short_Type',
        'UShort_Type',
        'Integer_Type',
        'UInteger_Type',
        'Long_Type',
        'ULong_Type',
        'LLong_Type',
        'ULLong_Type',
        'Float_Type',
        'Double_Type',
        'Complex_Type',
        'String_Type',
        'BString_Type',
        'Struct_Type',
        'Ref_Type',
        'Null_Type',
        'Array_Type',
        'Assoc_Type',
        'List_Type',
        'DataType_Type',
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
            [/[A-Z]\w+Error/, 'metatag'],
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
            [/(%.*$)/, 'comment'],
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
