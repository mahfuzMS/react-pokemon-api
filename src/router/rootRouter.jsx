import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
// import PokemonSearch from "../pages/PokemonSearch";
import CardDetals from "../pages/CardDetals";
import ViewDetals from "../pages/ViewDetals";
// import Favourite from "../pages/Favourite";
import Favorites from "../pages/Favorites";

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "favorites",
                element: <Favorites />,
            },
            {
                path: "pokemon",
                element: <CardDetals />,
            },
            {
                path: "pokemon/:pokemonName",
                element: <ViewDetals />,
            },
        ],
    },
]);
