/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'antimony',
    extensions: ['.sb'],
    aliases: ['Antimony', 'antimony'],
    loader: function () { return import('./antimony.js'); }
});