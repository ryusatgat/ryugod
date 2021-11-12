/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
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
            beforeText: new RegExp('^\\s*(?:function|do|for|if|else|elif|until|while).*?\\s*$'),
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
    tokenPostfix: '.g',
    keywords: [
        'Assert',
        'Info',
        'IsBound',
        'TryNextMethod',
        'Unbind',
        'and',
        'atomic',
        'break',
        'continue',
        'do',
        'elif',
        'else',
        'end',
        'false',
        'fi',
        'for',
        'function',
        'if',
        'in',
        'local',
        'mod',
        'not',
        'od',
        'or',
        'quit',
        'readonly',
        'readwrite',
        'rec',
        'repeat',
        'return',
        'then',
        'true',
        'until',
        'while',
    ],
    builtins: [
        'BIND_GLOBAL',
        'BindGlobal',
        'DeclareAttribute',
        'DeclareCategory',
        'DeclareCategoryCollections',
        'DeclareCategoryFamily',
        'DeclareFilter',
        'DeclareGlobalFunction',
        'DeclareGlobalVariable',
        'DeclareInfoClass',
        'DeclareOperation',
        'DeclareProperty',
        'DeclareRepresentation',
        'DeclareSynonym',
        'InstallGlobalFunction',
        'InstallMethod',
        'InstallOtherMethod',
        'InstallTrueMethod',
        'InstallValue',
        'MakeAttribute',
        'MakeGlobalFunction',
        'MakeGlobalVariable',
        'MakeOperation',
        'MakeProperty',
        'NewFamily',
        'NewMethod',
        'NewType',
        'Objectify',
        'ObjectifyWithAttributes',

        'CloseStream',
        'Display',
        'DownEnv',
        'Edit',
        'Error',
        'ErrorCount',
        'ErrorNoReturn',
        'Exec',
        'FileDescriptorOfStream',
        'FORCE_QUIT_GAP',
        'GAP_EXIT_CODE',
        'InputFromUser',
        'InputLogTo',
        'InputTextFile',
        'InputTextString',
        'InputTextUser',
        'InstallAtExit',
        'IsClosedStream',
        'IsEndOfStream',
        'IsInputStream',
        'IsInputTextNone',
        'IsInputTextStream',
        'IsOutputStream',
        'IsOutputTextNone',
        'IsStream',
        'LogInputTo',
        'LogTo',
        'OnBreakMessage',
        'OutputLogTo',
        'OutputTextFile',
        'OutputTextString',
        'OutputTextUser',
        'PositionStream',
        'Print',
        'PrintCSV',
        'PrintFormattingStatus',
        'PrintObj',
        'PrintTo',
        'Profile',
        'QUIT_GAP',
        'QUIT',
        'QUITTING',
        'Read',
        'ReadAll',
        'ReadAsFunction',
        'ReadByte',
        'ReadCommandLineHistory',
        'ReadCSV',
        'ReadLib',
        'ReadLine',
        'RewindStream',
        'Runtime',
        'SaveCommandLineHistory',
        'SaveOnExitFile',
        'SeekPositionStream',
        'SetNameObject',
        'SetPrintFormattingStatus',
        'SizeScreen',
        'StreamsFamily',
        'TeachingMode',
        'UNIXSelect',
        'UpEnv',
        'View',
        'ViewObj',
        'Where',
        'WhereWithVars',
        'WriteByte',
        'WriteLine',


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
