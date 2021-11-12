/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ';;',
        blockComment: ["\\*", "*\\"]
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
    tokenPostfix: '.shen',
    keywords: [
        'abort',
        'adjoin',
        'and',
        'append',
        'apply',
        'arity',
        'assoc',
        'assoc-type',
        'average',
        'bind',
        'boolean?',
        'bound?',
        'byte->string',
        'call',
        'cd',
        'character?',
        'compile',
        'complex?',
        'concat',
        'congruent?',
        'cons',
        'cons?',
        'core',
        'cut',
        'debug',
        'declare',
        'define',
        'delete-file',
        'destroy',
        'difference',
        'do',
        'dump',
        'echo',
        'element?',
        'empty?',
        'error',
        'eval',
        'explode',
        'fail',
        'fix',
        'float?',
        'floor',
        'format',
        'freeze',
        'fst',
        'fwhen',
        'gensym',
        'get',
        'get-array',
        'get-prop',
        'hash',
        'hdv',
        'head',
        'identical',
        'if',
        'if-with-checking',
        'if-without-checking',
        'include',
        'include-all-but',
        'inferences',
        'input',
        'input+',
        'integer?',
        'interror',
        'intersection',
        'intmake-string',
        'intoutput',
        'lambda',
        'length',
        'let',
        'limit',
        'lineread',
        'list',
        'load',
        'macroexpand',
        'make-string',
        'map',
        'mapcan',
        'maxinferences',
        'mod',
        'newsym',
        'newvar',
        'nl',
        'not',
        'nth',
        'number?',
        'occurences',
        'occurrences',
        'occurs-check',
        'opaque',
        'or',
        'output',
        'preclude',
        'preclude-all-but',
        'print',
        'profile',
        'profile-results',
        'ps',
        'put',
        'put-array',
        'put-prop',
        'quit',
        'random',
        'rational?',
        'read',
        'read-char',
        'read-chars-as-stringlist',
        'read-file',
        'read-file-as-charlist',
        'read-file-as-string',
        'real?',
        'remove',
        'return',
        'reverse',
        'round',
        'save',
        'snd',
        'specialise',
        'speed',
        'spy',
        'sqrt',
        'step',
        'stinput',
        'string?',
        'strong-warning',
        'subst',
        'sugar',
        'sugar-list',
        'sum',
        'symbol?',
        'systemf',
        'tail',
        'tc',
        'tc?',
        'thaw',
        'time',
        'tlv',
        'track',
        'transparent',
        'tuple?',
        'type',
        'unassoc-type',
        'undebug',
        'unify',
        'unify!',
        'union',
        'unprofile',
        'unspecialise',
        'unsugar',
        'untrack',
        'value',
        'variable?',
        'vector',
        'vector->',
        'vector?',
        'version',
        'warn',
        'write-to-file',
        'y-or-n?',
    ],
    builtins: [
        'pr',
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
            [/@[a-zA-Z_]/, 'tag'],
            [
                /[<a-zA-Z_][\w>-]*[?!]?/,
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
            [/(;;.*$)/, 'comment'],
            [/\\\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\\*]+/, 'comment'],
            [/\*\\/, 'comment', '@pop'],
            [/[\\*]/, 'comment']
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
