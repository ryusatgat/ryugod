/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['注曰', '疏曰', '批曰'],
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
        { open: '「「', close: '」」', notIn: ['string'] },
        { open: "「", close: "」", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '「「', close: '」」' },
        { open: "「", close: "」" }
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
    tokenPostfix: '.wy',
    keywords: [
        '乃行是術曰',
        '若其不然者',
        '乃止是遍',
        '乃歸空無',
        '欲行是術',
        '若其然者',
        '其物如是',
        '乃得矣',
        '恆為是',
        '之術也',
        '必先得',
        '是術曰',
        '之物也',
        '云云',
        '其餘',
        '中之',
        '為是',
        '之長',
        '乃止',
        '若非',
        '或若',
        '乃得',
        '是謂',
        '蓋謂',
        '或云',
        '中有陽乎',
        '所餘幾何',
        '中無陰乎',
        '不等於',
        '不大於',
        '不小於',
        '等於',
        '大於',
        '小於',
        '加',
        '乘',
        '除',
        '變',
        '以',
        '於',
        '減',        
    ],
    builtins: [
        '不知何禍歟',
        '不復存矣',
        '如事不諧',
        '姑妄行此',
        '吾嘗觀',
        '之禍歟',
        '乃作罷',
        '名之曰',
        '書之',
        '以施',
        '之禍',
        '嗚呼',
        '之義',
        '昔之',
        '方悟',
        '是矣',
        '今有',
        '吾有',
        '之書',
        '物之',
        '夫',
        '中',
        '今',
        '取',
        '噫',
        '曰',
        '施',
        '豈',
        '有',
        '者',
        '若',
        '遍',
        '之',
        '充',
        '銜',
        '凡',
        '也',
    ],
    typeKeywords: [
        '元',
        '物',
        '爻',
        '術',
        '言',
        '列',
        '數',
        '陰',
        '陽',
        '其',
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
            [/[。|、]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [
                /[一-龥]+/,
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
            [/((注曰|疏曰|批曰).*$)/, 'comment'],            
        ],
        comment: [
            [/[^注曰疏批]+/, 'comment'],
            [/(」)/, 'comment', '@pop'],
            [/[注曰疏批]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠/, 'number'],
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/」」$/, 'string.escape', '@popall'],
            [/「「/, 'string.escape', '@dblStringBody'],
            [/」$/, 'string.escape', '@popall'],
            [/「/, 'string.escape', '@stringBody'],
        ],
        stringBody: [
            [/[^」]+$/, 'string', '@popall'],
            [/[^」]+/, 'string'],
            [/\\./, 'string'],
            [/」/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^」]+$/, 'string', '@popall'],
            [/[^」]+/, 'string'],
            [/\\./, 'string'],
            [/」」/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
