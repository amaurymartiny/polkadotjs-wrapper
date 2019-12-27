import { balanceTransfer } from '../balanceTransfer';
import { createSignedTx } from '../createSignedTx';
import { createSigningPayload } from '../createSigningPayload';
import {
  metadataRpc,
  signWithAlice,
  TEST_TRANSFER_TX_INFO
} from '../util/testUtil';
import { decodeSignedTx } from './decodeSignedTx';

describe('decodeSignedTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);

    const signedTx = createSignedTx(unsigned, signature);

    const txInfo = decodeSignedTx(signedTx, metadataRpc);

    ([
      'address',
      'amount',
      'keepAlive',
      'metadataRpc',
      'nonce',
      'tip',
      'to'
    ] as const).forEach(key =>
      expect(txInfo[key]).toBe(TEST_TRANSFER_TX_INFO[key])
    );

    expect(txInfo.validityPeriod).toBeGreaterThanOrEqual(
      TEST_TRANSFER_TX_INFO.validityPeriod
    );

    done();
  });
});
