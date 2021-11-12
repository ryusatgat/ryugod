/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '(', close: ')', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*(#|//)region\\b'),
            end: new RegExp('^\\s*(#|//)endregion\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        doctype: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(script\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.scriptAfterType'
                }
            ],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.scriptAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.scriptWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInEmbeddedState.scriptEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/<%((jsp)|@|=)?/, { token: '@rematch', switchTo: '@jspInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(style\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.styleAfterType'
                }
            ],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.styleAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInSimpleState.styleWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [
                /<%((jsp)|@|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@jspInEmbeddedState.styleEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        jspInSimpleState: [
            [/<%((jsp)|@|=)?/, 'metatag.jsp'],
            [/%>/, { token: 'metatag.jsp', switchTo: '@$S2.$S3' }],
            { include: 'jspRoot' }
        ],
        jspInEmbeddedState: [
            [/<%((jsp)|@|=)?/, 'metatag.jsp'],
            [
                /%>/,
                {
                    token: 'metatag.jsp',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ],
            { include: 'jspRoot' }
        ],
        jspRoot: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@jspKeywords': { token: 'keyword.jsp' },
                        '@jspCompileTimeConstants': { token: 'constant.jsp' },
                        '@default': 'identifier.jsp'
                    }
                }
            ],
            [
                /[$a-zA-Z_]\w*/,
                {
                    cases: {
                        '@jspPreDefinedVariables': {
                            token: 'variable.predefined.jsp'
                        },
                        '@default': 'variable.jsp'
                    }
                }
            ],
            // brackets
            [/[{}]/, 'delimiter.bracket.jsp'],
            [/[\[\]]/, 'delimiter.array.jsp'],
            [/[()]/, 'delimiter.parenthesis.jsp'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/(#|\/\/)$/, 'comment.jsp'],
            [/(#|\/\/)/, 'comment.jsp', '@jspLineComment'],
            // block comments
            [/\/\*/, 'comment.jsp', '@jspComment'],
            // strings
            [/"/, 'string.jsp', '@jspDoubleQuoteString'],
            [/'/, 'string.jsp', '@jspSingleQuoteString'],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/, 'delimiter.jsp'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.jsp'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.jsp'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.jsp'],
            [/0[0-7']*[0-7]/, 'number.octal.jsp'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.jsp'],
            [/\d[\d']*/, 'number.jsp'],
            [/\d/, 'number.jsp']
        ],
        jspComment: [
            [/\*\//, 'comment.jsp', '@pop'],
            [/[^*]+/, 'comment.jsp'],
            [/./, 'comment.jsp']
        ],
        jspLineComment: [
            [/%>/, { token: '@rematch', next: '@pop' }],
            [/.$/, 'comment.jsp', '@pop'],
            [/[^?]+$/, 'comment.jsp', '@pop'],
            [/[^?]+/, 'comment.jsp'],
            [/./, 'comment.jsp']
        ],
        jspDoubleQuoteString: [
            [/[^\\"]+/, 'string.jsp'],
            [/@escapes/, 'string.escape.jsp'],
            [/\\./, 'string.escape.invalid.jsp'],
            [/"/, 'string.jsp', '@pop']
        ],
        jspSingleQuoteString: [
            [/[^\\']+/, 'string.jsp'],
            [/@escapes/, 'string.escape.jsp'],
            [/\\./, 'string.escape.invalid.jsp'],
            [/'/, 'string.jsp', '@pop']
        ]
    },
    jspKeywords: [
        'continue',
        'for',
        'new',
        'switch',
        'assert',
        'default',
        'goto',
        'package',
        'synchronized',
        'do',
        'if',
        'this',
        'break',
        'implements',
        'throw',
        'else',
        'import',
        'throws',
        'case',
        'enum',
        'instanceof',
        'return',
        'transient',
        'catch',
        'extends',
        'try',
        'finally',
        'strictfp',
        'super',
        'while',
        'true',
        'false',
        'page',
        'taglib'
    ],
    jspCompileTimeConstants: [
        'String',
        'final',
        'interface',
        'static',
        'volatile',
        'void',
        'abstract',
        'boolean',
        'private',
        'double',
        'protected',
        'byte',
        'public',
        'int',
        'short',
        'char',
        'class',
        'long',
        'const',
        'float',
        'native',
    ],
    jspPreDefinedVariables: [
        '_jspxFactory',
        'pageContext',
        'application',
        'config',
        'session',
        'out',
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};
// TESTED WITH
// <style type="text/css" >
//   .boo { background: blue;
//   <?=''?>
//   }
//   .boo { background: blue;  <?=''?>  }
// </style>
// <!--
// <?= '' ?>
// -->
// <?jsp
// // The next line contains a syntax error:
// __construct
// if () {
// 	return "The parser recovers from this type of syntax error";
// }
// ?>
// <html>
// <head>
// 	<title <?=''?>>Example page</title>
//   <style <?=''?>>
//     .boo { background: blue; <?=''?> }
//   </style>
// </head>
// <body>
// <script <?=''?> type<?=''?>=<?=''?>"text/javascript"<?=''?>>
// 	// Some jsp embedded inside JS
// 	// Generated <?=date('l, F jS, Y')?>
// 	var server_token = <?=rand(5, 10000)?>
// 	if (typeof server_token === 'number') {
// 		alert('token: ' + server_token);
// 	}
// </script>
// <div>
// Hello
// <? if (isset($user)) { ?>
// 	<b><?=$user?></b>
// <? } else { ?>
// 	<i>guest</i>
// <? } ?>
// !
// </div>
// <?jsp
// 	/* Example jsp file
// 	multiline comment
// 	*/
//  # Another single line comment
// 	$cards = array("ah", "ac", "ad", "as",
// 		"2h", "2c", "2d", "2s",
// 		"3h", "3c", "3d", "3s",
// 		"4h", "4c", "4d", "4s",
// 		"5h", "5c", "5d", "5s",
// 		"6h", "6c", "6d", "6s",
// 		"7h", "7c", "7d", "7s",
// 		"8h", "8c", "8d", "8s",
// 		"9h", "9c", "9d", "9s",
// 		"th", "tc", "td", "ts",
// 		"jh", "jc", "jd", "js",
// 		"qh", "qc", "qd", "qs",
// 		"kh", "kc", "kd", "ks");
// 	srand(time());
// 	for($i = 0; $i < 52; $i++) {
// 		$count = count($cards);
// 		$random = (rand()%$count);
// 		if($cards[$random] == "") {
// 			$i--;
// 		} else {
// 			$deck[] = $cards[$random];
// 			$cards[$random] = "";
// 		}
// 	}
// $_GET
// __CLASS__
// 	srand(time());
// 	$starting_point = (rand()%51);
// 	print("Starting point for cut cards is: $starting_point<p>");
// 	// display shuffled cards (EXAMPLE ONLY)
// 	for ($index = 0; $index < 52; $index++) {
// 		if ($starting_point == 52) { $starting_point = 0; }
// 		print("Uncut Point: <strong>$deck[$index]</strong> ");
// 		print("Starting Point: <strong>$deck[$starting_point]</strong><br>");
// 		$starting_point++;
// 	}
// ?>
// </body>
// </html>
