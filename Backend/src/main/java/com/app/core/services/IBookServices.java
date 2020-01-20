package com.app.core.services;

import java.io.IOException;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.xml.sax.SAXException;

import com.app.core.pojos.Book;

public interface IBookServices {
	
	List<Book> getAllBooks();
	
	List<Book> getBookByName(String bookName);
	Book getBookByISBN(String isbnnumber) throws ParserConfigurationException, SAXException, IOException, XPathExpressionException;

}
