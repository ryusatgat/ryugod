/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'nim',
    extensions: ['.nim'],
    aliases: ['Nim', 'nim'],
    firstLine: '^#!/.*\\bnim[0-9.-]*\\b',
    loader: function () { return import('./nim.js'); }
});
