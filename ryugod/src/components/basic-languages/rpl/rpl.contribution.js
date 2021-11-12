/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'rpl',
    extensions: ['.rpl'],
    aliases: ['RPL', 'rpl'],
    loader: function () { return import('./rpl.js'); }
});