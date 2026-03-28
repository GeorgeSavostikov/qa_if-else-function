'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should ', () => {
    const condition = () => true;
    const first = jest.fn(() => 1);
    const second = jest.fn(() => 2);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should ', () => {
    const condition = () => false;
    const first = jest.fn(() => 1);
    const second = jest.fn(() => 2);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
