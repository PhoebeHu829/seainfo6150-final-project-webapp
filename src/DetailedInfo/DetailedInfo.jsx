import React from 'react'
import './DetailedInfo.css';

const DetailedInfo = ({ movie }) => {
    console.log(movie);
    const { poster_path, backdrop_path,
        original_title, release_date,
        genres, runtime, tagline, overview,
        budget, revenue, production_companies } = movie;
    const PATHROOT = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
    const backdrop = PATHROOT + backdrop_path;
    const time = Math.floor(runtime / 60) + 'h' + (runtime % 60) + 'min'
    const genres_list = genres.map((gen) => <span key={gen.id}> {gen.name + ", "}</span>);
    const company_list = production_companies.map((com) => <span key={com.id}>{com.name} </span>)
    return (
        <div className='general' style={{
            backgroundImage: `url(${backdrop})`
        }}>
            <div className='wrapper'>
                <div className='poster'>
                    <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + poster_path} />
                </div>
                <div className='info'>
                    <h1>{original_title}</h1>
                    <time>{release_date} </time>
                    {genres_list}
                    {time}
                    <h2>{tagline}</h2>
                    <p> {overview}</p>
                </div>
            </div>
        </div >
    )
}

export default DetailedInfo
