import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

const Home = (props) => {
    console.log(props);
    const { movieData } = props;
    const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let movieList;
    if (movieData) {
        const data = movieData.results;
        movieList = data.map((movie) => {
            const date = new Date(movie.release_date);
            const realse_month = MONTH[date.getMonth()]
            const realse_day = date.getDate()

            return <li key={movie.id}>
                <div className='card' >
                    <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} />
                    <div className='content'>
                        <div className="rate">
                            <span> {movie.vote_average * 10 + '%'}</span>
                        </div>
                        <p><Link to={"/movie/" + movie.id} >{movie.original_title}</Link></p>
                        <time>{realse_month + ' ' + (realse_day + 1) + ", " + date.getFullYear()}</time>
                    </div>
                </div>
            </li >
        })
    }

    return (
        <div>
            {movieList ?
                <ul className='movieCards'>
                    {movieList}
                </ul> : 'loading'}

        </div>

    )
}

export default Home
