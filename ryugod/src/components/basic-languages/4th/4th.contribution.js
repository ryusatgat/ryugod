/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: '4th',
    extensions: ['.4th'],
    aliases: ['4tH', '4tH'],
    loader: function () { return import('./4th.js'); }
});