/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'groovy',
    extensions: ['.groovy'],
    aliases: ['Groovy', 'groovy'],
    loader: function () { return import('./groovy.js'); }
});
