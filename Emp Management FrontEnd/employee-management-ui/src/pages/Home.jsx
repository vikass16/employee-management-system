import { useEffect, useState } from "react";

import EmployeeService from "../service/EmployeeService";
import EmployeeTable from "../components/EmployeeTable";

function Home() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data);
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = (id) => {
    const ok = window.confirm("Are you sure you want to delete this employee?");
    if (!ok) return;

    EmployeeService.deleteEmployee(id).then(() => {
      fetchEmployees();
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-5">Employee List</h2>

      <EmployeeTable employees={employees} onDelete={deleteEmployee} />
    </div>
  );
}

export default Home;

