/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'd',
    extensions: ['.d', '.h'],
    aliases: ['D', 'd'],
    loader: function () { return import('./d.js'); }
});
registerLanguage({
    id: 'd',
    extensions: ['.d', '.di'],
    aliases: ['D', 'd'],
    loader: function () { return import('./d.js'); }
});
