package com.example.employeedata;

import com.example.employeedata.model.Employee;
import com.example.employeedata.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeDataApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(EmployeeDataApplication.class, args);
    }

    @Override
    public void run(String... args) {
        System.out.println("Start");
        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setDepartment("HR");
        emp.setSalary(50000.0);
        employeeService.addEmployee(emp);
        System.out.println("End");
    }
}
