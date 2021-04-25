import React from 'react';
import MovieReview from './MovieReview.jsx';

const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
      genre_ids: [14, 28, 12, 878, 53],
      id: 460465,
      original_language: 'en',
      original_title: 'Mortal Kombat',
      overview: '.',
      popularity: 4901.131,
      poster_path: '/2xmx8oPlbDaxTjHsIOZvOt5L3aJ.jpg',
      release_date: '2021-04-07',
      title: 'Mortal Kombat',
      video: false,
      vote_average: 8.1,
      vote_count: 980,
    },
  ],
};

it('renders the MovieReview component correctly', () => {
  const { container } = render(
    <MovieReview
      data={data}
      id={'399655'}
      submittedForm={[]}
      setSubmittedForm={() => {}}
    />,
  );
  expect(container).toMatchSnapshot();
});
