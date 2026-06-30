import axios from "axios";

const BASE_URL = "http://localhost:8081/employee";

const getAllEmployees = () =>
    axios.get(`${BASE_URL}/all`);

const getEmployeeDetails = (id) =>
    axios.get(`${BASE_URL}/details/${id}`);

const addEmployee = (employee) =>
    axios.post(`${BASE_URL}/add`, employee);

const updateEmployee = (id, employee) =>
    axios.put(`${BASE_URL}/update/${id}`, employee);

const deleteEmployee = (id) =>
    axios.delete(`${BASE_URL}/delete/${id}`);

export default {
    getAllEmployees,
    getEmployeeDetails,
    addEmployee,
    updateEmployee,
    deleteEmployee
};