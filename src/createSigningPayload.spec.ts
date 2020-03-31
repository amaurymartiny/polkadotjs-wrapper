import { createSigningPayload } from './createSigningPayload';
import { balances } from './methods';
import { TEST_BASE_TX_INFO, TEST_METHOD_ARGS } from './util/testUtil';

describe('createSigningPayload', () => {
  it('should work', () => {
    const signingPayload = createSigningPayload(
      balances.transferKeepAlive(
        TEST_METHOD_ARGS.balances.transfer,
        TEST_BASE_TX_INFO
      )
    );

    expect(signingPayload).toEqual(
      '0x8c060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb580800fb030000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582'
    );
  });
});
