import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Navbar from "./components/Navbar";


function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/add"
                    element={<AddEmployee />}
                />

                <Route
                    path="/edit/:id"
                    element={<EditEmployee />}
                />

                <Route
                    path="/details/:id"
                    element={<EmployeeDetails />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;