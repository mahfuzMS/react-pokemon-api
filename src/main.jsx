import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { rootRouter } from "./router/rootRouter.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={rootRouter} />
    </StrictMode>
);
