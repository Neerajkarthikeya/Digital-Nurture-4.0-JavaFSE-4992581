package com.example.springdatajpa_app.repository;

import com.example.springdatajpa_app.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
