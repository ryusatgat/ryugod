/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'teascript',
    extensions: ['.tea'],
    aliases: ['TeaScript', 'teascript'],
    loader: function () { return import('./teascript.js'); }
});
