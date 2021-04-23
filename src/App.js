import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./Home/Home.jsx";
import MovieInfo from "./MovieInfo/MovieInfo.jsx";
import FavoriteMovie from "./FavoriteMovie/FavoriteMovie.jsx";
import MovieReview from './MovieReview/MovieReview.jsx';
import Error from "./Error/Error.jsx";
import Loading from "./Loading/Loading";
import Contact from './Contact/Contact'

function App() {
  const [data, fetchData] = useState();
  const [fav, addFav] = useState([]);
  const [submittedForm, setSubmittedForm] = useState();
  const [index_id_map, setIndexMap] = useState({});
  const [id_index_map, setIdMap] = useState({});
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=c1a32c68f363e400355e7be1a602cc66&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;
        let tmp1 = {}
        let tmp2 = {}
        for (let i = 0; i < results.length; i++) {
          const id = results[i].id
          tmp1 = {
            ...tmp1,
            [i]: id
          }
          tmp2 = {
            ...tmp2,
            [id]: i
          }
        }
        setIndexMap(tmp1)
        setIdMap(tmp2)
        fetchData(data);
      });
  }, []); // Only re-run the effect if count changes

  return (
    <>
      {(data) ?
        (<>
          <header>
            <nav>
              <ul>
                {/* these links should show you how to connect up a link to a specific route */}
                <li>
                  <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                  <Link to="/favoirte" style={{ textDecoration: 'none' }}>Favoirte Movie</Link>
                </li>
                <li>
                  <Link to={"/movieReview/" + data.results[0].id} style={{ textDecoration: 'none' }}>Movie Review </Link>

                </li>
                <li className='app_signup'>
                  {(user) ? <span>{'Hello, ' + user.firstName} </span> : <Link to="/contact" style={{ textDecoration: 'none' }}>Sign Up</Link>}
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/" exact >
              <Home movieData={data} />
            </Route>
            <Route
              path="/movie/:movieId"
              exact
              render={({ match }) => (
                <MovieInfo
                  movieId={match.params.movieId}
                  addFav={addFav}
                  fav={fav}
                  index_id_map={index_id_map}
                  id_index_map={id_index_map}
                  totalNum={data.results.length}
                />
              )}
            />
            <Route
              path="/favoirte"
              exact
              render={() => <FavoriteMovie fav_list={fav} set_fav={addFav} first_movie={index_id_map[0]} />}
            />

            <Route path="/movieReview/:id/"
              render={({ match }) => (<MovieReview data={data} id={match.params.id}
                submittedForm={submittedForm} setSubmittedForm={setSubmittedForm} />)}
            />
            <Route path="/contact" exact >
              <Contact user={user} setUser={setUser} />
            </Route>
            <Route component={Error} />
          </Switch>
        </>) : (<Loading />)
      }
    </>
  );
}

export default App;
