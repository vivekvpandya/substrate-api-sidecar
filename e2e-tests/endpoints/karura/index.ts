import { karuraRuntimeEndpoints } from './runtime';
import { karuraBlockEndpoints } from './blocks';
import { karuraAccountsEndpoints } from './accounts';

export const karuraEndpoints = {
    blocks : karuraBlockEndpoints,
    accounts : karuraAccountsEndpoints,
    paras : [],
    runtime: karuraRuntimeEndpoints,
}
