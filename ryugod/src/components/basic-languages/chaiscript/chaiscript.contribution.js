/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'chaiscript',
    extensions: ['.chai'],
    aliases: ['ChaiScript', 'chaiscript'],
    loader: function () { return import('./chaiscript.js'); }
});
