/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'autoit',
    extensions: ['.au3'],
    aliases: ['AutoIt', 'autoit'],
    loader: function () { return import('./autoit.js'); }
});
