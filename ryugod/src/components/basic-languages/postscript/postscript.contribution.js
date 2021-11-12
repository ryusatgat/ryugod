/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'postscript',
    extensions: ['.ps'],
    aliases: ['PostScript', 'postscript'],
    loader: function () { return import('./postscript.js'); }
});
