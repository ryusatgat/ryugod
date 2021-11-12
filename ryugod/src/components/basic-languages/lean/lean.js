/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '--',
        blockComment: ["/-", "-/"]
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
    tokenPostfix: '.lean',
    keywords: [
        'abbreviation',
        'alias',
        'axiom',
        'axioms',
        'begin',
        'check',
        'class',
        'classes',
        'coinductive',
        'constant',
        'constants',
        'def',
        'definition',
        'else',
        'end',
        'eval',
        'example',
        'exit',
        'export',
        'exposing',
        'extends',
        'find',
        'help',
        'hiding',
        'if',
        'import',
        'include',
        'inductive',
        'infix',
        'infixl',
        'infixr',
        'instance',
        'instances',
        'lemma',
        'local',
        'namespace',
        'notation',
        'omit',
        'open',
        'parameter',
        'parameters',
        'postfix',
        'precedence',
        'prefix',
        'prelude',
        'print',
        'Prop',
        'raw',
        'reduce',
        'renaming',
        'reserve',
        'restate_axiom',
        'run_cmd',
        'section',
        'set_option',
        'Sort',
        'structure',
        'then',
        'theorem',
        'theory',
        'Type',
        'universe',
        'universes',
        'using',
        'variable',
        'variables',
        'where',
        'with',
    ],
    builtins: [
        'at',
        'by',
        'calc',
        'do',
        'from',
        'have',
        'haveI',
        'in',
        'let',
        'match',
        'obtain',
        'show',
        'suffices',
        'this',
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
            [/#[a-zA-Z_]\w*/, 'metatag'],
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
            [/(--.*$)/, 'comment'],
            [/\/-/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/-]+/, 'comment'],
            [/-\//, 'comment', '@pop'],
            [/[\/-]/, 'comment']
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
