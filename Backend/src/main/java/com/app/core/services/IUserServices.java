package com.app.core.services;

import com.app.core.pojos.User;

public interface IUserServices {
	
	public User authenticate(User user);
	public boolean register(User user);

}
