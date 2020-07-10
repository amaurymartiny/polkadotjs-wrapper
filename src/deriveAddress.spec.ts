import { deriveAddress } from './deriveAddress';
import { KUSAMA_SS58_FORMAT } from './util';

describe('deriveAddress', () => {
  it('should work', () => {
    const address = deriveAddress(
      '0x96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d',
      KUSAMA_SS58_FORMAT
    );

    expect(address).toBe('Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s');
  });
});
