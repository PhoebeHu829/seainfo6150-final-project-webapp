import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Bar from "./MovieInfo/MovieInfo.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  const [data, fetchData] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=c1a32c68f363e400355e7be1a602cc66&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then((res) => res.json())
      .then((data) => fetchData(data));
  }, []); // Only re-run the effect if count changes
  return (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/baz">Baz</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact >
          <Home movieData={data} />
        </Route>
        <Route
          path="/movie/:movieId/"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              movieId={match.params.movieId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
