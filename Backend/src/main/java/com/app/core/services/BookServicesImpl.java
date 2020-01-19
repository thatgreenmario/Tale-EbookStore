package com.app.core.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.app.core.daos.IBookDAO;
import com.app.core.pojos.Book;

@Service
public class BookServicesImpl implements IBookServices {

	@Autowired
	IBookDAO dao;

	@Override
	public List<Book> getAllBooks() {

		return (List<Book>) dao.findAll();
	}

	@Override
	public Book getBookByName(String bookName) {

		Book temp = new Book();
		temp.setTitle(bookName);

		Example<Book> examplebook = Example.of(temp);
		Optional<Book> option = dao.findOne(examplebook);

		if (option.isPresent()) {
			return option.get();
		}
		
		//method to search by isbn number
		
		Book temp1 = new Book();
		temp1.setIsbn(bookName);
		
		Example<Book> examplebook1 = Example.of(temp1);
		Optional<Book> option1 = dao.findOne(examplebook1);
		
		if (option1.isPresent()) {
			return option1.get();
		}
		
		

		return null;
	}

}
