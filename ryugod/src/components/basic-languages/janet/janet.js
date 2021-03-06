/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#'
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
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ]
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.janet',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: [
        'abs',
        'abstract',
        'accept',
        'accept-loop',
        'accumulate',
        'accumulate2',
        'acos',
        'acosh',
        'add-paths',
        'address',
        'all',
        'all-bindings',
        'all-dynamics',
        'and',
        'any',
        'apply',
        'arch',
        'arg-stack',
        'array',
        'as',
        'ascii-lower',
        'ascii-upper',
        'asin',
        'asinh',
        'asm',
        'assert',
        'atan',
        'atan2',
        'atanh',
        'bad-compile',
        'bad-parse',
        'band',
        'bit',
        'bit-clear',
        'bit-set',
        'bit-toggle',
        'blit',
        'blshift',
        'bnot',
        'boolean',
        'bor',
        'brackets',
        'break',
        'brshift',
        'brushift',
        'buffer',
        'build',
        'bxor',
        'byte',
        'bytes',
        'cache',
        'call',
        'can-resume',
        'cancel',
        'capacity',
        'case',
        'cbrt',
        'cd',
        'ceil',
        'cfunction',
        'chan',
        'check-set',
        'chmod',
        'chr',
        'chunk',
        'clear',
        'cli-main',
        'clock',
        'clone',
        'close',
        'cmp',
        'comment',
        'comp',
        'compare',
        'compif',
        'compile',
        'complement',
        'comptime',
        'compwhen',
        'concat',
        'cond',
        'config-bits',
        'connect',
        'consume',
        'copy-bytes',
        'coro',
        'cos',
        'cosh',
        'count',
        'cryptorand',
        'curenv',
        'current',
        'cwd',
        'date',
        'deadline',
        'debug',
        'debugger-env',
        'dec',
        'deep-not',
        'deep',
        'def',
        'default',
        'default-peg-grammar',
        'defer',
        'defglobal',
        'defmacro',
        'defn',
        'describe',
        'dictionary',
        'dir',
        'disasm',
        'distinct',
        'do',
        'doc',
        'doc-format',
        'dofile',
        'drop',
        'drop-until',
        'drop-while',
        'dyn',
        'e',
        'each',
        'eachk',
        'eachp',
        'eachy',
        'edefer',
        'eflush',
        'empty',
        'ensure',
        'env-lookup',
        'environ',
        'eof',
        'eprin',
        'eprinf',
        'eprint',
        'eprintf',
        'erf',
        'erfc',
        'error',
        'errorf',
        'ev',
        'eval',
        'eval-string',
        'even',
        'every',
        'execute',
        'exit',
        'exp',
        'exp2',
        'expand-path',
        'expm1',
        'extreme',
        'false',
        'fbreak',
        'fiber',
        'file',
        'fill',
        'filter',
        'find',
        'find-all',
        'find-index',
        'first',
        'flatten',
        'flatten-into',
        'floor',
        'flush',
        'fn',
        'for',
        'forever',
        'format',
        'forv',
        'freeze',
        'frequencies',
        'from-bytes',
        'full',
        'function',
        'gamma',
        'gccollect',
        'gcinterval',
        'gcsetinterval',
        'generate',
        'gensym',
        'get',
        'get-in',
        'getenv',
        'getline',
        'getproto',
        'give',
        'go',
        'has-more',
        'has-prefix',
        'has-suffix',
        'hash',
        'hypot',
        'idempotent',
        'identity',
        'if',
        'if-let',
        'if-not',
        'if-with',
        'import',
        'in',
        'inc',
        'index-of',
        'indexed',
        'inf',
        'insert',
        'int',
        'int-max',
        'int-min',
        'int32-max',
        'int32-min',
        'interleave',
        'interpose',
        'invert',
        'janet',
        'join',
        'juxt',
        'juxt\*',
        'keep',
        'keys',
        'keyword',
        'kvs',
        'label',
        'last',
        'length',
        'let',
        'lineage',
        'link',
        'listen',
        'load-image',
        'load-image-dict',
        'loaders',
        'loading',
        'log',
        'log10',
        'log1p',
        'log2',
        'loop',
        'lstat',
        'macex',
        'macex1',
        'make-env',
        'make-image',
        'make-image-dict',
        'map',
        'mapcat',
        'marshal',
        'match',
        'math',
        'max',
        'maxstack',
        'mean',
        'merge',
        'merge-into',
        'merge-module',
        'min',
        'mkdir',
        'mktime',
        'mod',
        'module',
        'nan',
        'nat',
        'native',
        'neg',
        'net',
        'new',
        'new-filled',
        'next',
        'nil',
        'not',
        'number',
        'odd',
        'one',
        'open',
        'or',
        'os',
        'pairs',
        'parse',
        'parser',
        'partial',
        'partition',
        'paths',
        'peek',
        'peg',
        'perm-int',
        'perm-string',
        'pi',
        'pipe',
        'pop',
        'popen',
        'popn',
        'pos',
        'postwalk',
        'pow',
        'pp',
        'prewalk',
        'prin',
        'prinf',
        'print',
        'printf',
        'proc-kill',
        'proc-wait',
        'produce',
        'product',
        'prompt',
        'propagate',
        'properties',
        'protect',
        'push',
        'push-byte',
        'push-string',
        'push-word',
        'put',
        'put-in',
        'quasiquote',
        'quit',
        'quote',
        'random',
        'range',
        'rawget',
        'read',
        'readlink',
        'realpath',
        'receive',
        'recv-from',
        'reduce',
        'reduce2',
        'remove',
        'rename',
        'repeat',
        'repl',
        'replace',
        'replace-all',
        'require',
        'resume',
        'return',
        'reverse',
        'rm',
        'rmdir',
        'rng',
        'rng-buffer',
        'rng-int',
        'rng-uniform',
        'root',
        'root-env',
        'round',
        'rselect',
        'run-context',
        's64',
        'scan-number',
        'seedrandom',
        'seek',
        'select',
        'send',
        'send-to',
        'seq',
        'server',
        'set',
        'setdyn',
        'setenv',
        'setmap',
        'setmaxstack',
        'setproto',
        'shell',
        'short-fn',
        'signal',
        'sin',
        'sinh',
        'sleep',
        'slice',
        'slurp',
        'some',
        'sort',
        'sort-by',
        'sorted',
        'sorted-by',
        'sourcemap',
        'spawn',
        'spit',
        'splice',
        'split',
        'sqrt',
        'stack',
        'stacktrace',
        'stat',
        'state',
        'status',
        'stderr',
        'stdin',
        'stdout',
        'step',
        'string',
        'struct',
        'sum',
        'swap-bytes',
        'symbol',
        'symlink',
        'table',
        'take',
        'take-until',
        'take-while',
        'tan',
        'tanh',
        'tarray',
        'temp',
        'thread',
        'time',
        'to-struct',
        'touch',
        'trace',
        'tracev',
        'trim',
        'triml',
        'trimr',
        'true',
        'trunc',
        'truthy',
        'try',
        'tuple',
        'type',
        'u64',
        'umask',
        'unbreak',
        'unfbreak',
        'unless',
        'unmarshal',
        'unquote',
        'untrace',
        'update',
        'update-in',
        'use',
        'values',
        'var',
        'varfn',
        'varglobal',
        'version',
        'walk',
        'when',
        'when-let',
        'when-with',
        'where',
        'which',
        'while',
        'with',
        'with-deadline',
        'with-dyns',
        'with-syms',
        'with-vars',
        'write',
        'xprin',
        'xprinf',
        'xprint',
        'xprintf',
        'yield',
        'zero',
        'zipcoll',
    ],
    // operators
    symbols: /[:+\^*$&%@=<>!?|\/~\.]/,
    quoteLikeOps: ['qr', 'm', 's', 'q', 'qq', 'qx', 'qw', 'tr', 'y'],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comments' },
            [
                /[a-zA-Z\-_][\w\-_]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@quoteLikeOps': {
                            token: '@rematch',
                            next: 'quotedConstructs'
                        },
                        '@default': ''
                    }
                }
            ],
            [
                /[\$@%][*@#?\+\-\$!\w\\\^><~:\.]+/,
                {
                    cases: {
                        '@default': 'variable'
                    }
                }
            ],
            { include: '@strings' },
            { include: '@dblStrings' },
            [/[{}\[\]()]/, '@brackets'],
            // RegExp
            [/[\/](?:(?:\[(?:\\]|[^\]])+\])|(?:\\\/|[^\]\/]))*[\/]\w*\s*(?=[).,]|$)/, 'regexp'],
            [/@symbols/, 'operators'],
            { include: '@numbers' },
            [/[,]/, 'delimiter']
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^#!.*$)/, 'metatag'],
            [/(^#.*$)/, 'comment']
        ],
        comments: [
            [/#+.*/, 'comment'],
        ],
        comment: [
        [/[^#]+/, 'comment'],
        [/./, 'comment']
    ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number']
        ],
        // Single quote string
        strings: [[/'/, 'string', '@stringBody']],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/\\'/, 'string.escape'],
            [/./, 'string']
        ],
        // Double quote string
        dblStrings: [[/"/, 'string', '@dblStringBody']],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            { include: '@variables' },
            [/./, 'string']
        ],
        // Quoted constructs
        // Percent strings in Ruby are similar to quote-like operators in Perl.
        // This is adapted from pstrings in ../ruby/ruby.ts.
        quotedConstructs: [
            [/(q|qw|tr|y)\s*\(/, { token: 'string.delim', switchTo: '@qstring.(.)' }],
            [/(q|qw|tr|y)\s*\[/, { token: 'string.delim', switchTo: '@qstring.[.]' }],
            [/(q|qw|tr|y)\s*\{/, { token: 'string.delim', switchTo: '@qstring.{.}' }],
            [/(q|qw|tr|y)\s*</, { token: 'string.delim', switchTo: '@qstring.<.>' }],
            [/(q|qw|tr|y)#/, { token: 'string.delim', switchTo: '@qstring.#.#' }],
            [
                /(q|qw|tr|y)\s*([^A-Za-z0-9#\s])/,
                { token: 'string.delim', switchTo: '@qstring.$2.$2' }
            ],
            [/(q|qw|tr|y)\s+(\w)/, { token: 'string.delim', switchTo: '@qstring.$2.$2' }],
            [/(qr|m|s)\s*\(/, { token: 'regexp.delim', switchTo: '@qregexp.(.)' }],
            [/(qr|m|s)\s*\[/, { token: 'regexp.delim', switchTo: '@qregexp.[.]' }],
            [/(qr|m|s)\s*\{/, { token: 'regexp.delim', switchTo: '@qregexp.{.}' }],
            [/(qr|m|s)\s*</, { token: 'regexp.delim', switchTo: '@qregexp.<.>' }],
            [/(qr|m|s)#/, { token: 'regexp.delim', switchTo: '@qregexp.#.#' }],
            [
                /(qr|m|s)\s*([^A-Za-z0-9_#\s])/,
                { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }
            ],
            [/(qr|m|s)\s+(\w)/, { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }],
            [/(qq|qx)\s*\(/, { token: 'string.delim', switchTo: '@qqstring.(.)' }],
            [/(qq|qx)\s*\[/, { token: 'string.delim', switchTo: '@qqstring.[.]' }],
            [/(qq|qx)\s*\{/, { token: 'string.delim', switchTo: '@qqstring.{.}' }],
            [/(qq|qx)\s*</, { token: 'string.delim', switchTo: '@qqstring.<.>' }],
            [/(qq|qx)#/, { token: 'string.delim', switchTo: '@qqstring.#.#' }],
            [/(qq|qx)\s*([^A-Za-z0-9#\s])/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }],
            [/(qq|qx)\s+(\w)/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }]
        ],
        // Non-expanded quoted string
        // qstring<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\./, 'string.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': { token: 'string.delim', next: '@pop' },
                        '$#==$S2': { token: 'string.delim', next: '@push' },
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Quoted regexp
        // qregexp.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qregexp: [
            { include: '@variables' },
            [/\\./, 'regexp.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': {
                            token: 'regexp.delim',
                            next: '@regexpModifiers'
                        },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '@default': 'regexp'
                    }
                }
            ]
        ],
        regexpModifiers: [[/[msixpodualngcer]+/, { token: 'regexp.modifier', next: '@popall' }]],
        // Expanded quoted string
        // qqstring.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [{ include: '@variables' }, { include: '@qstring' }],
        variables: [
            [/\$\w+/, 'variable'],
            [/@\w+/, 'variable'],
            [/%\w+/, 'variable'] // key/value
        ]
    }
};
