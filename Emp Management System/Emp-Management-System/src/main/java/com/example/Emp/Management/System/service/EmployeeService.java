package com.example.Emp.Management.System.service;

import com.example.Emp.Management.System.entity.Employee;
import com.example.Emp.Management.System.model.EmployeeAddRequest;
import com.example.Emp.Management.System.model.EmployeeAddResponse;
import com.example.Emp.Management.System.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public EmployeeAddResponse addEmployee(EmployeeAddRequest request){
        Employee employee = new Employee();
        employee.setName(request.getName());
        employee.setDept(request.getDept());
        if(request.getSalary() < 0 || request.getSalary()>500000){
            throw new IllegalArgumentException("Salary is out of the permissible range");
        }
        employee.setSalary(request.getSalary());

        Employee storedEmployee  = repository.save(employee);

        return new EmployeeAddResponse(storedEmployee.getId(), storedEmployee.getName());
    }

    // This is used gto get Employees entire Data
//    public List<Employee> getAllEmployees(){
//       return repository.findAll();
//    }

    // And this is to get Only mentioned data
    public List<EmployeeAddResponse> getAllEmployees(){
        List<Employee> dbEmployee = repository.findAll();
        List<EmployeeAddResponse> employees = new ArrayList<>();

        for(Employee e : dbEmployee){
            EmployeeAddResponse ear = new EmployeeAddResponse();
            ear.setId(e.getId());
            ear.setName(e.getName());

            employees.add(ear);
        }
        return employees;
    }


    public EmployeeAddResponse getEmployee(Long id){
        if(id == null) return null;

        Employee dbEmployee = repository.findById(id).orElse(null);
        return dbEmployee != null ? new EmployeeAddResponse(dbEmployee.getId(), dbEmployee.getName()) : null;
    }


    public List<Employee> getAllEmployeeOfDepartment(String dept){
        return repository.findByDept(dept);
    }

    public Employee updateEmployee(EmployeeAddRequest request, Long id){
        if(id == null || request == null) return null;

        Employee dbEmployee = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("No Employee Found"));

        if(request.getName() != null){
            dbEmployee.setName(request.getName());
        }
        if(request.getDept() != null){
            dbEmployee.setDept(request.getDept());
        }
        if(request.getSalary() != null){
            dbEmployee.setSalary(request.getSalary());
        }

        return repository.save(dbEmployee);
    }

    public void removeEmployee(Long id){
        repository.deleteById(id);
    }

    public void removeAllEmployee(){
        repository.deleteAll();
    }

    public Employee getEmployeeDetails(Long id){

        return repository.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException("Employee Not Found"));
    }

}
