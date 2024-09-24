/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
    tokenPostfix: '.qi',
    keywords: [
        '变量',
        '切换',
        '案例',
        '预设',
        '功能',
        '返回',
        '如果',
        '否则',
        '继续',
        '打断',
        '对于',
        '不',
        '于',
        '位',
        '例',
        '假',
        '切',
        '则',
        '功',
        '变',
        '右',
        '否',
        '和',
        '回',
        '大',
        '如',
        '对',
        '小',
        '左',
        '异',
        '或',
        '打',
        '换',
        '断',
        '果',
        '案',
        '真',
        '移',
        '空',
        '等',
        '类',
        '继',
        '续',
        '而',
        '能',
        '设',
        '超',
        '返',
        '这',
        '量',
        '预',
        '修剪',
        '修剪始',
        '修剪端',
        '删',
        '大写',
        '子串',
        '小写',
        '弹',
        '拆分',
        '指数',
        '排序',
        '推',
        '插',
        '替换',
        '计数',
        '过滤',
        '长度',
    ],
    builtins: [
        '打印',
        '打印行',
        '扫描',
        '时钟',
        '型',
        '系统',
        '平方根',
        '次方',
        '最小',
        '最大',
        '四舍五入',
        '数到串',
        '对数',
        '正弦',
        '余弦',
        '正切',
        '反正弦',
        '反余弦',
        '反正切',
        '上限',
        '下限',
        '随机',
        '数字',
        '串到数',
    ],
    typeKeywords: [
        '圆周率',
        '欧拉数',
        '无穷大',
        '不数字',
        '最大值',
        '最小值',
        '最大安全',
        '最小安全',
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
                /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFFa-zA-Z_][\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\w]*/,
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
