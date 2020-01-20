package com.app.core.services;

import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathException;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

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
	public List<Book> getBookByName(String bookName) {

		/*
		 * Book temp = new Book(); temp.setTitle(bookName);
		 * 
		 * Example<Book> examplebook = Example.of(temp); Optional<Book> option =
		 * dao.findOne(examplebook);
		 * 
		 * if (option.isPresent()) { return option.get(); }
		 */
		
		return dao.searchByTitleLike(bookName);
		
		//return null;
	}

	@Override
	public Book getBookByISBN(String isbnnumber) throws ParserConfigurationException, SAXException, IOException, XPathExpressionException {
		
		Book temp = new Book();
		temp.setIsbn(isbnnumber);
		Example<Book> examplebook = Example.of(temp);
		Optional<Book> option = dao.findOne(examplebook);
		Book temp2 = option.get();
		
		HashMap<Integer, String> tempmap=getDescriptionByGoodreads(isbnnumber);
		
		temp2.setRating(tempmap.get(1)); //new field rating need to be added
		temp2.setDescription(tempmap.get(2));
		
		//temp2.setDescription(getDescriptionByGoodreads(isbnnumber));
		if (option.isPresent()) {
			return temp2;
		}
		
		return null;
	}
	
	public HashMap<Integer, String> getDescriptionByGoodreads(String isbn) throws ParserConfigurationException, SAXException, IOException, XPathExpressionException
	{
		final String uri = "https://www.goodreads.com/book/isbn/"+isbn+"?key=c1aV9cWUKqAT1M3UjqOXg";
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		     
		
		 DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		 documentBuilderFactory.setNamespaceAware(true);
		 DocumentBuilder builder = documentBuilderFactory.newDocumentBuilder();
		 Document doc = builder.parse(new InputSource(new StringReader(result))); //input stream of response.

		 XPathFactory xPathFactory = XPathFactory.newInstance();
		 XPath xpath = xPathFactory.newXPath();

		 XPathExpression expr = xpath.compile("//description"); // Look for status tag value.
		 String desc =  expr.evaluate(doc);
		   
		 XPathExpression expr1 = xpath.compile("//average_rating"); // Look for status tag value.
		 String rating =  expr1.evaluate(doc);
		   
		 HashMap<Integer, String> fetcheddetails = new HashMap<Integer, String>();
		 fetcheddetails.put(1, rating);
		 fetcheddetails.put(2, desc);
		return fetcheddetails;
	}

}
