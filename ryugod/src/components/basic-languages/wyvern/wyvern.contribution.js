/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'wyvern',
    extensions: ['.wyv'],
    aliases: ['Wyvern', 'wyvern'],
    loader: function () { return import('./wyvern.js'); }
});
