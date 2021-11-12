/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'cobol',
    extensions: ['.cob'],
    aliases: ['Cobol', 'cobol'],
    loader: function () { return import('./cobol.js'); }
});
