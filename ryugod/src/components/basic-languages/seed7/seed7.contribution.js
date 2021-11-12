/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'seed7',
    extensions: ['.sd7'],
    aliases: ['Seed7', 'seed7'],
    loader: function () { return import('./seed7.js'); }
});
