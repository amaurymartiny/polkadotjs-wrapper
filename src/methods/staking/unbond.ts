import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingUnbondArgs extends Args {
  /**
   * The number of tokens to unbond.
   */
  value: number;
}

/**
 * Construct a transaction to unbond funds from a Stash account. This must be called
 * by the _Controller_ account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function unbond(
  args: StakingUnbondArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'unbond',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
