/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'mythryl',
    extensions: ['.mythryl'],
    aliases: ['Mythryl', 'mythryl'],
    loader: function () { return import('./mythryl.js'); }
});
