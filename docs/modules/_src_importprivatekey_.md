[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/importPrivateKey"](_src_importprivatekey_.md)

# Module: "src/importPrivateKey"

## Index

### Type aliases

* [KeyringPair](_src_importprivatekey_.md#keyringpair)

### Functions

* [importPrivateKey](_src_importprivatekey_.md#importprivatekey)

## Type aliases

###  KeyringPair

Ƭ **KeyringPair**: *KeyringPairBase*

*Defined in [src/importPrivateKey.ts:10](https://github.com/paritytech/txwrapper/blob/2e195b6/src/importPrivateKey.ts#L10)*

A keyring pair

## Functions

###  importPrivateKey

▸ **importPrivateKey**(`privateKey`: string | Uint8Array, `ss58Format`: number): *KeyringPair*

*Defined in [src/importPrivateKey.ts:18](https://github.com/paritytech/txwrapper/blob/2e195b6/src/importPrivateKey.ts#L18)*

Import a private key and create a KeyringPair.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`privateKey` | string &#124; Uint8Array | - | The private key of the key pair. |
`ss58Format` | number | KUSAMA_SS58_FORMAT | The SS58 encoding of the address.  |

**Returns:** *KeyringPair*
