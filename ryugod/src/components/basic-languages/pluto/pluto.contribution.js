/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from 'monaco-editor/esm/vs/basic-languages/_.contribution.js';
registerLanguage({
    id: 'pluto',
    extensions: ['.lua'],
    aliases: ['Pluto', 'pluto'],
    loader: function () { return import('./pluto.js'); }
});