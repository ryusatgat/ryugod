/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'mirah',
    extensions: ['.mirah'],
    aliases: ['Mirah', 'mirah'],
    loader: function () { return import('./mirah.js'); }
});
