import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { bond } from './bond';

describe('staking::bond', () => {
  it('should work', () => {
    const unsigned = bond(TEST_METHOD_ARGS.staking.bond, TEST_BASE_TX_INFO);

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x07008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100'
    );
  });

  it('should take "staked" or "Staked" as payee', () => {
    const unsignedLowerCase = bond(
      { ...TEST_METHOD_ARGS.staking.bond, payee: 'staked' },
      TEST_BASE_TX_INFO
    );
    const unsignedCapitalized = bond(
      { ...TEST_METHOD_ARGS.staking.bond, payee: 'Staked' },
      TEST_BASE_TX_INFO
    );

    expect(unsignedLowerCase.method).toBe(unsignedCapitalized.method);
  });
});
