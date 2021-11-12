/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'horse64',
    extensions: ['.h64'],
    aliases: ['Horse64', 'horse64'],
    loader: function () { return import('./horse64.js'); }
});
