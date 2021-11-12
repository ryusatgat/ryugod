/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'virgil',
    extensions: ['.v3'],
    aliases: ['Virgil', 'virgil'],
    loader: function () { return import('./virgil.js'); }
});
