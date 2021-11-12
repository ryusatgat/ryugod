/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'rubi',
    extensions: ['.rb'],
    aliases: ['Rubi', 'rubi'],
    loader: function () { return import('./rubi.js'); }
});
