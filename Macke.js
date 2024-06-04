import React, { useEffect, useState } from 'react';
import './Macke.css';

const Macke = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('https://catfact.ninja/breeds')
            .then(response => response.json())
            .then(data => {
                setCats(data.data);
            });
    }, []);

    return (
        <div className="cats-container">
            {cats.map((cat, index) => {
                const imageUrl = cat.origin === 'Mutation'
                    ? 'https://t4.ftcdn.net/jpg/05/74/49/87/360_F_574498778_bXhmcAzMCWSn5gVjAvv8FmPzGtROQ2Rq.jpg'
                    : `https://picsum.photos/300?random=${index}`;

                return (
                    <div key={cat.breed} className="cat-card">
                        <img src={imageUrl} alt={cat.breed} className="cat-image" />
                        <p className="cat-breed">Breed: {cat.breed}</p>
                        <p className="cat-pattern">Furr Pattern: {cat.pattern}</p>
                        <p className="cat-country">Country: {cat.country}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Macke;
