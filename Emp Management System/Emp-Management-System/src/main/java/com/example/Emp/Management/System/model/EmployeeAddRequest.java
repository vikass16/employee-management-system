package com.example.Emp.Management.System.model;


public class EmployeeAddRequest {

    private String name;
    private String dept;
    private Double salary;

    public EmployeeAddRequest() {
    }

    public EmployeeAddRequest(String name, String dept, Double salary) {
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }
}
