/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'chapel',
    extensions: ['.chpl'],
    aliases: ['Chapel', 'chapel'],
    loader: function () { return import('./chapel.js'); }
});
