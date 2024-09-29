/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'zenon',
    extensions: ['.znn'],
    aliases: ['Zenon', 'zenon'],
    loader: function () { return import('./zenon.js'); }
});