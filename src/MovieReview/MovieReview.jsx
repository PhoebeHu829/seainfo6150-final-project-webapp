import React, { useState, useEffect } from 'react';
import './MovieReview.css';
import { Link, useHistory } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MoviewReview = ({ data, id, setSubmittedForm, submittedForm }) => {
  const history = useHistory({});
  const [movie_review, change_movie] = useState(id);
  const movies = data.results;
  const option_list = movies.map((m) => (
    <option value={m.id} key={m.id}>
      {' '}
      {m.title}
    </option>
  ));
  const path_map = new Map();
  const movie_title_map = new Map();
  movies.forEach((m) => {
    path_map.set(m.id, m.poster_path);
    movie_title_map.set(m.id, m.title);
  });

  const handleReviewAgain = (event) => {
    setSubmittedForm();
  };

  useEffect(() => {
    setSubmittedForm();
  }, [id, setSubmittedForm]);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const iterator = data.values();
    const general_review = iterator.next().value;
    let general_review_back;
    switch (general_review) {
      case '4': {
        general_review_back = (
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        );
        break;
      }
      case '3': {
        general_review_back = (
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        );
        break;
      }
      case '2': {
        general_review_back = (
          <span>
            <FaStar />
            <FaStar />
          </span>
        );
        break;
      }
      default:
        general_review_back = (
          <span>
            <FaStar />
          </span>
        );
    }

    const detail_review = iterator.next().value.trim();
    setSubmittedForm({
      general: general_review_back,
      detail: detail_review,
      title: movie_title_map.get(parseInt(movie_review)),
    });
  }

  return (
    <div className="review_content">
      <Link to={'/movie/' + movie_review}>
        <img
          src={
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
            path_map.get(parseInt(id), 10)
          }
          alt="poster"
        />
      </Link>
      <form onSubmit={onSubmit} className="form">
        <label htmlFor="myDropdownId">Which moview you want to review?</label>
        <div>
          <select
            id="myDropdown"
            value={id}
            onChange={(event) => {
              change_movie(event.target.value);
              history.push('/movieReview/' + event.target.value);
            }}
          >
            {option_list}
          </select>
        </div>
        {submittedForm ? (
          <div className="submit_review">
            {' '}
            <h2>Thank you review {submittedForm.title}</h2>
            {submittedForm.general}
            <p> {submittedForm.detail}</p>
            <button onClick={handleReviewAgain}> Review Again</button>
          </div>
        ) : (
          <>
            <div className="overview">
              <div>
                <input
                  type="radio"
                  name="overview_rate"
                  id="nice"
                  value="4"
                  required
                />
                <label htmlFor="nice">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </label>
              </div>
              <div>
                <input type="radio" name="overview_rate" id="good" value="3" />
                <label htmlFor="good">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </label>
              </div>
              <div>
                <input type="radio" name="overview_rate" id="ok" value="2" />
                <label htmlFor="ok">
                  <FaStar />
                  <FaStar />
                </label>
              </div>
              <div>
                <input type="radio" name="overview_rate" id="bad" value="1" />
                <label htmlFor="bad">
                  <FaStar />
                </label>
              </div>
            </div>
            <label htmlFor="myTextId">Write down your review:</label>
            <textarea type="text" name="myText" id="myTextId" required />
            <input type="submit" value="Submit" className="button" />
          </>
        )}
      </form>
      )}
    </div>
  );
};

export default MoviewReview;
