/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'nuua',
    extensions: ['.nu'],
    aliases: ['Nuua', 'nuua'],
    loader: function () { return import('./nuua.js'); }
});