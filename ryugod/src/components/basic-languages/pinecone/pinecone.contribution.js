/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { registerLanguage } from '../_.contribution.js';
registerLanguage({
    id: 'pinecone',
    extensions: ['.pn'],
    aliases: ['Pinecone', 'pinecone'],
    loader: function () { return import('./pinecone.js'); }
});