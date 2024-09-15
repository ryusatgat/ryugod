/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'calc4',
    extensions: ['.calc4'],
    aliases: ['Calc4', 'calc4'],
    loader: function () { return import('./calc4.js'); }
});