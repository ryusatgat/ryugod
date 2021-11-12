/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'a68k',
    extensions: ['.s'],
    aliases: ['A68k', 'a68k'],
    loader: function () { return import('./a68k.js'); }
});
