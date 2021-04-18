import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './DetailedInfo.css';

const DetailedInfo = ({ movie, addFav, fav, index_id_map, id_index_map }) => {
    const { poster_path, backdrop_path,
        original_title, release_date,
        genres, runtime, tagline, overview,
        budget, revenue, production_companies,
        vote_average, vote_count, id } = movie;
    //console.log(index_id_map, id_index_map);


    const current_index = id_index_map[id]
    const pre_movie_id = index_id_map[current_index - 1];
    const next_movie_id = index_id_map[current_index + 1];

    const PATHROOT = 'https://www.themoviedb.org/t/p/w1920_and_h800_bestv2/';
    const backdrop = PATHROOT + backdrop_path;
    const time = Math.floor(runtime / 60) + 'h' + (runtime % 60) + 'min'
    const genres_list = genres.map((gen) => <span key={gen.id}> {gen.name + ", "}</span>);
    const company_list = production_companies.map((com) => <li key={com.id}>{com.name} </li>);
    console.log(id);

    const fav_ed = () => {
        for (let i = 0; i < fav.length; i++) {
            if (fav[i].id === id) {
                return true;
            }
        }
        return false;
    }
    const [infavList, removeFromlist] = useState(fav_ed);

    const handleFav = (event) => {
        const action = event.target.innerHTML.trim();
        if (action === 'Add to Favorite') {
            addFav([...fav, movie]);
            removeFromlist(true);
        } else {
            const update_fav = fav.filter((m) => m.id != id);
            addFav(update_fav);
            removeFromlist(false);
        }
    }

    const handleReview = (event) => {
        console.log(event.target);
    }

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
                    <span>{genres_list}</span>
                    {time}
                    <p> <span> User Vote:  {'  ' + vote_average + ' / 10 '} </span>Vote Total Num: {' ' + vote_count}</p>
                    <button onClick={handleFav}> {(infavList) ? 'Remove from Favorite' : 'Add to Favorite'}</button>
                    <Link to={'/movieReview/' + id}>
                        <button > Write Movie Review</button>
                    </Link>
                    <h2>{tagline}</h2>
                    <p> {overview}</p>
                    <p>Produce By:</p>
                    <ul>{company_list}</ul>
                    <div className='cost'>
                        <p><span> Budget: </span>  {budget > 0 ? ('$' + budget) : '-'}</p>
                        <p><span> Revenue: </span> {revenue > 0 ? ('$' + revenue) : '-'}</p>
                    </div>
                    <Link to={"/movie/" + pre_movie_id}>
                        <button> Pre</button>
                    </Link>

                    <Link to={"/movie/" + next_movie_id}>
                        <button> Next</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default DetailedInfo
