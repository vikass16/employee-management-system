

import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import EmployeeService from "../service/EmployeeService";

function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({

        name: "",
        dept: "",
        salary: ""

    });

    useEffect(() => {

        EmployeeService
            .getEmployeeDetails(id)
            .then(response => {

                setEmployee(response.data);

            });

    }, []);

    const handleChange = (e) => {

        setEmployee({

            ...employee,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        EmployeeService
            .updateEmployee(id, employee)
            .then(() => {

                navigate("/");

            });

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-lg">

                <div className="mb-4">
        <Link
            to="/"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
            ← Back to Home
        </Link>
    </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                    <div className="bg-linear-to-r from-amber-500 to-orange-500 px-6 py-5">

                        <h1 className="text-2xl font-bold text-white">
                            Edit Employee
                        </h1>

                        <p className="text-orange-100 text-sm mt-1">
                            Update employee information
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-6 space-y-5"
                    >

                        <div>

                            <label className="block text-gray-700 font-medium mb-2">
                                Employee Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                        </div>

                        <div>

                            <label className="block text-gray-700 font-medium mb-2">
                                Department
                            </label>

                            <input
                                type="text"
                                name="dept"
                                value={employee.dept}
                                onChange={handleChange}
                                placeholder="Enter department"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                        </div>

                        <div>

                            <label className="block text-gray-700 font-medium mb-2">
                                Salary
                            </label>

                            <input
                                type="number"
                                name="salary"
                                value={employee.salary}
                                onChange={handleChange}
                                placeholder="Enter salary"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                        </div>

                        <div className="pt-2">

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
                            >
                                Update Employee
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default EditEmployee;