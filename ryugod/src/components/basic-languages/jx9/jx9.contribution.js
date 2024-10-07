/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'jx9',
    extensions: ['.jx9'],
    aliases: ['JX9', 'jx9'],
    loader: function () { return import('./jx9.js'); }
});