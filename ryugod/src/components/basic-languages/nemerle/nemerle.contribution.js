/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'nemerle',
    extensions: ['.n'],
    aliases: ['Nemerle', 'nemerle'],
    loader: function () { return import('./nemerle.js'); }
});
