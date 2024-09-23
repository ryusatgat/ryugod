/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'pl0',
    extensions: ['.pl0'],
    aliases: ['PL/0', 'pl0'],
    loader: function () { return import('./pl0.js'); }
});