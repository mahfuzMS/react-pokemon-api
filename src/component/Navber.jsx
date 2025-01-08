import { Link } from "react-router";

export default function Navber() {
    return (
        <div className="navbar bg-base-100 flex justify-center">
            <ul className="menu menu-horizontal text-2xl bg-base-600">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </div>
    );
}
