import { createSigningPayload } from '../createSigningPayload';
import * as methods from '../methods';
import {
  getAllMethods,
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  TEST_OPTIONS,
} from '../util';
import {
  DecodedSigningPayload,
  decodeSigningPayload,
} from './decodeSigningPayload';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper function to decode base tx info
 */
export function decodeBaseTxInfo(txInfo: DecodedSigningPayload): void {
  ([
    'blockHash',
    'genesisHash',
    'metadataRpc',
    'nonce',
    'specVersion',
    'tip',
  ] as const).forEach((key) =>
    expect(txInfo[key]).toBe(TEST_BASE_TX_INFO[key])
  );
}

/**
 * Test the [[decodeSigningPayload]] function
 */
function testDecodeSigningPayload(pallet: string, name: string): void {
  it(`should decode ${pallet}::${name}`, () => {
    const signingPayload = createSigningPayload(
      (methods as any)[pallet][name](
        (TEST_METHOD_ARGS as any)[pallet][name],
        TEST_BASE_TX_INFO,
        TEST_OPTIONS
      ),
      TEST_OPTIONS
    );
    const txInfo = decodeSigningPayload(signingPayload, TEST_OPTIONS);

    decodeBaseTxInfo(txInfo);
    expect(txInfo.method.pallet).toBe(pallet);
    expect(txInfo.method.name).toBe(name);
    expect(txInfo.method.args).toEqual((TEST_METHOD_ARGS as any)[pallet][name]);
  });
}

describe('decodeSigningPayload', () => {
  getAllMethods().forEach((method) => testDecodeSigningPayload(...method));
});
