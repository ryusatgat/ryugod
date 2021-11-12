/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'rebol',
    extensions: ['.r'],
    aliases: ['Rebol', 'rebol'],
    loader: function () { return import('./rebol.js'); }
});
