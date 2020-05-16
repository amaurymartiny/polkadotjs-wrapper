[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/unbond"](_src_methods_staking_unbond_.md)

# Module: "src/methods/staking/unbond"

## Index

### Interfaces

* [StakingUnbondArgs](../interfaces/_src_methods_staking_unbond_.stakingunbondargs.md)

### Functions

* [unbond](_src_methods_staking_unbond_.md#unbond)

## Functions

###  unbond

▸ **unbond**(`args`: [StakingUnbondArgs](../interfaces/_src_methods_staking_unbond_.stakingunbondargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/unbond.ts:22](https://github.com/paritytech/txwrapper/blob/840775d/src/methods/staking/unbond.ts#L22)*

Construct a transaction to unbond funds from a Stash account. This must be called
by the _Controller_ account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingUnbondArgs](../interfaces/_src_methods_staking_unbond_.stakingunbondargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction.  |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | - |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*
