/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'arkscript',
    extensions: ['.ark'],
    aliases: ['ArkScript', 'arkscript'],
    loader: function () { return import('./arkscript.js'); }
});
