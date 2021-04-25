import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DetailedInfo.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaHeart } from 'react-icons/fa';
import {
  MdRateReview,
  MdDateRange,
  MdAvTimer,
  MdThumbUp,
  MdVideoLibrary,
  MdMovieFilter,
} from 'react-icons/md';

const DetailedInfo = ({
  movie,
  addFav,
  fav,
  index_id_map,
  id_index_map,
  totalNum,
}) => {
  const {
    poster_path,
    backdrop_path,
    original_title,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
    budget,
    revenue,
    production_companies,
    vote_average,
    vote_count,
    id,
  } = movie;
  const current_index = id_index_map[id];
  const pre_movie_id = index_id_map[current_index - 1];
  const next_movie_id = index_id_map[current_index + 1];

  const PATHROOT = 'https://www.themoviedb.org/t/p/w1920_and_h800_bestv2/';
  const backdrop = PATHROOT + backdrop_path;
  const time = Math.floor(runtime / 60) + ' h ' + (runtime % 60) + ' min';
  const genres_list = [];

  for (let i = 0; i < genres.length; i++) {
    const gen = genres[i];
    if (i === genres.length - 1) {
      genres_list.push(<span key={gen.id}> {gen.name + '  '}</span>);
    } else {
      genres_list.push(<span key={gen.id}> {gen.name + ', '}</span>);
    }
  }
  const company_list = production_companies.map((com) => (
    <li key={com.id}>{com.name} </li>
  ));

  const fav_ed = () => {
    for (let i = 0; i < fav.length; i++) {
      if (fav[i].id === id) {
        return true;
      }
    }
    return false;
  };
  const [infavList, removeFromlist] = useState(fav_ed);

  const handleFav = (event) => {
    addFav([...fav, movie]);
    removeFromlist(true);
  };

  const handleRemoveFav = (event) => {
    const update_fav = fav.filter((m) => m.id !== id);
    addFav(update_fav);
    removeFromlist(false);
  };

  return (
    <div
      className="general"
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      <div className="wrapper">
        {current_index === 0 ? (
          ''
        ) : (
          <Link to={'/movie/' + pre_movie_id} className="sign">
            <FaAngleDoubleLeft />
          </Link>
        )}

        <div className="poster">
          <img
            src={
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
              poster_path
            }
            alt="poster"
          />
        </div>
        <div className="info">
          <h1>{original_title}</h1>
          <time>
            <MdDateRange /> {release_date}{' '}
          </time>
          <span>
            <MdMovieFilter />
            {genres_list}
          </span>
          <span>
            <MdAvTimer />
            {time}
          </span>
          <p>
            {' '}
            <span>
              {' '}
              <MdThumbUp /> {'  ' + vote_average * 10 + ' % '}{' '}
            </span>
            <MdVideoLibrary /> {'  ' + vote_count}
          </p>
          {infavList ? (
            <span
              onClick={handleRemoveFav}
              className="signInDetail liked heart"
            >
              {' '}
              <FaHeart />{' '}
            </span>
          ) : (
            <span onClick={handleFav} className="signInDetail heart">
              {' '}
              <FaHeart />{' '}
            </span>
          )}
          <Link to={'/movieReview/' + id}>
            <span className="signInDetail review_link">
              {' '}
              <MdRateReview />
            </span>
          </Link>
          <h2>{tagline}</h2>
          <p> {overview}</p>
          <p>Produce By:</p>
          <ul>{company_list}</ul>
          <div className="cost">
            <p>
              <span> Budget: </span> {budget > 0 ? '$' + budget : '-'}
            </p>
            <p>
              <span> Revenue: </span> {revenue > 0 ? '$' + revenue : '-'}
            </p>
          </div>
        </div>
        {current_index === totalNum - 1 ? (
          ''
        ) : (
          <Link to={'/movie/' + next_movie_id} className="sign">
            <FaAngleDoubleRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailedInfo;
