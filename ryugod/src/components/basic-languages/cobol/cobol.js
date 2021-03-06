/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '*',
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
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ]
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.cob',
    ignoreCase: true,
    brackets: [
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    keywords: [
        'ACCEPT', 
        'ACCESS', 
        'ADD', 
        'ADDRESS', 
        'ADVANCING', 
        'AFTER', 
        'ALL', 
        'ALPHABET', 
        'ALPHABETIC', 
        'ALPHABETIC-LOWER', 
        'ALPHABETIC-UPPER', 
        'ALPHANUMERIC', 
        'ALPHANUMERIC-EDITED', 
        'ALSO', 
        'ALTER', 
        'ALTERNATE', 
        'AND', 
        'ANY', 
        'APPLY', 
        'ARE', 
        'AREA', 
        'AREAS', 
        'ASCENDING', 
        'ASSIGN', 
        'AT', 
        'AUTHOR', 
        'BASIS', 
        'BEFORE', 
        'BEGINNING', 
        'BINARY', 
        'BLANK', 
        'BLOCK', 
        'BOTTOM', 
        'BY', 
        'CALL', 
        'CANCEL', 
        'CBL', 
        'CD', 
        'CF', 
        'CH', 
        'CHARACTER', 
        'CHARACTERS', 
        'CLASS', 
        'CLASS-ID', 
        'CLOCK-UNITS', 
        'CLOSE', 
        'COBOL', 
        'CODE', 
        'CODE-SET', 
        'COLLATING', 
        'COLUMN', 
        'COM-REG', 
        'COMMA', 
        'COMMON', 
        'COMMUNICATION', 
        'COMP', 
        'COMP-1', 
        'COMP-2', 
        'COMP-3', 
        'COMP-4', 
        'COMP-5', 
        'COMPUTATIONAL', 
        'COMPUTATIONAL-1', 
        'COMPUTATIONAL-2', 
        'COMPUTATIONAL-3', 
        'COMPUTATIONAL-4', 
        'COMPUTATIONAL-5', 
        'COMPUTE', 
        'CONFIGURATION', 
        'CONTAINS', 
        'CONTENT', 
        'CONTINUE', 
        'CONTROL', 
        'CONTROLS', 
        'CONVERTING', 
        'COPY', 
        'CORR', 
        'CORRESPONDING', 
        'COUNT', 
        'CURRENCY', 
        'DATA', 
        'DATE-COMPILED', 
        'DATE-WRITTEN', 
        'DAY', 
        'DAY-OF-WEEK', 
        'DBCS', 
        'DE', 
        'DEBUG-CONTENTS', 
        'DEBUG-ITEM', 
        'DEBUG-LINE', 
        'DEBUG-NAME', 
        'DEBUG-SUB-1', 
        'DEBUG-SUB-2', 
        'DEBUG-SUB-3', 
        'DEBUGGING', 
        'DECIMAL-POINT', 
        'DECLARATIVES', 
        'DELETE', 
        'DELIMITED', 
        'DELIMITER', 
        'DEPENDING', 
        'DESCENDING', 
        'DESTINATION', 
        'DETAIL', 
        'DISPLAY', 
        'DISPLAY-1', 
        'DIVIDE', 
        'DIVISION', 
        'DOWN', 
        'DUPLICATES', 
        'DYNAMIC', 
        'EGCS', 
        'EGI', 
        'EJECT', 
        'ELSE', 
        'EMI', 
        'ENABLE',         
        'END-ADD', 
        'END-CALL', 
        'END-COMPUTE', 
        'END-DELETE', 
        'END-DIVIDE', 
        'END-EVALUATE', 
        'END-IF', 
        'END-INVOKE', 
        'END-MULTIPLY', 
        'END-OF-PAGE', 
        'END-PERFORM', 
        'END-PROGRAM',
        'END-READ', 
        'END-RECEIVE', 
        'END-RETURN', 
        'END-REWRITE', 
        'END-SEARCH', 
        'END-START', 
        'END-STRING', 
        'END-SUBTRACT', 
        'END-UNSTRING', 
        'END-WRITE', 
        'END', 
        'ENDING', 
        'ENTER', 
        'ENTRY', 
        'ENVIRONMENT', 
        'EOP', 
        'EQUAL', 
        'ERROR', 
        'ESI', 
        'EVALUATE', 
        'EVERY', 
        'EXCEPTION', 
        'EXIT', 
        'EXTEND', 
        'EXTERNAL', 
        'FALSE', 
        'FD', 
        'FILE', 
        'FILE-CONTROL', 
        'FILLER', 
        'FINAL', 
        'FIRST', 
        'FOOTING', 
        'FOR', 
        'FROM', 
        'FUNCTION', 
        'GENERATE', 
        'GIVING', 
        'GLOBAL', 
        'GO', 
        'GOBACK', 
        'GREATER', 
        'GROUP', 
        'HEADING',
        'HIGH-VALUE', 
        'HIGH-VALUES',         
        'I-O-CONTROL', 
        'I-O', 
        'ID', 
        'IDENTIFICATION', 
        'IF', 
        'IN', 
        'INDEX', 
        'INDEXED', 
        'INDICATE', 
        'INHERITS', 
        'INITIAL', 
        'INITIALIZE', 
        'INITIATE', 
        'INPUT', 
        'INPUT-OUTPUT', 
        'INSERT', 
        'INSPECT', 
        'INSTALLATION', 
        'INTO', 
        'INVALID', 
        'INVOKE', 
        'IS', 
        'JUST', 
        'JUSTIFIED	 ', 
        'KANJI', 
        'KEY	 ', 
        'LABEL', 
        'LAST', 
        'LEADING', 
        'LEFT', 
        'LENGTH', 
        'LESS', 
        'LIMIT', 
        'LIMITS', 
        'LINAGE', 
        'LINAGE-COUNTER', 
        'LINE', 
        'LINE-COUNTER', 
        'LINES', 
        'LINKAGE', 
        'LOCAL-STORAGE', 
        'LOCK', 
        'LOW-VALUE', 
        'LOW-VALUES', 
        'MEMORY', 
        'MERGE', 
        'MESSAGE', 
        'METACLASS', 
        'METHOD', 
        'METHOD-ID', 
        'MODE', 
        'MODULES', 
        'MORE-LABELS', 
        'MOVE', 
        'MULTIPLE', 
        'MULTIPLY', 
        'NATIVE', 
        'NATIVE_BINARY', 
        'NEGATIVE', 
        'NEXT', 
        'NO', 
        'NOT', 
        'NULL', 
        'NULLS', 
        'NUMBER', 
        'NUMERIC', 
        'NUMERIC-EDITED', 
        'OBJECT', 
        'OBJECT-COMPUTER', 
        'OCCURS', 
        'OF', 
        'OFF', 
        'OMITTED', 
        'ON', 
        'OPEN', 
        'OPTIONAL', 
        'OR', 
        'ORDER', 
        'ORGANIZATION', 
        'OTHER', 
        'OUTPUT', 
        'OVERFLOW', 
        'OVERRIDE', 
        'PACKED-DECIMAL', 
        'PADDING', 
        'PAGE', 
        'PAGE-COUNTER', 
        'PASSWORD', 
        'PERFORM', 
        'PF', 
        'PH', 
        'PIC', 
        'PICTURE', 
        'PLUS', 
        'POINTER', 
        'POSITION', 
        'POSITIVE', 
        'PRINTING', 
        'PROCEDURE', 
        'PROCEDURE-POINTER', 
        'PROCEDURES', 
        'PROCEED', 
        'PROCESSING', 
        'PROGRAM', 
        'PROGRAM-ID', 
        'PURGE', 
        'QUEUE', 
        'QUOTE', 
        'QUOTES', 
        'RANDOM', 
        'RD', 
        'READ', 
        'READY', 
        'RECEIVE', 
        'RECORD', 
        'RECORDING', 
        'RECORDS', 
        'RECURSIVE', 
        'REDEFINES', 
        'REEL', 
        'REFERENCE', 
        'REFERENCES', 
        'RELATIVE', 
        'RELEASE', 
        'RELOAD', 
        'REMAINDER', 
        'REMOVAL', 
        'RENAMES', 
        'REPLACE', 
        'REPLACING', 
        'REPORT', 
        'REPORTING', 
        'REPORTS', 
        'REPOSITORY', 
        'RERUN', 
        'RESERVE', 
        'RESET', 
        'RETURN', 
        'RETURN-CODE', 
        'RETURNING', 
        'REVERSED', 
        'REWIND', 
        'REWRITE', 
        'RF', 
        'RH', 
        'RIGHT', 
        'ROUNDED', 
        'RUN', 
        'SAME', 
        'SD', 
        'SEARCH', 
        'SECTION', 
        'SECURITY', 
        'SEGMENT', 
        'SEGMENT-LIMIT', 
        'SELECT', 
        'SELF', 
        'SEND', 
        'SENTENCE', 
        'SEPARATE', 
        'SEQUENCE', 
        'SEQUENTIAL', 
        'SERVICE', 
        'SET', 
        'SHIFT-IN', 
        'SHIFT-OUT', 
        'SIGN', 
        'SIZE', 
        'SKIP1', 
        'SKIP2', 
        'SKIP3', 
        'SORT', 
        'SORT-CONTROL', 
        'SORT-CORE-SIZE', 
        'SORT-FILE-SIZE', 
        'SORT-MERGE', 
        'SORT-MESSAGE', 
        'SORT-MODE-SIZE', 
        'SORT-RETURN', 
        'SOURCE', 
        'SOURCE-COMPUTER', 
        'SPACE', 
        'SPACES', 
        'SPECIAL-NAMES', 
        'STANDARD', 
        'STANDARD-1', 
        'STANDARD-2', 
        'START', 
        'STATUS', 
        'STOP', 
        'STRING', 
        'SUB-QUEUE-1', 
        'SUB-QUEUE-2', 
        'SUB-QUEUE-3', 
        'SUBTRACT', 
        'SUM', 
        'SUPER', 
        'SUPPRESS', 
        'SYMBOLIC', 
        'SYNC', 
        'SYNCHRONIZED', 
        'TABLE', 
        'TALLY', 
        'TALLYING', 
        'TAPE', 
        'TERMINAL', 
        'TERMINATE', 
        'TEST', 
        'TEXT', 
        'THAN', 
        'THEN', 
        'THROUGH', 
        'THRU', 
        'TIME', 
        'TIMES', 
        'TITLE', 
        'TO', 
        'TOP', 
        'TRACE', 
        'TRAILING', 
        'TRUE', 
        'TYPE', 
        'UNIT', 
        'UNSTRING', 
        'UNTIL', 
        'UP', 
        'UPON', 
        'USAGE', 
        'USE', 
        'USING', 
        'VALUE', 
        'VALUES', 
        'VARYING', 
        'WHEN', 
        'WHEN-COMPILED', 
        'WITH', 
        'WORDS', 
        'WORKING-STORAGE', 
        'WRITE', 
        'WRITE-ONLY', 
        'ZERO', 
        'ZEROES', 
        'ZEROS'
    ],
    operators: [
        // Logical
        'ALL',
        'AND',
        'ANY',
        'BETWEEN',
        'EXISTS',
        'IN',
        'LIKE',
        'NOT',
        'OR',
        'SOME',
        // Set
        'EXCEPT',
        'INTERSECT',
        'UNION',
        // Join
        'APPLY',
        'CROSS',
        'FULL',
        'INNER',
        'JOIN',
        'LEFT',
        'OUTER',
        'RIGHT',
        // Predicates
        'CONTAINS',
        'FREETEXT',
        'IS',
        'NULL',
        // Pivoting
        'PIVOT',
        'UNPIVOT',
        // Merging
        'MATCHED'
    ],    
    builtins: [
        'local',
        'PROGRAM-BEGIN', 
        'PROGRAM-DONE', 
    ],
    tokenizer: {
        root: [
            { include: '@comments' },
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[;,.]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [
                /[-\w@#$]+/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@operators': 'operator',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[<>=!%&+\*/|~^]/, 'operator']
        ],
        whitespace: [[/\s+/, 'white']],
        comments: [
            [/\*+.*/, 'comment'],
            [/\/\*/, { token: 'comment.quote', next: '@comment' }]
        ],
        comment: [
            [/[^*/]+/, 'comment'],
            [/\*\//, { token: 'comment.quote', next: '@pop' }],
            [/./, 'comment']
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*/, 'number'],
            [/[$][+-]*\d*(\.\d*)?/, 'number'],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']
        ],
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
