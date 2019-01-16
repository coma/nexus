import getLetters from './getLetters';

describe('The getLetters helper', () => {
  it('should index by letters and others', () => {
    expect(
      getLetters([
        { id: '3', name: { first: '3' } },
        { id: 'a', name: { first: 'a' } },
        { id: 'x', name: { first: 'X' } },
      ]),
    ).toMatchSnapshot();
  });
});
