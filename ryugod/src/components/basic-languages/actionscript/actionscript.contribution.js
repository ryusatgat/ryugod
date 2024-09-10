/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'actionscript',
    extensions: ['.as3'],
    aliases: ['Actionscript', 'actionscript'],
    loader: function () { return import('./actionscript.js'); }
});
