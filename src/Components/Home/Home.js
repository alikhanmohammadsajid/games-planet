import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';

const Home = () => {
    
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    return (
        <div className="row ">
            
            {
                games.map(game =><Games game={game}></Games>)
            }
            
            
            
        </div>
    );
};

export default Home;