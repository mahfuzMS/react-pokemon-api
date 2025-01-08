import React, { useEffect, useState } from "react";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("favoriteList");
        const data = localData ? JSON.parse(localData) : []; // Provide a default empty array if localData is null
        setFavorites(data);
    }, []);

    return (
        <div className="favorites m-3">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Favorites items: {favorites.length}
            </h2>
            {favorites.length > 0 ? (
                <div className="favorite-cards flex flex-wrap justify-center gap-10">
                    {favorites.map((item, index) => (
                        <div key={index} className="card">
                            <div className="card-detals card bg-base-100 w-64 shadow-2xl">
                                <img src={item.url} alt={item.name} />
                                <h3 className="text-xl font-bold p-5">
                                    Name: {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-3xl shadow-xl p-8 mt-20 text-red-600 font-bold">No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
