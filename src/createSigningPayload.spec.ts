import { balanceTransfer } from './balanceTransfer';
import { createSigningPayload } from './createSigningPayload';
import { TEST_TRANSFER_TX_INFO } from './util/testUtil';

describe('createSigningPayload', () => {
  it('should work', () => {
    const signingPayload = createSigningPayload(
      balanceTransfer(TEST_TRANSFER_TX_INFO)
    );

    expect(signingPayload).toEqual(
      '0x900603ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb580800fb030000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582'
    );
  });
});
