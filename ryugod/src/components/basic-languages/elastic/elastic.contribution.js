/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'elastic',
    extensions: ['.ec'],
    aliases: ['elastiC', 'elastic'],
    loader: function () { return import('./elastic.js'); }
});