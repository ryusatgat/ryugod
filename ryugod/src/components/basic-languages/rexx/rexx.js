/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:def|class|for|if|elseif|else|try|finally|catch|tread|meth|define|import).*?\\s*$'),
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
    ignoreCase: true,
    tokenPostfix: '.rexx',
    keywords: [
        'address',
        'arg',
        'boolean',
        'byte',
        'call',
        'diag',
        'do',
        'drop',
        'double',
        'else',
        'end',
        'exit',
        'expose',
        'float',
        'forward',
        'guard',
        'if',
        'import',
        'int',
        'interpret',
        'iterate',
        'leave',
        'long',
        'loop',
        'noCrossRef',
        'noDiag',
        'noFormat',
        'NOP',
        'noReplace',
        'noStrictArgs',
        'noStrictAssign',
        'noStrictCase',
        'noStrictSignal',
        'noTrace',
        'noUTF9',
        'noVerbose',
        'noVerboseX',
        'NUMERIC',
        'options',
        'otherwise',
        'package',
        'parse',
        'procedure',
        'properties',
        'pull',
        'push',
        'queue',
        'raise',
        'reply',
        'return',
        'rexx',
        'say',
        'select',
        'self',
        'short',
        'signal',
        'strictArgs',
        'strictAssign',
        'strictCase',
        'strictSignal',
        'super',
        'then',
        'trace',
        'use',
        'UTF9',
        'verbose',
        'verbosex',
        'all',
        'any',
        'arguments',
        'array',
        'by',
        'case',
        'caseless',
        'commands',
        'countinue',
        'delegate',
        'description',
        'digits',
        'engineering',
        'error',
        'external',
        'failure',
        'for',
        'forever',
        'form',
        'fuzz',
        'get',
        'guarded',
        'halt',
        'index',
        'intermediates',
        'item',
        'label',
        'labels',
        'local',
        'lostDigits',
        'lower',
        'name',
        'noMethod',
        'normal',
        'noString',
        'notReady',
        'noValue',
        'null',
        'on',
        'off',
        'over',
        'propagate',
        'protected',
        'results',
        'scientific',
        'set',
        'strict',
        'syntax',
        'to',
        'unGuarded',
        'unProtected',
        'upper',
        'user',
        'value',
        'when',
        'while',
        'with',
        'until',
    ],
    builtins: [
        '.alarm',
        '.application',
        '.argUtil',
        '.array',
        '.bag',
        '.buffer',
        '.caselessColumnComparator',
        '.caselessComparator',
        '.caselessDescendingComparator',
        '.circularQueue',
        '.class',
        '.collection',
        '.columnComparator',
        '.comparable',
        '.comparator',
        '.context',
        '.dateTime',
        '.DEF_CLASS',
        '.DEF_FILE',
        '.DEF_LABEL',
        '.DEF_METHOD',
        '.DEF_PROCEDURE',
        '.DEF_REQUIRES',
        '.DEF_ROUTINE',
        '.DEF',
        '.descendingComparator',
        '.directory',
        '.dlgUtil',
        '.endOfLine',
        '.environment',
        '.error',
        '.false',
        '.identityTable',
        '.input',
        '.inputOutputStream',
        '.inputStream',
        '.invertingComparator',
        '.line',
        '.list',
        '.local',
        '.mapCollection',
        '.message',
        '.method',
        '.methods',
        '.monitor',
        '.mutableBuffer',
        '.nil',
        '.NLS',
        '.object',
        '.orderable',
        '.orderedCollection',
        '.OS',
        '.output',
        '.outputStream',
        '.package',
        '.pointer',
        '.properties',
        '.queue',
        '.relation',
        '.rexxContext',
        '.rexxQueue',
        '.routine',
        '.RS',
        '.scriptable',
        '.server',
        '.set',
        '.setCollection',
        '.stack',
        '.stdErr',
        '.stdIn',
        '.stdOut',
        '.stdQue',
        '.stem',
        '.stream',
        '.streamSupplier',
        '.string',
        '.supplier',
        '.table',
        '.timeSpan',
        '.true',
        '.weakReference',
        'abbrev',
        'abs',
        'abstract',
        'additional',
        'alarm',
        'append',
        'attribute',
        'b2x',
        'beep',
        'binary',
        'bitAnd',
        'bitOr',
        'bitXor',
        'both',
        'buffer',
        'c2d',
        'c2x',
        'caselessColumnComparator',
        'caselessComparator',
        'caselessDescendingComparator',
        'catch',
        'center',
        'centre',
        'changeStr',
        'char',
        'charIn',
        'charOut',
        'chars',
        'checked',
        'circularQueue',
        'class',
        'close',
        'columnComparator',
        'comCtl32Version',
        'comparable',
        'comparator',
        'compare',
        'condition',
        'constant',
        'copies',
        'countStr',
        'd2c',
        'd2x',
        'dataType',
        'date',
        'dateTime',
        'delStr',
        'delWord',
        'descendingComparator',
        'directory',
        'dlg',
        'endLocal',
        'errorText',
        'exists',
        'extends',
        'file',
        'filespec',
        'final',
        'finally',
        'flush',
        'focused',
        'format',
        'handle',
        'hasCode',
        'hasIndex',
        'hasMethod',
        'identityTable',
        'implements',
        'inherit',
        'inheritable',
        'initCode',
        'inputOutputStream',
        'inputStream',
        'insert',
        'interface',
        'invertingComparator',
        'is64Bit',
        'lastPos',
        'left',
        'length',
        'line',
        'lineIn',
        'lineOut',
        'lines',
        'list',
        'mapCollection',
        'max',
        'message',
        'messageDialog',
        'metaClass',
        'method',
        'min',
        'mixingClass',
        'monitor',
        'mutableBuffer',
        'native',
        'new',
        'noBuffer',
        'numericComparator',
        'object',
        'open',
        'orderable',
        'orderedCollection',
        'outputStream',
        'overlay',
        'pointer',
        'pos',
        'position',
        'private',
        'protect',
        'public',
        'put',
        'qualify',
        'query',
        'queued',
        'random',
        'read',
        'reclength',
        'regularExpression',
        'relation',
        'replace',
        'requires',
        'returns',
        'reverse',
        'rexxContext',
        'rexxQueue',
        'right',
        'routine',
        'rxFuncAdd',
        'rxFuncDrop',
        'rxFuncQuery',
        'rxQueue',
        'seek',
        'selected',
        'setCollection',
        'sign',
        'signals',
        'size',
        'sleepMS',
        'sort',
        'sortAdditional',
        'source',
        'sourceLine',
        'space',
        'static',
        'stem',
        'stream',
        'streamSupplier',
        'streamType',
        'string',
        'strip',
        'subClass',
        'subStr',
        'subword',
        'supplier',
        'symbol',
        'sys',
        'table',
        'time',
        'timeSpan',
        'timeStamp',
        'translate',
        'trunc',
        'unChecked',
        'unFocused',
        'unSelected',
        'useGlobalConstDir',
        'userID',
        'uses',
        'var',
        'variable',
        'verify',
        'version',
        'volatile',
        'weakReference',
        'word',
        'wordIndex',
        'wordLength',
        'wordPos',
        'words',
        'write',
        'x2b',
        'x2c',
        'x2d',
        'xrange',
        'comments',
        'java',
        'symbols',
        'crossRef',
        'savelog',
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
                /[a-zA-Z_]\w*/,
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
