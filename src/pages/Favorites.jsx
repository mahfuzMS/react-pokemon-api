import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("favoriteList");
        const data = JSON.parse(localData);
        setFavorites(data);
    }, []);

    // console.log(favorites);

    return (
        <div className="favorites m-3">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Total Favorites items: {favorites.length}
            </h2>
            {favorites.length > 0 ? (
                <div className="favorite-cards flex flex-wrap justify-center gap-10 ">
                    {favorites.map((item, index) => (
                        <div key={index} className="card">
                            <div className="card-detals card bg-base-100 w-64 shadow-2xl">
                                <img src={item.url} alt="image" />
                                <h3 className="text-2xl font-bold p-5">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
