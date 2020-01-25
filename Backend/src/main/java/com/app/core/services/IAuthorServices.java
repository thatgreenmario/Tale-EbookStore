package com.app.core.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.core.pojos.Authors;
import com.app.core.pojos.Book;
import com.app.core.pojos.User;

public interface IAuthorServices {

	public Authors authenticate(Authors author);

	public List<Book> getAllBooksbyAuthor(String id);
	
	public boolean register(Authors author);
	
	@Transactional
	public boolean addNewBook(Book book, Integer authorId);
}
