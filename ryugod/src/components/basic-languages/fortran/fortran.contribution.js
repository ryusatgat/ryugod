/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'fortran',
    extensions: ['.f90'],
    aliases: ['Fortran', 'fortran'],
    loader: function () { return import('./fortran.js'); }
});
