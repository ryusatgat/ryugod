/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'wardscript',
    extensions: ['.ward'],
    aliases: ['WardScript', 'wardscript'],
    loader: function () { return import('./wardscript.js'); }
});
