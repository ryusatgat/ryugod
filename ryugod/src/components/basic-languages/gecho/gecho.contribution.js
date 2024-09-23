/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'gecho',
    extensions: ['.gecho'],
    aliases: ['Gecho', 'gecho'],
    loader: function () { return import('./gecho.js'); }
});