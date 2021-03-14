import { sluging } from '../src';

test('if a string was slugged', () => {
  const word = sluging(`HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display`);

  expect(word).toBe('hp-24mh-fhd-monitor--computer-monitor-with-238inch-ips-display');
});
