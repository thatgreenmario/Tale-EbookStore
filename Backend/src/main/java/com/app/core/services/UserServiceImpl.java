package com.app.core.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.app.core.daos.IUserDAO;
import com.app.core.pojos.User;

@Service
public class UserServiceImpl implements IUserServices {
	
	@Autowired
	IUserDAO dao;

	@Override
	public User authenticate(User user) {
		
		User temp = new User();
		temp.setEmail(user.getEmail());
		temp.setPassword(user.getPassword());
		
		Example<User> exampleUser = Example.of(temp);
		Optional<User> optional =dao.findOne(exampleUser);
		
		if(optional.isPresent())
		{
			return optional.get();
		}
		
		return null;
	}

	@Override
	public boolean register(User user) {
		
		User temp = new User();
		temp.setEmail(user.getEmail());
		temp.setPassword(user.getPassword());
		
		Example<User> exampleUser = Example.of(temp);
		Optional<User> optional =dao.findOne(exampleUser);
		
		if(optional.isPresent())
		{
			return false;
		}
		
		dao.save(user);
		
		return true;
	}

}
