/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'prolog',
    extensions: ['.pl'],
    aliases: ['Prolog', 'prolog'],
    loader: function () { return import('./prolog.js'); }
});
