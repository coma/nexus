import React from 'react';
import { render } from 'react-testing-library';

import Theme from '../Theme';
import ContactDetailsCard from './ContactDetailsCard';

describe('The ContactDetailsCard component', () => {
  it('should render properly', () => {
    const { container } = render(
      <Theme>
        <ContactDetailsCard
          contact={{
            name: {
              title: 'Dr.',
              first: 'Strange',
              last: 'Love',
            },
            picture: {
              large: 'large.jpg',
              medium: 'medium.jpg',
            },
            email: 'love@the.bomb',
            phone: '12345678',
          }}
        />
      </Theme>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
