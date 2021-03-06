/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '%',
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
    tokenPostfix: '.minizinc',
    keywords: [
        'ann',
        'annotation',
        'any',
        'array',
        'assert',
        'bool',
        'case',
        'constraint',
        'diff',
        'div',
        'else',
        'elseif',
        'endif',
        'enum',
        'float',
        'function',
        'if',
        'in',
        'include',
        'int',
        'intersect',
        'let',
        'list',
        'maximize',
        'minimize',
        'mod',
        'not',
        'of',
        'op',
        'output',
        'par',
        'predicate',
        'record',
        'satisfy',
        'set',
        'solve',
        'string',
        'subset',
        'superset',
        'symdiff',
        'test',
        'then',
        'tuple',
        'type',
        'union',
        'var',
        'where',
        'xor',
    ],
    builtins: [
        'abs',
        'all_different',
        'all_disjoint',
        'all_equal',
        'alldifferent_except',
        'alldifferent_except_0',
        'alternative',
        'among',
        'arg_max',
        'arg_min',
        'arg_sort',
        'at_most1',
        'bin_packing',
        'bin_packing_capa',
        'bin_packing_load',
        'bool2int',
        'bounded_dpath',
        'bounded_path',
        'card',
        'ceil',
        'circuit',
        'concat',
        'connected',
        'cos',
        'cost_mdd',
        'cost_regular',
        'count',
        'count_eq',
        'count_geq',
        'count_gt',
        'count_leq',
        'count_lt',
        'count_neq',
        'cumulative',
        'd_weighted_spanning_tree',
        'dag',
        'dconnected',
        'decreasing',
        'diffn',
        'diffn_k',
        'diffn_nonstrict',
        'diffn_nonstrict_k',
        'disjoint',
        'disjunctive',
        'disjunctive_strict',
        'distribute',
        'dpath',
        'dreachable',
        'dsteiner',
        'dtree',
        'exists',
        'exp',
        'floor',
        'forall',
        'geost',
        'geost_bb',
        'geost_nonoverlap_k',
        'geost_smallest_bb',
        'global_cardinality',
        'global_cardinality_closed',
        'global_cardinality_low_up',
        'global_cardinality_low_up_closed',
        'increasing',
        'int_set_channel',
        'int2float',
        'inverse',
        'inverse_in_range',
        'inverse_set',
        'join',
        'knapsack',
        'lex_chain',
        'lex_chain_greater',
        'lex_chain_greatereq',
        'lex_chain_greatereq_orbitope',
        'lex_chain_less',
        'lex_chain_lesseq',
        'lex_chain_lesseq_orbitope',
        'lex_greater',
        'lex_greatereq',
        'lex_less',
        'lex_lesseq',
        'lex2',
        'lex2_strict',
        'link_set_to_booleans',
        'ln',
        'log',
        'max',
        'maximum',
        'maximum_arg',
        'mdd',
        'mdd_nondet',
        'member',
        'min',
        'minimum',
        'minimum_arg',
        'network_flow',
        'network_flow_cost',
        'neural_net',
        'nvalue',
        'partition_set',
        'path',
        'piecewise_linear',
        'pow',
        'product',
        'range',
        'reachable',
        'regular',
        'regular_nfa',
        'roots',
        'round',
        'seq_precede_chain',
        'set2array',
        'show',
        'show_float',
        'show_int',
        'sin',
        'sliding_sum',
        'sort',
        'span',
        'sqrt',
        'steiner',
        'strict_lex2',
        'strictly_decreasing',
        'strictly_increasing',
        'subcircuit',
        'subgraph',
        'sum',
        'sum_pred',
        'sum_set',
        'symmetric_all_different',
        'table',
        'tree',
        'value_precede',
        'value_precede_chain',
        'weighted_spanning_tree',
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
            [/(%.*$)/, 'comment'],
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
