/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'afnix',
    extensions: ['.als'],
    aliases: ['AFNIX', 'afnix'],
    loader: function () { return import('./afnix.js'); }
});
