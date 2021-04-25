import React from 'react';
import Loading from './Loading.jsx';

it('renders the home component correctly', () => {
  const { container } = render(<Loading />);
  expect(container).toMatchSnapshot();
});
