/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: ['//', '\\\\'],
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
            beforeText: new RegExp('^\\s*(?:function|macro|augmentation|union|struct).*?\\s*$'),
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
    defaultToken: '',
    tokenPostfix: '.11l',
    keywords: [
        'C',
        'in',
        'destructor',
        'E',
        'else',
        'F',
        'fn',
        'F.virtual.abstract',
        'F.virtual.abstract',
        'F.virtual.assign',
        'F.virtual.assign',
        'F.virtual.final',
        'F.virtual.final',
        'F.virtual.new',
        'F.virtual.override',
        'I',
        'if',
        'likely',
        'L',
        'L.break',
        'loop.break',
        'L.continue',
        'loop.continue',
        'L.remove_current_element_and_continue',
        'L.was_no_break',
        'loop.was_no_break',
        'loop',
        'L.index',
        'loop.index',
        'L.last_iteration',
        'loop.last_iteration',
        'L.prev',
        'loop.prev',
        'L.next',
        'loop.next',
        'N',
        'null',
        'R',
        'return',
        'S',
        'switch',
        'T',
        'type',
        'T.enum',
        'unlikely',
        'V',
        'var',
        'X',
        'exception',
        'X.catch',
        'X.try',
    ],
    builtins: [
        'Bool',
        'Int',
        'Int8',
        'Byte',
        'Int16',
        'Int32',
        'Int64',
        'Int1',
        'Byte',
        'Int2',
        'Int4',
        'Int8',
        'BigInt',
        'Float',
        'Float32',
        'Float64',
        'Float4',
        'Float8',
        'Char',
        'String',
        'Tuple',
        'Array',
        'Dict',
        'DefaultDict',
        'Set',
        'Deque',
        'File',

        'print',
        'input',
        'assert',
        'exit',
        'sleep',
        'swap',
        'zip',
        'all',
        'any',
        'cart_product',
        'multiloop',
        'multiloop_filtered',
        'sum',
        'product',
        'sorted',
        'min',
        'min',
        'max',
        'max',
        'hex',
        'bin',
        'rotl',
        'rotr',
        ':stdin',
        ':stdout',
        ':stderr',
        ':argv',
        ':start:',
        'os:getenv',
        'os:setenv',
        'os:environ',
        'os:env_path_sep',
        'fs:get_temp_dir',
        'fs:list_dir',
        'fs:walk_dir',
        'fs:is_dir',
        'fs:is_file',
        'fs:is_symlink',
        'fs:file_size',
        'fs:create_dir',
        'fs:create_dirs',
        'fs:remove_file',
        'fs:remove_dir',
        'fs:remove_all',
        'fs:rename',
        'fs:path:sep',
        'fs:path:join',
        'fs:path:dir_name',
        'fs:path:base_name',
        'fs:path:absolute',
        'fs:path:relative',
        'fs:path:split_ext',
        'Time',
        'Time',
        'unix_time',
        'strftime',
        'format',
        'TimeDelta',
        'days',
        'time:today',
        'time:from_unix_time',
        'time:strptime',
        'time:perf_counter',
        're:search',
        're:match',
        're:find_strings',
        're:find_matches',
        're:group',
        're:start',
        're:end',
        'random:seed',
        'random:',
        'random:shuffle',
        'random:choice',
        'minheap:push',
        'maxheap:push',
        'minheap:pop',
        'maxheap:pop',
        'minheap:heapify',
        'maxheap:heapify',
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
            [/^`\w+/, 'type.identifier'],
            [/(@!|&:)(\s+)?[a-zA-Z_]\w*/, 'metatag'],
            [
                /@?[.a-zA-Z_]\w*/,
                {
                    cases: {
                        '@builtins': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^\/\/.*$)/, 'comment'],
            [/(^\\\\.*$)/, 'comment'],
            [/\\[\(\[{’]+/, 'comment', '@comment'],
        ],
        comment: [
            [/[\)\]}’]/, 'comment', '@pop'],
            [/[^\\\(\[{’]+/, 'comment'],
            [/[\\\(\[{’]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, inc   luding those broken across lines with \ (but not without)
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
