/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'sisal',
    extensions: ['.sis'],
    aliases: ['Sisal', 'sisal'],
    loader: function () { return import('./sisal.js'); }
});
