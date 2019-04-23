import {formatters} from 'web3-core-helpers';
import AbstractMethod from '../../../../lib/methods/AbstractMethod';
import VmoduleMethod from '../../../../src/methods/debug/VmoduleMethod';

// Mocks
jest.mock('web3-core-helpers');

/**
 * VmoduleMethod test
 */
describe('VmoduleMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new VmoduleMethod(null, formatters, {});
    });

    it('constructor check', () => {
        expect(method).toBeInstanceOf(AbstractMethod);

        expect(method.rpcMethod).toEqual('debug_vmodule');

        expect(method.parametersAmount).toEqual(1);

        expect(method.utils).toEqual(null);

        expect(method.formatters).toEqual(formatters);
    });
});
