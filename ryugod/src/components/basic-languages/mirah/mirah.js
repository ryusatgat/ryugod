/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { conf as tsConf, language as tsLanguage } from '../ruby/ruby.js';
export var conf = tsConf;
export var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.mirah',
    keywords: tsLanguage.keywords,
    builtins: tsLanguage.builtins,
    typeKeywords: [
        'autoload',
        'extend',
        'include',
        'load',
        'require',
        'import',
    ],
    declarations: tsLanguage.declarations,
    linedecls: tsLanguage.linedecls,
    heredelim: tsLanguage.heredelim,
    keywordops: tsLanguage.keywordops,
    operators: tsLanguage.operators,
    brackets: tsLanguage.brackets,
    symbols: tsLanguage.symbols,
    escape: tsLanguage.escape,
    escapes: tsLanguage.escapes,
    decpart: tsLanguage.decpart,
    decimal: tsLanguage.decimal,
    delim: tsLanguage.delim,
    heredelim: tsLanguage.heredelim,
    regexpctl: tsLanguage.regexpctl,
    regexpesc: tsLanguage.regexpesc,
    tokenizer: tsLanguage.tokenizer
};
