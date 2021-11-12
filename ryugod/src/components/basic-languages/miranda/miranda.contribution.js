/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'miranda',
    extensions: ['.m'],
    aliases: ['Miranda', 'miranda'],
    loader: function () { return import('./miranda.js'); }
});
