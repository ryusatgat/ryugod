/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'octave',
    extensions: ['.m'],
    aliases: ['Octave', 'Matlab', 'matlab'],
    firstLine: '^#!/.*\\boctave[0-9.-]*\\b',
    loader: function () { return import('./octave.js'); }
});
