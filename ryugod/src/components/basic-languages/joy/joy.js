/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["(*", "*)"]
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
    tokenPostfix: '.joy',
    keywords: [
        'and',
        'at',
        'average',
        'body',
        'boolean',
        'call',
        'chr',
        'cleave',
        'concat',
        'cons',
        'cons2',
        'consd',
        'def',
        'dip',
        'dip2',
        'dip3',
        'dipd',
        'drop',
        'dup',
        'dup2',
        'dupd',
        'elements',
        'false',
        'falsity',
        'fifth',
        'first',
        'firstd',
        'float',
        'fold2',
        'foldr',
        'foldr2',
        'forever',
        'fourth',
        'ifte',
        'include',
        'integer',
        'interleave2',
        'interleave2list',
        'intern',
        'linrec',
        'logical',
        'map',
        'mapr',
        'mapr2',
        'maxint',
        'newstack',
        'not',
        'null',
        'null2',
        'nullary',
        'nullary2',
        'nulld',
        'numerical',
        'of',
        'or',
        'pairlist',
        'pairset',
        'pairstep',
        'pairstring',
        'pop',
        'pop2',
        'popd',
        'pred',
        'repeat',
        'rest',
        'restd',
        'returned',
        'reverse',
        'rollupd',
        'second',
        'secondd',
        'sequand',
        'sequor',
        'sequor',
        'set',
        'set2string',
        'shunt',
        'size',
        'square',
        'step',
        'stepr2',
        'string2set',
        'sum',
        'swap',
        'swapd',
        'swoncat',
        'swons',
        'swons2',
        'swonsd',
        'system',
        'tailrec',
        'third',
        'thirdd',
        'times',
        'true',
        'truth',
        'uncons',
        'uncons2',
        'unconsd',
        'unitlist',
        'unitset',
        'unitstring',
        'unpair',
        'unstack',
        'unswons',
        'unswons2',
        'unswonsd',
        'variance',
        'verbose',
        'while',
        'zip',
    ],
    builtins: [
        'ask',
        'basic-libload',
        'bell',
        'from-to-list',
        'from-to-set',
        'from-to-string',
        'from-to',
        'get',
        'libload',
        'newline',
        'now',
        'put',
        'putch',
        'putchars',
        'putln',
        'putstrings',
        'setautoput',
        'setundeferror',
        'space',
        'space',
        'special-libload',
        'to-lower',
        'to-upper',
        'today',
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
                /[a-zA-Z_][\w-]*/,
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
            [/(#.*$)/, 'comment'],
            [/\(\*/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\(*]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/[\(*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'[a-zA-Z0-9\\]+/, 'string'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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
