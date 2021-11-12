import { reject } from "core-js/library/es6/promise";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '//',
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
    tokenPostfix: '.som',
    keywords: [
        'self',        
        'nil',
        'primitive',
        'name',
        'true',
        'false',
    ],
    builtins: [        
        'class',
        'objectSize',
        'isNil',
        'notNil',
        'abs',
        'add',
        'addAll',
        'and',
        'asInteger',
        'asString',
        'asSymbol',
        'at',
        'atRandom',
        'average',
        'beginsWith',
        'between',
        'charAt',
        'clear',
        'collect',
        'concatenate',
        'contains',
        'copy',
        'copyFrom',
        'cos',
        'do',
        'doIndexes',
        'downTo',
        'endsWith',
        'exit',
        'first',
        'from',
        'fullGC',
        'get',
        'global',
        'halt',
        'hasGlobal',
        'hashcode',
        'holder',
        'ifNil',
        'ifNotNil',
        'ifTrue',
        'ifFalse',
        'indexForKey',
        'indexOf',
        'inject',
        'inspect',
        'intersection',
        'invokeOn',
        'isDigits',
        'isEmpty',
        'isFalse',
        'isLetters',
        'isTrue',
        'isWhiteSpace',
        'items',
        'last',
        'lastIndexOf',
        'length',
        'load',
        'max',
        'negated',
        'negative',
        'new',
        'not',
        'or',
        'print',
        'println',
        'printNewline',
        'printString',
        'put',
        'putAll',
        'reject',
        'remove',
        'replaceFrom',
        'resolve',
        'round',
        'select',
        'signature',
        'sin',
        'sqrt',
        'substringFrom',
        'sum',
        'system',
        'ticks',
        'time',
        'to',
        'union',
        'value',
        'with',
        'withKey',
    ],
    typeKeywords: [
        'Array',
        'Class',
        'Dictionary',
        'Double',
        'False',
        'HashEntry',
        'Hashtable',
        'Integer',
        'Metaclass',
        'Method',
        'Nil',
        'Object',
        'Pair',
        'Primitive',
        'Set',
        'String',
        'Symbol',
        'System',
        'True',
        'Vector',
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
            [/[,;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*:/, 'keyword'],
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
            [/"/, 'comment', '@comment'],
        ],
        comment: [
            [/[^"]+/, 'comment'],
            [/"/, 'comment', '@pop'],
            [/["]/, 'comment']
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
