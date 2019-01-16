import filterAndSort from './filterAndSort';

describe('The filterAndSort helper', () => {
  it('should filter by firts and last name and sort by firts name', () => {
    expect(
      filterAndSort(
        [
          { id: '3', name: { first: '3', last: 'h' } },
          { id: 'al', name: { first: 'Alejandro', last: 'foo' } },
          { id: 'a', name: { first: 'a', last: 'foo' } },
          { id: 'x', name: { first: 'X', last: 'foo' } },
          { id: 'z', name: { first: 'zAlax', last: 'foo' } },
          { id: 'f', name: { first: 'tooo', last: 'lalala' } },
        ],
        'aL',
      ),
    ).toMatchSnapshot();
  });
});
