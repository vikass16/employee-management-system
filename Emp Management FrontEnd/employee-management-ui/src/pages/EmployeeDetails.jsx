

import { useEffect, useState } from "react";

import {Link, useParams } from "react-router-dom";

import EmployeeService from "../service/EmployeeService";

function EmployeeDetails() {

    const { id } = useParams();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {

        EmployeeService
            .getEmployeeDetails(id)
            .then((response) => {

                setEmployee(response.data);

            });

    }, [id]);

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            {!employee ? (

                <div className="bg-white shadow-lg rounded-xl p-8">

                    <div className="animate-pulse text-lg font-medium text-gray-600">
                        Loading Employee Details...
                    </div>

                </div>

            ) : (

                <div className="w-full max-w-2xl">

                    <div className="mb-4">
                        <Link
                             to="/"
                             className="inline-flex items-center bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition"
                            >
                            ← Back to Home
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                        {/* Header */}

                        <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-8 text-white">

                            <div className="flex flex-col items-center">

                                <div className="w-24 h-24 rounded-full bg-white text-emerald-600 flex items-center justify-center text-4xl font-bold shadow-lg">

                                    {employee.name
                                        ? employee.name.charAt(0).toUpperCase()
                                        : "E"}

                                </div>

                                <h1 className="text-3xl font-bold mt-4">
                                    {employee.name}
                                </h1>

                                <p className="text-emerald-100 mt-1">
                                    Employee Profile
                                </p>

                            </div>

                        </div>

                        {/* Details Section */}

                        <div className="p-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="bg-gray-50 rounded-xl p-5 border">

                                    <p className="text-sm text-gray-500">
                                        Employee ID
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-1">
                                        {employee.id}
                                    </h3>

                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 border">

                                    <p className="text-sm text-gray-500">
                                        Employee Name
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-1">
                                        {employee.name}
                                    </h3>

                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 border">

                                    <p className="text-sm text-gray-500">
                                        Department
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-1">
                                        {employee.dept || employee.department}
                                    </h3>

                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 border">

                                    <p className="text-sm text-gray-500">
                                        Salary
                                    </p>

                                    <h3 className="text-xl font-semibold text-green-600 mt-1">
                                        ₹{
                                            employee.salary ||
                                            employee.baseSalary
                                        }
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default EmployeeDetails;