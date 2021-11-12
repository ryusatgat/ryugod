/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'rexx',
    extensions: ['.rex'],
    aliases: ['Rexx', 'rexx'],
    loader: function () { return import('./rexx.js'); }
});
