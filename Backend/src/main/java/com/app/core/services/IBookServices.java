package com.app.core.services;

import java.io.IOException;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.transaction.annotation.Transactional;
import org.xml.sax.SAXException;

import com.app.core.pojos.Book;

public interface IBookServices {
	@Transactional
	void initialiseImagePaths() throws XPathExpressionException, ParserConfigurationException, SAXException, IOException;
	
	List<Book> getAllBooks() throws XPathExpressionException, ParserConfigurationException, SAXException, IOException;
	
	List<Book> getBookByName(String bookName);
	Book getBookByISBN(String isbnnumber) throws ParserConfigurationException, SAXException, IOException, XPathExpressionException;

}
