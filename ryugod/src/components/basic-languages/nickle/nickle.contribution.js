/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'nickle',
    extensions: ['.5c'],
    aliases: ['Nickle', 'nickle'],
    loader: function () { return import('./nickle.js'); }
});
