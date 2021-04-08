import React, { useState } from 'react';
import './AddGames.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
const AddGames = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const gameData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://ancient-castle-57351.herokuapp.com/addGame`
        console.log(gameData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
        })
            .then(res => console.log('server site response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'cec282c8bfe8acfaf05282f10bbec60d')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="row container">

            <div className="col-md-4 container">
                <ul className="nav">
                    <li>
                        <Link className="manage" to="/manageGames">Manage Games</Link>
                    </li>
                    <li>
                        <Link className="manage" to="/addGames">ADD GAMES</Link>
                    </li>
                    
                    <li>
                        <Link className="manage" >EDIT</Link>
                    </li>
                </ul>



            </div>
            <div className="col-md-4">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" placeholder="games" ref={register} />

                    <input name="price" placeholder="price" ref={register} />

                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddGames;