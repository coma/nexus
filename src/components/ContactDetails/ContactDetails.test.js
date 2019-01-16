import React from 'react';
import { render, wait } from 'react-testing-library';

import Router from '../Router';
import Theme from '../Theme';
import getContact from './getContact';
import ContactDetails from './ContactDetails';

jest.mock('./getContact');
jest.mock('./ContactDetailsCard');
jest.mock('./ContactDetailsLoading');

function App({ id }) {
  return (
    <Router>
      <Theme>
        <ContactDetails match={{ params: { id } }} />
      </Theme>
    </Router>
  );
}

describe('The ContactDetails component', () => {
  it('should render properly', async () => {
    getContact.mockImplementation(id => Promise.resolve({ id }));

    const { queryByText, rerender } = render(<App id="123abc" />);

    expect(queryByText('loading')).toBeTruthy();
    expect(getContact).toHaveBeenCalledWith('123abc');
    await wait(() => expect(queryByText('loading')).toBeNull());
    expect(queryByText('123abc')).toBeTruthy();

    rerender(<App id="456def" />);

    expect(queryByText('loading')).toBeTruthy();
    expect(getContact).toHaveBeenCalledWith('456def');
    await wait(() => expect(queryByText('loading')).toBeNull());
    expect(queryByText('456def')).toBeTruthy();
  });
});
