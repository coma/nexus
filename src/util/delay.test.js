import delay from './delay';

describe('The delay util', () => {
  it('should delay', async () => {
    const time = 123;
    const start = Date.now();
    const result = await delay(time, time);
    const diff = Date.now() - start;

    expect(result).toBe(time);
    expect(Math.round(diff / time)).toBe(1);
  });
});
