/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'dassie',
    extensions: ['.ds'],
    aliases: ['Dassie', 'dassie'],
    loader: function () { return import('./dassie.js'); }
});