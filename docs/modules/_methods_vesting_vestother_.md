[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["methods/vesting/vestOther"](_methods_vesting_vestother_.md)

# Module: "methods/vesting/vestOther"

## Index

### Interfaces

* [VestingVestOtherArgs](../interfaces/_methods_vesting_vestother_.vestingvestotherargs.md)

### Functions

* [vestOther](_methods_vesting_vestother_.md#vestother)

## Functions

###  vestOther

▸ **vestOther**(`args`: [VestingVestOtherArgs](../interfaces/_methods_vesting_vestother_.vestingvestotherargs.md), `info`: [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md)): *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/vesting/vestOther.ts:21](https://github.com/paritytech/txwrapper/blob/64624af/src/methods/vesting/vestOther.ts#L21)*

Unlock any vested funds of a `target` account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [VestingVestOtherArgs](../interfaces/_methods_vesting_vestother_.vestingvestotherargs.md) | - |
`info` | [BaseTxInfo](../interfaces/_util_types_.basetxinfo.md) | Information required to construct the transaction.  |

**Returns:** *[UnsignedTransaction](../interfaces/_util_types_.unsignedtransaction.md)*
