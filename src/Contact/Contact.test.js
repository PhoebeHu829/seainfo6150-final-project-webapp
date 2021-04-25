import React from 'react';
import Contact from './Contact.jsx';

it('renders the Contact component correctly', () => {
  const { container } = render(<Contact user={''} setUser={() => {}} />);
  expect(container).toMatchSnapshot();
});
