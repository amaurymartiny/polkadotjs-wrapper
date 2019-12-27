import { balanceTransfer } from './balanceTransfer';
import { createSignedTx } from './createSignedTx';
import { createSigningPayload } from './createSigningPayload';
import { getTxHash } from './getTxHash';
import { signWithAlice, TEST_TRANSFER_TX_INFO } from './util/testUtil';

describe('createSignedTx', () => {
  it('should work', async done => {
    const unsigned = balanceTransfer(TEST_TRANSFER_TX_INFO);
    const signingPayload = createSigningPayload(unsigned);
    const signature = await signWithAlice(signingPayload);
    const signedTx = createSignedTx(unsigned, signature);

    const txHash = getTxHash(signedTx);
    expect(txHash).toBe(
      '0x0c323ba9dc9579afe025e8f521b94f246499291e815cc2c747dc57ecd221e1e3'
    );

    done();
  });
});
