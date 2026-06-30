import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">

            <h1 className="text-xl font-bold">
                Employee Management
            </h1>

            <Link
                to="/add"
                className="bg-white text-blue-600 px-4 py-2 rounded"
            >
                Add Employee
            </Link>

        </nav>
    );
}

export default Navbar;