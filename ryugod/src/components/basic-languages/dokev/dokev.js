/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["'''", "'''"]
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
            beforeText: new RegExp('^\\s*(?:함수는|필요해).*?:\\s*$'),
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
    tokenPostfix: '.dkv',
    keywords: [
        '은',
        '는',
        '이',
        '가',
        '인',
        '그리고',
        '또한',
        '또는',
        '반대로',
        '거꾸로',
        '참',
        '거짓',
        '참이려면',
        '거짓이라면',
        '참인',
        '진실',
        '진짜로',
        '정말',
        '정말로',
        '근데',
        '허위',
        '동안',
        '인동안',
        '넣고',
        '빠져나오자',
        '빠져나와줘',
        '빠져',
        '나와',
        '나가',
        '모두',
        '그게',
        '아니',
        '아니면',
        '아니라면',
        '만약',
        '만약에',
        '혹여나',
        '혹시',
        '저게',
        '혹시나',
        '이라면',
        '라면',
        '이려면',
        '아니고',
        '모듈을',
        '모듈이',
        '라이브러리가',
        '라이브러리를',
        '사용할래',
        '라고',
        '을',
        '를',
        '형식문자',
        '문자형식',
        '형식',
        '포맷',
        '야',
        '이야',
        '증가',
        '감소',
        '증가해줘',
        '감소해줘',
        '더하기',
        '곱하기',
        '빼기',
        '나누기',
        '나머지',
        '머지',
        '함수는',
        '필요해',
        '사용해',
        '이랑',
        '랑',
    ],
    builtins: [
        '입력받아줘',
        '입력받아',
        '말해줘',
        '출력해줘',
        '출력해',
        '보여줘',
        '거짓형으로',
        '실수형으로',
        '문자열로',
        '정수형으로',
        '정수형으로',
        '운영체계',
        '현재경로',
        '폴더변경',
        '경로변경',
        '경로생성',
        '파일목록',
        '파일탐색',
        '명령',
        '파일삭제',
        '경로삭제',
        '이름변경',
        '상태',
        '경로여부',
        '파일여부',
        '절대경로',
        '경로명',
        '파일명',
        '파일크기',
	'랜덤',
	'난수',
        '랜덤정수',
        '난수정수',
        '랜덤실수',
        '난수실수',
        '랜덤범위정수',
        '난수범위정수',
        '범위정수',
        '여럿값선택',
        '선택',
        '섞기',
        '반환해',
        '반환해줘',
        '돌려줘',
        '던져줘',
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
                /([a-z_$]|[^\x00-\x7F])([\w$]|[^\x00-\x7F])*/,
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
            [/(^#.*$)/, 'comment'],
            [/'''/, 'string', '@endDocString'],
            [/"""/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/[^']+/, 'string'],
            [/\\'/, 'string'],
            [/'''/, 'string', '@popall'],
            [/'/, 'string']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string', '@popall'],
            [/"/, 'string']
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
