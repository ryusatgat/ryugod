/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'algol60',
    extensions: ['.alg'],
    aliases: ['Algol60', 'Algol60'],
    loader: function () { return import('./algol60.js'); }
});
