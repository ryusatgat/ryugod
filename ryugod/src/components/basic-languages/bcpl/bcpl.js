/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#pragma\\s+region\\b'),
            end: new RegExp('^\\s*#pragma\\s+endregion\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.b',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'ABS',
        'AND',
        'BE',
        'BREAK',
        'BY',
        'C',
        'CASE',
        'DEFAULT',
        'DO',
        'ELSE',
        'ENDCASE',
        'EQV',
        'FALSE',
        'FINISH',
        'FOR',
        'GLOBAL',
        'GOTO',
        'IF',
        'INTO',
        'LET',
        'LOOP',
        'MANIFEST',
        'MOD',
        'NEEDS',
        'NOT',
        'OF',
        'REPEAT',
        'REPEATUNTIL',
        'REPEATWHILE',
        'RESULTS',
        'RETURN',
        'SECTION',
        'SKIP',
        'SLCT',
        'STATIC',
        'SWITCHON',
        'TABLE',
        'TEST',
        'THEN',
        'TO',
        'TRUE',
        'UNLESS',
        'UNTIL',
        'VALOF',
        'VEC',
        'WHILE',
        'XOR',
        'GET',
        'RESULTIS',
    ],
    builtins: [
        'globsize',
        'start',
        'stop',
        'sys',
        'clihook',
        'muldiv',
        'changeco',
        'currco',
        'colist',
        'rootnode',
        'result2',
        'tempval',
        'cis',
        'cos',
        'currentdir',
        'level',
        'longjump',
        'createco',
        'deleteco',
        'callco',
        'cowait',
        'resumeco',
        'initco',
        'startco',
        'globin',
        'getvec',
        'rdargs2',
        'freevec',
        'abort',
        'sysabort',
        'packstring',
        'unpackstring',
        'getword',
        'putword',
        'randno',
        'setseed',
        'sardch',
        'sawrch',
        'rdch',
        'binrdch',
        'unrdch',
        'wrch',
        'binwrch',
        'deplete',
        'readwords',
        'writewords',
        'initio',
        'splitname',
        'findinput',
        'findoutput',
        'findinoutput',
        'findupdate',
        'findstream',
        'pathfindinput',
        'getremipaddr',
        'settimeout',
        'selectinput',
        'selectoutput',
        'input',
        'output',
        'endread',
        'endwrite',
        'endstream',
        'note',
        'point',
        'rewindstream',
        'appendstream',
        'stepstream',
        'setrecordlength',
        'recordpoint',
        'recordnote',
        'get_record',
        'put_record',
        'writeflt',
        'readflt',
        'copyobj',
        'deletefile',
        'renamefile',
        'freeobj',
        'copydir',
        'locatedir',
        'locateobj',
        'createdir',
        'readn',
        'newline',
        'writed',
        'writen',
        'writehex',
        'writeoct',
        'writes',
        'writet',
        'writeu',
        'writez',
        'get_textblib',
        'get_text',
        'writef',
        'sawritef',
        'capitalch',
        'compch',
        'compstring',
        'copystring',
        'string_to_number',
        'str2numb',
        'rdargs',
        'rditem',
        'findarg',
        'loadseg',
        'unloadseg',
        'callseg',
        'datstring',
        'datstamp',
        'dat_to_strings',
        'string_to_dat',
        'setbit',
        'testbit',
        'copy_words',
        'clear_words',
        'copy_bytes',
        'setlogname',
        'getlogname',
        'intflag',
        'newpage',
        'instrcount',
        'setbulk',
        'stackfree',
        'settimeoutact',
        'deleteself',
        'codewrch',
        'randseed',
        'delay',
        'delayuntil',
        'findappend',
        'memoryfree',
        'cli_tallyflag',
        'cli_init',
        'cli_result2',
        'cli_data',
        'cli_commanddir',
        'cli_returncode',
        'cli_commandname',
        'cli_faillevel',
        'cli_prompt',
        'cli_standardinput',
        'cli_currentinput',
        'cli_commandfile',
        'cli_status',
        'cli_preloadlist',
        'cli_currentoutput',
        'cli_defaultstack',
        'cli_standardoutput',
        'cli_module',
        'srchwk',
        'tcb',
        'taskid',
        'createtask',
        'deletetask',
        'changepri',
        'setflags',
        'testflags',
        'hold',
        'unhold',
        'taskwait',
        'qpkt',
        'endtask',
        'sendpkt',
        'returnpkt',
        'consoletask',
        'createdev',
        'deletedev',
        'set_process_name',
        'peercom',
        'writee',
        'setvec',
        'fault',
    ],
   
    operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    encoding: /u|u8|U|L/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // C++ 11 Raw String
            [/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ],
            // The preprocessor checks must be before whitespace as they check /^\s*#/ which
            // otherwise fails to match later after other whitespace has been removed.
            // Inclusion
            [/^\s*#\s*include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directive
            [/^\s*#\s*\w+/, 'keyword.directive'],
            // whitespace
            { include: '@whitespace' },
            // [[ attributes ]].
            [/\[\s*\[/, { token: 'annotation', next: '@annotation' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
            [/\d[\d']*\d(@integersuffix)/, 'number'],
            [/\d(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        raw: [
            [
                /(.*)(\))(?:([^ ()\\\t"]*))(\")/,
                {
                    cases: {
                        '$3==$S2': [
                            'string.raw',
                            'string.raw.end',
                            'string.raw.end',
                            { token: 'string.raw.end', next: '@pop' }
                        ],
                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
                    }
                }
            ],
            [/.*/, 'string.raw']
        ],
        annotation: [
            { include: '@whitespace' },
            [/using|alignas/, 'keyword'],
            [/[a-zA-Z0-9_]+/, 'annotation'],
            [/[,:]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [/\]\s*\]/, { token: 'annotation', next: '@pop' }]
        ],
        include: [
            [
                /(\s*)(<)([^<>]*)(>)/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ],
            [
                /(\s*)(")([^"]*)(")/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ]
        ]
    }
};
