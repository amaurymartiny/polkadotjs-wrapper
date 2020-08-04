[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/proxy/proxy"](../modules/_src_methods_proxy_proxy_.md) › [ProxyProxy](_src_methods_proxy_proxy_.proxyproxy.md)

# Interface: ProxyProxy

## Hierarchy

* object

  ↳ **ProxyProxy**

## Index

### Properties

* [call](_src_methods_proxy_proxy_.proxyproxy.md#call)
* [forceProxyType](_src_methods_proxy_proxy_.proxyproxy.md#forceproxytype)
* [real](_src_methods_proxy_proxy_.proxyproxy.md#real)

## Properties

###  call

• **call**: *object | string*

*Defined in [src/methods/proxy/proxy.ts:23](https://github.com/paritytech/txwrapper/blob/2e195b6/src/methods/proxy/proxy.ts#L23)*

The call to be made by the `real` account.
To take advantage of txwrapper methods, this could be UnsignedTransaction.method.

___

###  forceProxyType

• **forceProxyType**: *string*

*Defined in [src/methods/proxy/proxy.ts:18](https://github.com/paritytech/txwrapper/blob/2e195b6/src/methods/proxy/proxy.ts#L18)*

Specify the exact proxy type to be used and checked for this call.

___

###  real

• **real**: *string*

*Defined in [src/methods/proxy/proxy.ts:14](https://github.com/paritytech/txwrapper/blob/2e195b6/src/methods/proxy/proxy.ts#L14)*

Dispatch the given `call` from an account that the sender is authorized for
 through, `add_proxy`.
