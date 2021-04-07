import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css'


const Games = ({ game }) => {
    
    return (
        <div className="col-md-4 container m-auto game">
            <img className="img" src={game.imageURL} alt=""/>
            <h5 className="game">${game.price}</h5>
            <h5 className="game">|{game.name}|</h5>
            <button className="btn btn-warning game"><Link to="/purchase">Buy Now</Link></button>

            {/* <button onClick={() => handlePurchase} variant="contained" color="primary">Purchase</button> */}
        </div>
    );
};

export default Games;