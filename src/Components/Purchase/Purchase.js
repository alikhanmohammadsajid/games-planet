import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>its Purchase{id}</h1>
        </div>
    );
};

export default Purchase;