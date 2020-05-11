import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { transfer } from './transfer';

describe('balances::transfer', () => {
  it('should work', () => {
    const unsigned = transfer(
      TEST_METHOD_ARGS.balances.transfer,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });

  it('should accept big numbers as string', () => {
    const unsigned = transfer(
      {
        ...TEST_METHOD_ARGS.balances.transfer,
        value: '9007199254740996', // MAX_SAFE_INTEGER + 5
      },
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x060096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d0f04000000000020'
    );
  });
});
