/**
 * @ignore
 */

/**
 * Blank comment to make typedoc work
 */

import { createType, Metadata, TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';

import { BLOCKTIME, KUSAMA_SS58_FORMAT } from '../util/constants';
import { BaseTxInfo } from '../util/types';
import { getMethodData } from './decodeUtils';

interface DecodedWithMethod extends BaseTxInfo {
  methodData: any;
}

export type DecodedSignedTx = Omit<
  DecodedWithMethod,
  'blockHash' | 'blockNumber' | 'genesisHash' | 'specVersion' | 'version'
>;

/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param metadataRpc - The SCALE-encoded metadata, as a hex string. Can be
 * retrieved via the RPC call `state_getMetadata`.
 */
export function decodeSignedTx(
  signedTx: string,
  metadataRpc: string
): DecodedSignedTx {
  const registry = new TypeRegistry();
  registry.setMetadata(new Metadata(registry, metadataRpc));

  const tx = createType(registry, 'Extrinsic', hexToU8a(signedTx), {
    isSigned: true
  });

  const methodInfo = getMethodData(tx.method);

  setSS58Format(KUSAMA_SS58_FORMAT);

  return {
    address: tx.signer.toString(),
    methodData: methodInfo,
    metadataRpc,
    nonce: tx.nonce.toNumber(),
    tip: tx.tip.toNumber(),
    validityPeriod: tx.era.asMortalEra.period.toNumber() * BLOCKTIME
  };
}
