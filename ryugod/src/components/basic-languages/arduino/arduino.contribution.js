/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'arduino',
    extensions: ['.ino'],
    aliases: ['Arduino', 'arduino'],
    loader: function () { return import('./arduino.js'); }
});