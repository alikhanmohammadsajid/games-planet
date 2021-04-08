import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {

    const { name } = useParams();
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('https://ancient-castle-57351.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])
    console.log(name);

    return (
        <div>
            <h5>Games Name : {name}</h5>
            
            

        </div>
    );
};

export default Purchase;