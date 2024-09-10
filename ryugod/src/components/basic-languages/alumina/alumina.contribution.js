/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from 'monaco-editor/esm/vs/basic-languages/_.contribution.js';
registerLanguage({
    id: 'alumina',
    extensions: ['.alu'],
    aliases: ['Alu', 'alu'],
    loader: function () { return import('./alumina.js'); }
});