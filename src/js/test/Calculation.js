import assert from 'assert';
import Calculation from '../modules/Calculation';

describe('map', () => {
  it('ある範囲から別の範囲に数値を再マップする', () => {
    assert.equal(Calculation.map(50, 0, 100, 0, 200), 100);
  });
});
