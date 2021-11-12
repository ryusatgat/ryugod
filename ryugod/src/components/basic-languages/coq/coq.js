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
    tokenPostfix: '.v',
    keywords: [
        'From',
        'Require',
        'Import',
        'Export',
        'Local',
        'Global',
        'Open',
        'Scope',
        'Theorem',
        'Lemma',
        'Remark',
        'Fact',
        'Corollary',
        'Property',
        'Proposition',
        'Goal',
        'Parameters?',
        'Axioms?',
        'Conjectures?',
        'Variables?',
        'Hypothesis',
        'Hypotheses',
        'Program Definition',
        'Program Fixpoint',
        'Program CoFixpoint',
        'Program Function',
        'Function',
        'CoFixpoint',
        'Fixpoint',
        'Definition',
        'Example',
        'Let',
        'CoInductive',
        'Inductive',
        'Hint',
        'Constructors',
        'Resolve',
        'Rewrite',
        'Proof',
        'Ltac',
        'Qed',
        'Defined',
        'Implicit',
        'Set',
        'Arguments',
        'Tactic Notation',
        'Notation',
        'Reserved Notation',
        'Section',
        'Module Type',
        'Module',
        'End',
        'Record',
        'Class',
        'Check',
        'Print',
        'Eval',
        'Quit',
        'Drop',
        'Time',
        'Redirect',
        'Timeout',
        'Fail',
        'admit',
        'Admitted',
        'forall',
        'exists',
        'Type',
        'Set',
        'Prop',
        'try',
        'repeat',
        'progress',
        'set',
        'fresh',
        'solve',
        'now',
        'first',
        'into',
        'with',
        'eqn',
        'by',
        'move',
        'as',
        'using',
        'match',
        'lazymatch',
        'multimatch',
        'fun',
        'with',
        'return',
        'end',
        'let',
        'in',
        'if',
        'then',
        'else',
    ],
    builtins: [
        'intro',
        'intros',
        'induction',
        'destruct',
        'auto',
        'eauto',
        'eassumption',
        'apply',
        'eapply',
        'assumption',
        'constructor',
        'econstructor',
        'reflexivity',
        'inversion',
        'injection',
        'assert',
        'split',
        'omega',
        'fold',
        'unfold',
        'specialize',
        'rewrite',
        'erewrite',
        'change',
        'symmetry',
        'refine',
        'simpl',
        'intuition',
        'firstorder',
        'generalize',
        'idtac',
        'exist',
        'exists',
        'eexists',
        'elim',
        'eelim',
        'rename',
        'subst',
        'congruence',
        'trivial',
        'left',
        'right',
        'pose',
        'discriminate',
        'clear',
        'clearbody',
        'contradict',
        'contradiction',
        'exact',
        'dependent',
        'remember',
        'case',
        'easy',
        'unshelve',
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
