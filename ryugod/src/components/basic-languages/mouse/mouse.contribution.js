/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'mouse',
    extensions: ['.m79'],
    aliases: ['Mouse', 'mouse'],
    loader: function () { return import('./mouse.js'); }
});