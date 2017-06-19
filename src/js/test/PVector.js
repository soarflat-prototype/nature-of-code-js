import assert from 'assert';
import PVector from '../modules/PVector';

describe('add', () => {
  it('メンバ変数(x, y)に引数のメンバ変数(x, y)を加算する', () => {
    const location = new PVector(5, -10);
    const velocity = new PVector(10, 5);

    location.add(velocity);

    assert.equal(location.x, 15, '10 + 5 = 15');
    assert.equal(location.y, -5, '5 - 10 = -5');
  });
});

describe('sub', () => {
  it('メンバ変数(x, y)に引数のメンバ変数(x, y)を減算する', () => {
    const location = new PVector(5, 10);
    const velocity = new PVector(10, -5);

    location.sub(velocity);

    assert.equal(location.x, -5, '5 - 10 = 5');
    assert.equal(location.y, 15, '10 - -5 = 15');
  });
});

describe('mult', () => {
  it('メンバ変数(x, y)を引数で乗算する', () => {
    const location = new PVector(5, 10);
    const velocity = new PVector(1.5, -3.3);

    location.mult(2);
    velocity.mult(2);

    assert.equal(location.x, 10, '5 * 2 = 10');
    assert.equal(location.y, 20, '10 * 2 = 20');
    assert.equal(velocity.x, 1.5 * 2, '1.5 * 2 = 3');
    assert.equal(velocity.y, -3.3 * 2, '-3.3 * 2 = -6.6');
  });
});

describe('div', () => {
  it('メンバ変数(x, y)を引数で除算する', () => {
    const location = new PVector(10, 20);
    const velocity = new PVector(5, -3);

    location.div(2);
    velocity.div(2);

    assert.equal(location.x, 5, '10 / 2 = 5');
    assert.equal(location.y, 10, '20 / 2 = 10');
    assert.equal(velocity.x, 5 / 2, '5 / 2 = 2.5');
    assert.equal(velocity.y, -3 / 2, '-3 / 2 = -1.5');
  });
});
