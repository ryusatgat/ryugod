/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ['//', '#'],
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
/*
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:function|class|for|if|elseif|else|try|finally|catch|switch|while).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
    ],
*/
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
    tokenPostfix: '.nut',
    keywords: [
        'base',
        'break',
        'case',
        'catch',        
        'clone',
        'continue',        
        'default',
        'delete',
        'else',                
        'extends',
        'for',
        'foreach',        
        'if',
        'in',        
        'null',
        'resume',
        'return',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'while',
        'yield',
        'instanceof',
        'true',
        'false',        
    ],
    builtins:[
        '__argv',
        '__getTable',
        '__setTable',
        '_cloned',
        '_get',
        '_set',
        '_tostring',
        '_typeof',
        'begin',
        'blob',
        'charsize',
        'constructor',
        'disabled',
        'enabled',
        'end',
        'file',
        'floatsize',
        'FLT_MAX',
        'foo',
        'func',
        'gc',
        'idle',
        'intsize',
        'keepref',
        'line',
        'locals',
        'persist',
        'PI',
        'print',
        'quit',
        'RAND_MAX',
        'regexp',
        'require_optional',
        'require',
        'running',
        'SQOBJ_FLAG_IMMUTABLE',
        'src',
        'std_blob',
        'std_file',
        'std_stream',
        'stderr',
        'stdin',
        'stdout',
        'stream',
        'suspended',
        'version',
        'weakref',
    ],
    typeKeywords: [
        'static',
        'constructor',
        'local',
        'class',
        'const',
        'enum',
        'function',
        '__LINE__',
        '__FILE__',
        '__name__',
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
            [/@[a-zA-Z_]\w*/, 'annotation'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@typeKeywords': 'keyword.flow',
                        //'@builtins': 'annotation',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^\/\/.*$)/, 'comment'],
            [/(^#.*$)/, 'comment'],
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
