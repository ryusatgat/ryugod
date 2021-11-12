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
    tokenPostfix: '.ss',
    keywords: [
        'object',
        'state',
        'fun',
        'return',
        'this',
        'if',
        'else',
        'while',
        'for',
        'foreach',
        'in',
        'break',
        'continue',
        'typeof',
        'public',
        'using',
        'do',
        'switch',
        'case',
        'default',
        'const',
        'assert',
        'wait',
        'static',
        'super',
        'of',
        'is',
        'caller',
        'readonly',
        'timeout',
        'annotation',
        'emoticon',
    ],
    builtins: [
        'Console',
        'print',
        'write',
        'readline',
        'Boolean',
        'valueOf',
        'toString',
        'equals',
        'length',
        'get',
        'set',
        'push',
        'pop',
        'shift',
        'unshift',
        'clear',
        'indexOf',
        'sort',
        'reverse',
        'shuffle',
        'iterator',
        'Math',
        'pi',
        'epsilon',
        'infinity',
        'NaN',
        'sqrt',
        'pow',
        'exp',
        'log',
        'log10',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'atan2',
        'deg2rad',
        'rad2deg',
        'random',
        'floor',
        'ceil',
        'round',
        'mod',
        'sign',
        'abs',
        'min',
        'max',
        'clamp',
        'approximately',
        'lerp',
        'smoothstep',
        'lerpAngle',
        'deltaAngle',
        'valueOf',
        'substr',
        'concat',
        'replace',
        'toLowerCase',
        'toUpperCase',
        'isNullOrEmpty',
        'delete',
        'has',
        'keys',
        'isFinite',
        'isNaN',
        'isInteger',
        'parent',
        '__name',
        '__active',
        '__functions',
        '__timespent',
        '__file',
        '__children',
        '__childCount',
        'spawn',
        'destroy',
        'child',
        'children',
        'childWithTag',
        'childrenWithTag',
        'sibling',
        'findObject',
        'findObjects',
        'findObjectWithTag',
        'findObjectsWithTag',
        'hasFunction',
        'hasTag',
        '__invoke',
        '__arity',
        'Application',
        'exit',
        'crash',
        'destroy',
        'Date',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'weekday',
        'unixtime',
        'timezoneOffset',
        'hasNext',
        'next',
    ],
    typeKeywords: [
        'true',
        'false',
        'null',        
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
            [/(\/\/.*$)/, 'comment'],
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
