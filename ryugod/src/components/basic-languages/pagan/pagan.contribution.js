/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'pagan',
    extensions: ['.pgn'],
    aliases: ['Pagan', 'pagan'],
    loader: function () { return import('./pagan.js'); }
});