/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'fanx',
    extensions: ['.fanx'],
    aliases: ['Fanx', 'fanx'],
    loader: function () { return import('./fanx.js'); }
});