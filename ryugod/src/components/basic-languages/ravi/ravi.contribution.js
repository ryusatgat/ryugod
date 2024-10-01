/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'ravi',
    extensions: ['.ravi'],
    aliases: ['Ravi', 'ravi'],
    loader: function () { return import('./ravi.js'); }
});