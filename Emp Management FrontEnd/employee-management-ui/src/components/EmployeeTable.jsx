// import { Link } from "react-router-dom";

// function EmployeeTable({ employees, onDelete }) {

//     return (
//         <table className="w-full border">

//             <thead>
//                 <tr className="bg-gray-200">

//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Actions</th>

//                 </tr>
//             </thead>

//             <tbody>

//                 {
//                     employees.map(employee => (

//                         <tr
//                             key={employee.id}
//                             className="text-center border"
//                         >

//                             <td>{employee.id}</td>

//                             <td>{employee.name}</td>

//                             <td>

//                                 <Link
//                                     to={`/edit/${employee.id}`}
//                                     className="bg-yellow-500 px-3 py-1 rounded mr-2"
//                                 >
//                                     Edit
//                                 </Link>

//                                 <Link
//                                     to={`/details/${employee.id}`}
//                                     className="bg-blue-500 px-3 py-1 rounded mr-2"
//                                 >
//                                     Details
//                                 </Link>

//                                 <button
//                                     onClick={() => onDelete(employee.id)}
//                                     className="bg-red-500 px-3 py-1 rounded text-white"
//                                 >
//                                     Delete
//                                 </button>

//                             </td>

//                         </tr>

//                     ))
//                 }

//             </tbody>

//         </table>
//     );
// }

// export default EmployeeTable;



import { Link } from "react-router-dom";

function EmployeeTable({ employees, onDelete }) {

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">

            <div className="px-6 py-4 border-b bg-linear-to-r from-blue-600 to-indigo-600">
                <h2 className="text-xl font-bold text-white">
                    Employee Records
                </h2>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm">

                            <th className="px-6 py-4 text-left">
                                Employee ID
                            </th>

                            <th className="px-6 py-4 text-left">
                                Employee Name
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {employees.length > 0 ? (
                            employees.map((employee) => (

                                <tr
                                    key={employee.id}
                                    className="border-b hover:bg-blue-50 transition duration-200"
                                >

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {employee.id}
                                    </td>

                                    <td className="px-6 py-4 text-gray-700">
                                        {employee.name}
                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-center gap-3">

                                            <Link
                                                to={`/edit/${employee.id}`}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                                            >
                                                Edit
                                            </Link>

                                            <Link
                                                to={`/details/${employee.id}`}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                                            >
                                                Details
                                            </Link>

                                            <button
                                                onClick={() => onDelete(employee.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="text-center py-8 text-gray-500"
                                >
                                    No employees found.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default EmployeeTable;