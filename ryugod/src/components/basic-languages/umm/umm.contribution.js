/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'umm',
    extensions: ['.umm'],
    aliases: ['Umlang', 'umm'],
    loader: function () { return import('./umm.js'); }
});
