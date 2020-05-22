[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/staking/validate"](_src_methods_staking_validate_.md)

# Module: "src/methods/staking/validate"

## Index

### Interfaces

* [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md)

### Functions

* [validate](_src_methods_staking_validate_.md#validate)

## Functions

###  validate

▸ **validate**(`args`: [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/staking/validate.ts:25](https://github.com/paritytech/txwrapper/blob/3f5f77f/src/methods/staking/validate.ts#L25)*

Declare the desire to validate for the origin controller.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [StakingValidateArgs](../interfaces/_src_methods_staking_validate_.stakingvalidateargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*
