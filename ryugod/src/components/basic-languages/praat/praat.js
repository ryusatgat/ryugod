/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.praat',
    keywords: [
        'and',
        'beginPause',
        'editor',
        'elif',
        'else',
        'elsif',
        'endeditor',
        'endfor',
        'endform',
        'endif',
        'endPause',
        'endproc',
        'endwhile',
        'fi',
        'for',
        'form',
        'from',
        'if',
        'include',
        'minus',
        'not',
        'or',
        'pause',
        'plus',
        'procedure',
        'repeat',
        'select',
        'system',
        'system_nocheck',
        'then',
        'to',
        'until',
        'while',
    ],
    builtins: [
        'abs',
        'arccos',
        'arccosh',
        'arcsin',
        'arcsinh',
        'arctan',
        'arctan2',
        'arctanh',
        'barkToHertz',
        'besselI',
        'besselK',
        'beta',
        'binomialP',
        'binomialQ',
        'ceiling',
        'chiSquareP',
        'chiSquareQ',
        'cos',
        'cosh',
        'date$',
        'differenceLimensToPhon',
        'endsWith',
        'erb',
        'erbToHertz',
        'erf',
        'erfc',
        'exp',
        'fisherP',
        'fisherQ',
        'fixed$',
        'floor',
        'gaussP',
        'gaussQ',
        'hertzToBark',
        'hertzToErb',
        'hertzToMel',
        'hertzToSemitones',
        'imax',
        'imin',
        'index',
        'index_regex',
        'invBinomialP',
        'invBinomialQ',
        'invChiSquareQ',
        'invFisherQ',
        'invGaussQ',
        'invStudentQ',
        'left$',
        'length',
        'ln',
        'lnGamma',
        'log10',
        'log2',
        'max',
        'melToHertz',
        'mid$',
        'min',
        'number',
        'percent$',
        'phonToDifferenceLimens',
        'random_initializeSafelyAndUnpredictably',
        'random_initializeWithSeedUnsafelyButPredictably',
        'randomGamma',
        'randomGauss',
        'randomInteger',
        'randomPoisson',
        'randomUniform',
        'replace_regex$',
        'replace$',
        'right$',
        'rindex',
        'rindex_regex',
        'round',
        'semitonesToHertz',
        'sigmoid',
        'sin',
        'sinc',
        'sincpi',
        'sinh',
        'sqrt',
        'startsWith',
        'string$',
        'studentP',
        'studentQ',
        'tan',
        'tanh',
        'unicode',
        'unicode$',
        'appendInfo',
        'appendInfoLine',
        'clearinfo',
        'Draw',
        'echo',
        'newline$',
        'Read',
        'tab$',
        'writeInfo', 
        'writeInfoLine', 
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
            [/[a-zA-Z_]\w*\$/, 'variable'],
            [
                /[a-zA-Z_]\w*\$?/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'keyword.flow',
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
