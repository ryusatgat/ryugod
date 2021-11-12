/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'arrow',
    extensions: ['.ar'],
    aliases: ['Arrow', 'arrow'],
    loader: function () { return import('./arrow.js'); }
});
