/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'lemon',
    extensions: ['.lm'],
    aliases: ['Lemon', 'lemon'],
    loader: function () { return import('./lemon.js'); }
});
