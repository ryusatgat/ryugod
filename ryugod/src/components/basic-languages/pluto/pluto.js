/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '--',
        blockComment: ["--[[", "]]"]
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
            beforeText: new RegExp('^\\s*(?:try|for|if|else|elseif).*?\\s*$'),
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
    tokenPostfix: '.pluto',
    keywords: [
        'and',
        'as',
        'begin',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'default',
        'do',
        'else',
        'elseif',
        'end',
        'enum',
        'export',
        'false',
        'for',
        'function',
        'global',
        'goto',
        'if',
        'in',
        'instanceof',
        'local',
        'new',
        'nil',
        'nodiscard',
        'not',
        'or',
        'pluto_catch',
        'pluto_class',
        'pluto_continue',
        'pluto_enum',
        'pluto_export',
        'pluto_new',
        'pluto_switch',
        'pluto_try',
        'pluto_use',
        'repeat',
        'return',
        'switch',
        'table',
        'then',
        'true',
        'try',
        'until',
        'userdata',
        'while',
    ],
    builtins: [
        'assert',
        'collectgarbage',
        'coroutine',
        'debug',
        'dofile',
        'error',
        'getfenv',
        'getmetatable',
        'huge',
        'io',
        'ipairs',
        'loadfile',
        'loadstring',
        'math',
        'maxinteger',
        'mininteger',
        'module',
        'next',
        'null',
        'os',
        'package',
        'pairs',
        'pcall',
        'pi',
        'print',
        'rawequal',
        'rawget',
        'rawset',
        'require',
        'select',
        'setfenv',
        'setmetatable',
        'string',
        'table',
        'tonumber',
        'tostring',
        'type',
        'unpack',
        'utf8',
        'withnull',
        'withorder',
        'xpcall',
    ],
    typeKeywords: [
        'void',
        'string',
        'bool',
        'boolean',
        'float',
        'int',
        'number',
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
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/--\[\[/, 'comment', '@comment'],
            [/(--.*$)/, 'comment'],
        ],
        comment: [
            [/[^\]-]+/, 'comment'],
            [/\]\]/, 'comment', '@pop'],
            [/[\]-]/, 'comment']
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
