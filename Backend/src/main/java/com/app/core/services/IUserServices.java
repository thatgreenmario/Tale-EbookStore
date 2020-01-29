package com.app.core.services;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.app.core.pojos.Book;
import com.app.core.pojos.User;

public interface IUserServices {
	
	public User authenticate(User user);
	public boolean register(User user);
	@Transactional
	public User editUser(User user);
	public List<Book> getUserBooks(int userId);

}
