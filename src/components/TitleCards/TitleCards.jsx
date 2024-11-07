import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import CardsData from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjEyMmE3OGMyNjViNzE3NWVhYzE4MDdmYjZiM2ExYiIsIm5iZiI6MTczMDk4Mzg5MC43MTAzMzcsInN1YiI6IjY2NDdhZGMwYTE4ZThhNDBjNjYzMDRmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKeeCOGMNf_uHo0cwNDzLpkUOjDpDoSmBP5wpGD1JXU'
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <>
            <div className="titlecards">
                <h2>{title ? title : "Popular on Netflix"}</h2>
                <div className="card-list" ref={cardsRef}>
                    {
                        apiData.map((card, index) => {
                            return (
                                <Link to={`/player/${card.id}`} className='card' key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="Movie-thumbnail" />
                                    <p>
                                        {card.original_title}
                                    </p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TitleCards