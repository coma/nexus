import delay from './delay';
import onlyTheLast from './onlyTheLast';

describe('The onlyTheLast util', () => {
  it('should only take the last promise resolved', async () => {
    const then = jest.fn();
    const call = onlyTheLast(delay);

    call(10, 'A').then(then);
    call(0, 'B').then(then);
    await delay(10);

    expect(then).toHaveBeenCalledTimes(1);
    expect(then).toHaveBeenCalledWith('B');
  });

  it('should allow consecutive results', async () => {
    const then = jest.fn();
    const call = onlyTheLast(delay);

    await call(0, 'A').then(then);
    await call(10, 'B').then(then);

    expect(then).toHaveBeenCalledTimes(2);
    expect(then).toHaveBeenLastCalledWith('B');
  });

  it('should reject promises', () => {
    const error = new Error('boom!');
    const call = onlyTheLast(() => Promise.reject(error));

    return expect(call()).rejects.toBe(error);
  });
});
