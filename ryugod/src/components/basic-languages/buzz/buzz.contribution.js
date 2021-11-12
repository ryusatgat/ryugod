/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'buzz',
    extensions: ['.bzz'],
    aliases: ['Buzz', 'buzz'],
    loader: function () { return import('./buzz.js'); }
});
