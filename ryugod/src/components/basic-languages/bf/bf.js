/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
    ],
    surroundingPairs: [
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
    tokenPostfix: '.bf',
    keywords: [
        '>',
        '<',
        '+',
        '-',
    ],
    builtins: [
        '[',
        ']',
    ],
    typeKeywords: [
        '.',
        ',',
    ],
    brackets: [
        { open: '[', close: ']', token: 'delimiter.bracket' },
    ],
    tokenizer: {
        root: [
            [
                /./,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'comment'
                    }
                }
            ]
        ],
    }
};
