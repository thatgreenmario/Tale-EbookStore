package com.app.core.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.core.pojos.User;
import com.app.core.services.IUserServices;

@RestController
public class UserController {
	
	@Autowired
	IUserServices service;
	
	@RequestMapping(value="/authenticate",method=RequestMethod.POST)
	public ResponseEntity<?> authenticateService(@RequestBody User user)
	{
		User temp=service.authenticate(user);
		
		if(temp!=null)
		{
			return new ResponseEntity<User>(temp,HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("Authentication Failed : Invalid credentials",HttpStatus.OK);
	}
	
	@RequestMapping(value="/register",method=RequestMethod.POST)
	public ResponseEntity<?> registerService(@RequestBody User user)
	{
		Boolean status=service.register(user);
		
		if(status)
		{
			return new ResponseEntity<String>("User Registered Successfully",HttpStatus.OK);
		}
		
		return new ResponseEntity<String>("User Registered Failed",HttpStatus.OK);
	}
	
	
	
	
	

}
