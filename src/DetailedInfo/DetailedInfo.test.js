import React from 'react';
import DetailedInfo from './DetailedInfo.jsx';

const data = {
  adult: false,
  backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
  belongs_to_collection: {
    id: 535313,
    name: 'Godzilla Collection',
    poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    backdrop_path: '/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg',
  },
  budget: 200000000,
  genres: [
    { id: 28, name: 'Action' },
    { id: 878, name: 'Science Fiction' },
  ],
  homepage: 'https://www.godzillavskong.net/',
  id: 399566,
  imdb_id: 'tt5034838',
  original_language: 'en',
  original_title: 'Godzilla vs. Kong',
  overview:
    'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
  popularity: 4853.228,
  poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
  production_companies: [
    {
      id: 174,
      logo_path: '/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
      name: 'Warner Bros. Pictures',
      origin_country: 'US',
    },
    {
      id: 923,
      logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
      name: 'Legendary Pictures',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2021-03-24',
  revenue: 390623624,
  runtime: 113,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'One Will Fall',
  title: 'Godzilla vs. Kong',
  video: false,
  vote_average: 8.2,
  vote_count: 4907,
};

it('renders the DetailedInfo component correctly', () => {
  const { container } = render(
    <DetailedInfo
      movie={data}
      addFav={() => {}}
      fav={[]}
      index_id_map={{ 1: '399566' }}
      id_index_map={{ 399566: '1' }}
      totalNum={1}
    />,
  );
  expect(container).toMatchSnapshot();
});
