package com.example.Emp.Management.System.controller;

import com.example.Emp.Management.System.entity.Employee;
import com.example.Emp.Management.System.model.EmployeeAddRequest;
import com.example.Emp.Management.System.model.EmployeeAddResponse;
import com.example.Emp.Management.System.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;


    @PostMapping("/add")
    public EmployeeAddResponse addEmployee(@RequestBody EmployeeAddRequest request){

        return employeeService.addEmployee(request);
    }

    // This is to get Employees Entire data
//    @GetMapping("/all")
//    public List<Employee> getAllEmployees(){
//        return employeeService.getAllEmployees();
//    }

    // And this is to get Employees Specific (only mentioned) data which is mentioned in 'EmployeeAddResponse'

    @GetMapping("/all")
    public List<EmployeeAddResponse> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/id/{id}")
    public EmployeeAddResponse getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployee(id);
    }

    @GetMapping("/dept/{dept}")
    public List<Employee> getEmployeeOfDepartment(@PathVariable String dept){
        return employeeService.getAllEmployeeOfDepartment(dept);
    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@RequestBody EmployeeAddRequest request, @PathVariable Long id){
        return employeeService.updateEmployee(request,id);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String,String> deleteEmployee(@PathVariable Long id){
        employeeService.removeEmployee(id);

        return Map.of("status","Employee has been deleted..");
    }

    @DeleteMapping("/delete/all")
    public Map<String,String> deleteAllEmployee(){
        employeeService.removeAllEmployee();

        return Map.of("status","All Employee has been deleted");
    }

    @GetMapping("/details/{id}")
    public Employee getEmployeeDetails(@PathVariable Long id){
        return employeeService.getEmployeeDetails(id);
    }
}
