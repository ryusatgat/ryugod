/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'dragon',
    extensions: ['.drg'],
    aliases: ['Dragon', 'dragon'],
    loader: function () { return import('./dragon.js'); }
});