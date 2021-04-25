import React from 'react';
import Favorite from './FavoriteMovie.jsx';

it('renders the favorite component correctly', () => {
  const { container } = render(
    <Favorite fav_list={[]} set_fav={() => {}} first_movie={'399655'} />,
  );
  expect(container).toMatchSnapshot();
});
