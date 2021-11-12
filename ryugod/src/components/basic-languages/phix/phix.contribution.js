/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'phix',
    extensions: ['.exw', '.e', '.ex'],
    aliases: ['Phix', 'phix'],
    loader: function () { return import('./phix.js'); }
});
