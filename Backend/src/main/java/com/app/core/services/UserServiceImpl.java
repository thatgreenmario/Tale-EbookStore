package com.app.core.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.swing.text.html.parser.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.app.core.daos.IBookDAO;
import com.app.core.daos.IUserDAO;
import com.app.core.pojos.Authors;
import com.app.core.pojos.Book;
import com.app.core.pojos.User;
import com.app.core.pojos.UserHistory;

@Service
public class UserServiceImpl implements IUserServices {

	@Autowired
	IUserDAO dao;

	@Autowired
	IBookDAO bookDao;
	
	@PersistenceContext
	EntityManager em;

	@Override
	public User authenticate(User user) {

		User temp = new User();
		temp.setEmail(user.getEmail());
		temp.setPassword(user.getPassword());

		Example<User> exampleUser = Example.of(temp);
		Optional<User> optional = dao.findOne(exampleUser);

		//System.out.println(optional.get().toString());
		if (optional.isPresent()) {
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
		Optional<User> optional = dao.findOne(exampleUser);

		if (optional.isPresent()) {
			return false;
		}

		dao.save(user);

		return true;
	}

	@Override
	public User editUser(User user) {
		// edit user details

		User temp = new User();
		temp.setId(user.getId());

		Example<User> exampleUser = Example.of(temp);
		Optional<User> optional = dao.findOne(exampleUser);

		User usr = optional.get();

		if (user.getFirstname() != null) {
			usr.setFirstname(user.getFirstname());
		}
		if (user.getLastname() != null) {
			usr.setLastname(user.getLastname());
		}
		if (user.getEmail() != null) {
			usr.setEmail(user.getEmail());
		}
		if (user.getPassword() != null) {
			usr.setPassword(user.getPassword());
		}

		User newUser = em.merge(usr);
		
		return newUser;
	}

	@Override
	public List<Book> getUserBooks(int userId) {
		// books bought by user

		User temp = dao.findById(userId).get();

		List<UserHistory> userHistory = temp.getUserHistory();

		List<Book> userBookList = new ArrayList<Book>();

		for (UserHistory ele : userHistory) {
			if(bookDao.findById(ele.getBookId()).isPresent())
			userBookList.add(bookDao.findById(ele.getBookId()).get());
		}

		return userBookList;
	}

	@Override
	public boolean addnewUserHistory(User user, String isbn) {

		User temp = new User();
		temp.setId(user.getId());
		
		Example<User> exampleUser = Example.of(temp);
		Optional<User> optional = dao.findOne(exampleUser);
		
		Book tempBook = new Book();
		tempBook.setIsbn(isbn);
		
		Example<Book> exampleBook = Example.of(tempBook);
		Optional<Book> optionalBook = bookDao.findOne(exampleBook);

		
		
		if (optional.isPresent() && optionalBook.isPresent()) {
			optional.get().setUserHistory(optionalBook.get().getId());
			return true;
		}

		return false;
	}

}
