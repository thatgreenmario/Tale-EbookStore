package com.app.core.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.swing.text.html.parser.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.app.core.daos.IAuthorDao;
import com.app.core.daos.IBookDAO;
import com.app.core.pojos.Authors;
import com.app.core.pojos.Book;
import com.app.core.pojos.User;

@Service
public class AuthorServicesImpl implements IAuthorServices {

	@Autowired
	IAuthorDao dao;
	
	@Autowired
	IBookDAO bookDao;

	@PersistenceContext
	private EntityManager em;

	@Override
	public Authors authenticate(Authors author) {
		// authenticate user
		Authors temp = new Authors();
		temp.setEmail(author.getEmail());
		temp.setPassword(author.getPassword());

		Example<Authors> exampleAuthor = Example.of(temp);
		Optional<Authors> optional = dao.findOne(exampleAuthor);

		if (optional.isPresent()) {
			return optional.get();
		}

		return null;
	}

	@Override
	public List<Book> getAllBooksbyAuthor(String authorId) {
		Authors author = dao.findById(Integer.parseInt(authorId)).get();
		return author.getBookList();
	}

	@Override
	public boolean register(Authors author) {
		Authors temp = new Authors();
		temp.setEmail(author.getEmail());
		temp.setPassword(author.getPassword());

		Example<Authors> exampleUser = Example.of(temp);
		Optional<Authors> optional = dao.findOne(exampleUser);

		if (optional.isPresent()) {
			return false;
		}

		dao.save(author);

		return true;
	}

	@Override
	public boolean addNewBook(Book book, Integer authorId) {
		// add a new Book

		Book temp = new Book();
		temp.setIsbn(book.getIsbn());
		
		Example<Book> examplebook = Example.of(temp);
		Optional<Book> optional = bookDao.findOne(examplebook);
		
		if(optional.isPresent())
		{
			return false;
		}
		
		Authors author = dao.findById(authorId).get();
		
		author.addBook(book);
		
		/*
		 * book.setAuthor(author);
		 * 
		 * author.getBookList().add(book);
		 */
		
		return true;

		
	}

}
