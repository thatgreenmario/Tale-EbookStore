package com.app.core.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.core.pojos.AuthorBookMap;
import com.app.core.pojos.Authors;
import com.app.core.pojos.Book;
import com.app.core.pojos.User;
import com.app.core.services.IAuthorServices;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class AuthorController {

	@Autowired
	IAuthorServices service;

	@RequestMapping(value = "/validate", method = RequestMethod.POST)
	public ResponseEntity<?> authenticateService(@RequestBody Authors author) {
		Authors temp = service.authenticate(author);

		if (temp != null) {
			return new ResponseEntity<Authors>(temp, HttpStatus.OK);
		}

		return new ResponseEntity<String>("Authentication Failed : Invalid credentials", HttpStatus.OK);
	}

	@RequestMapping(value = "/registerAuth", method = RequestMethod.POST)
	public ResponseEntity<?> registerService(@RequestBody Authors author) {
		Boolean status = service.register(author);

		if (status) {
			return new ResponseEntity<String>("Author Registered Successfully", HttpStatus.OK);
		}

		return new ResponseEntity<String>("Author Registered Failed", HttpStatus.OK);
	}

	@RequestMapping("/getlist/{id}")
	public List<Book> getBookListByUser(@PathVariable("id") String id) {
		return service.getAllBooksbyAuthor(id);

	}

	@RequestMapping(value = "/addbook", method = RequestMethod.POST)
	public ResponseEntity<?> addNewBook(@RequestBody AuthorBookMap authBook) {
		Boolean status = service.addNewBook(authBook.getBook(), authBook.getAuthorId());

		if (status) {
			return new ResponseEntity<String>("Book Added Successfully", HttpStatus.OK);
		}

		return new ResponseEntity<String>("Book_Add Operation Failed", HttpStatus.OK);
	}

	@RequestMapping(value = "/editauthor", method = RequestMethod.POST)
	public ResponseEntity<?> EditAuthorProfile(@RequestBody Authors author) {
		Authors temp = service.editAuthor(author);

		if (temp != null) {
			return new ResponseEntity<Authors>(temp, HttpStatus.OK);
		}

		return new ResponseEntity<String>("Authentication Failed : Invalid credentials", HttpStatus.OK);
	}

}
