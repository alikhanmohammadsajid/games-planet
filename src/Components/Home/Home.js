import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Games from '../Games/Games';
import ManageGames from '../ManageGames/ManageGames';

const Home = () => {
    
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('https://ancient-castle-57351.herokuapp.com/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    return (
        <div className="row ">
            {
                games.length === 0 && <Spinner className="container" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
            {
                games.map(game =><Games game={game}></Games>)
            }
            {
                games.map(game =><ManageGames game={game}></ManageGames>)
            }
            
            
        </div>
    );
};

export default Home;