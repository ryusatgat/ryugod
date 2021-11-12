/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'jsp',
    extensions: ['.jsp'],
    aliases: ['JSP', 'jsp'],
    loader: function () { return import('./jsp.js'); }
});
