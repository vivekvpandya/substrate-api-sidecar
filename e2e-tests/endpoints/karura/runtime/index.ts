import { karuraRuntimeSpecEndpoints } from './spec';
import { karuraRuntimeMetadataEndpoints } from './metadata';
import { karuraRuntimeCodeEndpoints } from './code';

export const karuraRuntimeEndpoints = [
    ...karuraRuntimeSpecEndpoints,
    ...karuraRuntimeMetadataEndpoints,
    ...karuraRuntimeCodeEndpoints,
];
