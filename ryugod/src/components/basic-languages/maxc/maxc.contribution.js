/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'maxc',
    extensions: ['.mxc'],
    aliases: ['Maxc', 'maxc'],
    loader: function () { return import('./maxc.js'); }
});
