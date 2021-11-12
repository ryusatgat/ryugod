/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'stormscript',
    extensions: ['.sts'],
    aliases: ['StormScript', 'stormscript'],
    loader: function () { return import('./stormscript.js'); }
});