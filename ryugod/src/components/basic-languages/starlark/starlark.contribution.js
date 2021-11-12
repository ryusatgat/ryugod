/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'starlark',
    extensions: ['.bzl', '.sky', '.star'],
    aliases: ['Starlark', 'starlark'],
    loader: function () { return import('./starlark.js'); }
});
