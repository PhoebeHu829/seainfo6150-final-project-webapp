import React from 'react';
import MovieInfo from './MovieInfo.jsx';

describe('MovieInfo tests', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MovieInfo
        movieId={'399566'}
        addFav={() => {}}
        fav={[]}
        index_id_map={{ 1: '399566' }}
        id_index_map={{ 399566: '1' }}
        totalNum={1}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
