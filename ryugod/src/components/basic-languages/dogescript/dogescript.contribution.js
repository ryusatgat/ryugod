/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'dogescript',
    extensions: ['.djs'],
    aliases: ['Dogescript', 'dogescript'],
    loader: function () { return import('./dogescript.js'); }
});
