/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'xpl0',
    extensions: ['.xpl0'],
    aliases: ['XPL0', 'xpl0'],
    loader: function () { return import('./xpl0.js'); }
});
