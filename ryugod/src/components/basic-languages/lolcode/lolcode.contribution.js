/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'lolcode',
    extensions: ['.lol'],
    aliases: ['LOLCODE', 'lolcode'],
    loader: function () { return import('./lolcode.js'); }
});
