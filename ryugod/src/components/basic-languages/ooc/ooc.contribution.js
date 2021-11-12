/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'ooc',
    extensions: ['.ooc'],
    aliases: ['Ooc', 'ooc'],
    loader: function () { return import('./ooc.js'); }
});
