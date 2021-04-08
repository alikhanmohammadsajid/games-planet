import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Games.css'


const Games = ({ game }) => {
    const history = useHistory()
    // const handlePurchase = () => {
        
    //     history.push(`/purchase/${game.name}`);
    //     console.log(game);
    // }
    return (
        <div className="col-md-4 container m-auto game">
            <img className="img" src={game.imageURL} alt=""/>
            <h5 className="game">${game.price}</h5>
            
            <h5 className="game">| {game.name} |</h5>
            <button className="btn btn-warning game"  variant="contained"><Link to={`/purchase/${game.name}`}>Buy Now</Link></button>

        </div>
    );
};

export default Games;