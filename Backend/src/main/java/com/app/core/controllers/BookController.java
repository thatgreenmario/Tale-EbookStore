package com.app.core.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.core.pojos.Book;
import com.app.core.services.IBookServices;

@RestController
public class BookController {

	@Autowired
	IBookServices service;

	@RequestMapping("/welcome")
	public String some() {
		return "<h1>hello</h1>";
	}

	@GetMapping("/getall")
	public List<Book> getAllBooks() {
		return service.getAllBooks();
	}
	
	@RequestMapping(value="/search/{id}")
	@ResponseBody
	public Book searchForBook(@PathVariable("id") String bookname) {
		return service.getBookByName(bookname);
		//return "path var" + bookname;
	}

}
