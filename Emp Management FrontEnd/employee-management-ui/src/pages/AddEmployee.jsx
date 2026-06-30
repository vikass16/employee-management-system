// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import EmployeeService from "../service/EmployeeService";

// function AddEmployee() {

//     const navigate = useNavigate();

//     const [employee, setEmployee] = useState({

//         name: "",
//         dept: "",
//         salary: ""

//     });

//     const handleChange = (e) => {

//         setEmployee({

//             ...employee,
//             [e.target.name]: e.target.value

//         });

//     };

//     const handleSubmit = (e) => {

//         e.preventDefault();

//         EmployeeService
//             .addEmployee(employee)
//             .then(() => {

//                 navigate("/");

//             });

//     };

//     return (

//         <div className="max-w-md mx-auto mt-10">

//             <form
//                 onSubmit={handleSubmit}
//                 className="space-y-4"
//             >

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     onChange={handleChange}
//                     className="border p-2 w-full"
//                 />

//                 <input
//                     type="text"
//                     name="dept"
//                     placeholder="Department"
//                     onChange={handleChange}
//                     className="border p-2 w-full"
//                 />

//                 <input
//                     type="number"
//                     name="salary"
//                     placeholder="Salary"
//                     onChange={handleChange}
//                     className="border p-2 w-full"
//                 />

//                 <button
//                     className="bg-green-600 text-white px-4 py-2 rounded"
//                 >
//                     Save
//                 </button>

//             </form>

//         </div>
//     );
// }

// export default AddEmployee;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import EmployeeService from "../service/EmployeeService";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({

        name: "",
        dept: "",
        salary: ""

    });

    const handleChange = (e) => {

        setEmployee({

            ...employee,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        EmployeeService
            .addEmployee(employee)
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

                    <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-5">

                        <h1 className="text-2xl font-bold text-white">
                            Add Employee
                        </h1>

                        <p className="text-blue-100 text-sm mt-1">
                            Create a new employee record
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
                                placeholder="Enter employee name"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />

                        </div>

                        <div>

                            <label className="block text-gray-700 font-medium mb-2">
                                Department
                            </label>

                            <input
                                type="text"
                                name="dept"
                                placeholder="Enter department"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />

                        </div>

                        <div>

                            <label className="block text-gray-700 font-medium mb-2">
                                Salary
                            </label>

                            <input
                                type="number"
                                name="salary"
                                placeholder="Enter salary"
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />

                        </div>

                        <div className="pt-2">

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
                            >
                                Save Employee
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AddEmployee;