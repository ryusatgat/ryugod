/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'miniscript',
    extensions: ['.ms'],
    aliases: ['Miniscript', 'miniscript'],
    loader: function () { return import('./miniscript.js'); }
});
