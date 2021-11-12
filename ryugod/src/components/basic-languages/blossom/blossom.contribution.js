/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'blossom',
    extensions: ['.bls'],
    aliases: ['Blossom', 'blossom'],
    loader: function () { return import('./blossom.js'); }
});