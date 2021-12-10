/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {        
    },
    brackets: [
    ],
    autoClosingPairs: [
    ],
    surroundingPairs: [
    ],
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.ws',
    keywords: [
        ' '
    ],
    builtins: [
        '\t'
    ],
    typeKeywords: [
        '\n'
    ],
    brackets: [
    ],
    tokenizer: {
        root: [
            [
                /.*/,
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
