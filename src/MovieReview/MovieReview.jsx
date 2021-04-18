import React, { useState, useEffect } from "react";
import './MovieReview.css'
import { Link } from "react-router-dom";

const MoviewReview = ({ data, id, setSubmittedForm, submittedForm }) => {

  console.log(submittedForm);
  const [movie_review, change_movie] = useState(id);
  const movies = data.results;
  const option_list = movies.map((m) => <option value={m.id} key={m.id}> {m.title}</option>);
  const path_map = new Map();
  const movie_title_map = new Map();
  movies.forEach((m) => {
    path_map.set(m.id, m.poster_path);
    movie_title_map.set(m.id, m.title)
  });

  const handleReviewAgain = (event) => {
    setSubmittedForm();
  }
  console.log(id);
  useEffect(() => {
    setSubmittedForm()
  }, [id])

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const iterator = data.values();
    const general_review = iterator.next().value;
    const detail_review = iterator.next().value.trim();
    console.log(general_review, detail_review);
    console.log(movie_title_map.get(movie_review));
    setSubmittedForm({ 'general': general_review, 'detail': detail_review, 'title': movie_title_map.get(parseInt(movie_review)) })
  };

  return (
    <div className='review_content'>
      <Link to={"/movie/" + movie_review}>
        <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + path_map.get(parseInt(movie_review), 10)} />
      </Link>
      {(submittedForm) ?
        <div className='submit_review'> <h2>Thank you review {submittedForm.title}</h2>
          <p>You think {submittedForm.title} overall is {submittedForm.general}</p>
          <p> In detail: {submittedForm.detail}</p>
          <button onClick={handleReviewAgain}> Review Again</button>
        </div>
        :
        <>
          <form onSubmit={onSubmit} className='form'>
            <label htmlFor="myDropdownId">Which moview you want to review?</label>
            <div >
              <select id="myDropdown"
                value={movie_review} onChange={(event) => change_movie(event.target.value)}>
                {option_list}
              </select>
            </div>
            <div className='overview'>
              <label> Overview:</label>
              <div><input type="radio" name="overview_rate" id="nice" value="nice" required /><label htmlFor="nice">Highly Recommand</label></div>
              <div><input type="radio" name="overview_rate" id="good" value="good" /><label htmlFor="good">Overall Good</label></div>
              <div><input type="radio" name="overview_rate" id="ok" value="ok" /><label htmlFor="ok">Average</label></div>
              <div><input type="radio" name="overview_rate" id="bad" value="bad" /><label htmlFor="bad">Don't Waste Your Time</label></div>
            </div>
            <label htmlFor="myTextId">Write down your review:</label>
            <textarea type="text" name="myText" id="myTextId" required />
            <input type="submit" value="Submit" className='button' />
          </form>
        </>
      }
    </div >
  )
}

export default MoviewReview
