package com.app.core;

import static utils.HibernateUtils.getSf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.hibernate.*;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		
		try (SessionFactory sf = getSf()) {
			System.out.println("Hibernate frmwork booted.....");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
