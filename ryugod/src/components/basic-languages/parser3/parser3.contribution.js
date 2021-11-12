/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'parser3',
    extensions: ['.p'],
    aliases: ['Parser3', 'parser3'],
    loader: function () { return import('./parser3.js'); }
});
