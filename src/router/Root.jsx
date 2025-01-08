import React from "react";
import Navber from "../component/Navber";
import { Outlet } from "react-router";

export default function Root() {
    return (
        <>
            <div>
                <Navber />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
