/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'kagsa',
    extensions: ['.kg'],
    aliases: ['Kagsa', 'kagsa'],
    loader: function () { return import('./kagsa.js'); }
});