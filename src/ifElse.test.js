'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call the first callback when the condition is true', () => {
    const condition = () => true;
    const first = jest.fn(() => 1);
    const second = jest.fn(() => 2);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalledWith();
  });

  it('should call the second callback when the condition is false', () => {
    const condition = () => false;
    const first = jest.fn(() => 1);
    const second = jest.fn(() => 2);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
  });
});
