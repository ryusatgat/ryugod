/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'funl',
    extensions: ['.fnl'],
    aliases: ['FunL', 'funl'],
    loader: function () { return import('./funl.js'); }
});
