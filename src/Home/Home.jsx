import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

const Home = ({ movieData }) => {
    const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const data = movieData.results;
    const movieList = data.map((movie) => {
        const date = new Date(movie.release_date);
        const realse_month = MONTH[date.getMonth()];
        const realse_day = date.getDate();
        return <li key={movie.id}>
            <div className='card' >
                <Link to={"/movie/" + movie.id}>
                    <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt="poster" />
                </Link>
                <div className='content'>
                    <div className="rate">
                        <span> {movie.vote_average * 10 + '%'}</span>
                    </div>
                    <p><Link to={"/movie/" + movie.id}
                        style={{ textDecoration: 'none' }} >
                        {movie.original_title}</Link></p>
                    <time>{realse_month + ' ' + (realse_day + 1) + ", " + date.getFullYear()}</time>
                </div>
            </div>
        </li >
    })

    return (
        <div>
            <ul className='movieCards'>
                {movieList}
            </ul>
        </div>

    )
}

export default Home
