/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '?',
    },
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.ec',
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [/.*/, 'identifier'],
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(\?.*$)/, 'comment'],
        ],
    }
};
