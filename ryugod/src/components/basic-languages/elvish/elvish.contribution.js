/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'elvish',
    extensions: ['.elv'],
    aliases: ['Elvish', 'elvish'],
    loader: function () { return import('./elvish.js'); }
});