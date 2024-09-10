/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'fatscript',
    extensions: ['.fat'],
    aliases: ['FatScript', 'fatscript'],
    loader: function () { return import('./fatscript.js'); }
});