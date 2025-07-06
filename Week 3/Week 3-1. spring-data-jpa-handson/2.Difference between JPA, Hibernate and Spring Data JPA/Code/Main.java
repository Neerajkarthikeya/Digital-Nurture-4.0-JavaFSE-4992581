package main;

import model.Employee;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import org.h2.tools.Server;

import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException {
       
        Server webServer = Server.createWebServer("-web", "-webAllowOthers", "-webPort", "8083").start();
        System.out.println("H2 Console started at: http://localhost:8083");

        
        SessionFactory factory = new Configuration().configure().buildSessionFactory();

       
        Employee emp = new Employee();
        emp.setName("Alice");
        emp.setSalary(50000);

        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.save(emp);
        tx.commit();
        session.close();

        System.out.println("Employee saved using Hibernate.");
    }
}
