/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'covscript',
    extensions: ['.csc'],
    aliases: ['CovariantScript', 'CovScript', 'covscript'],
    loader: function () { return import('./covscript.js'); }
});