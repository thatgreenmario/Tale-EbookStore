package com.app.core.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.app.core.daos.IBookDAO;
import com.app.core.pojos.Book;

import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.springframework.web.client.RestTemplate;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

@Service
public class BookServicesImpl implements IBookServices {

	@Autowired
	IBookDAO dao;

	@Override
	public List<Book> getAllBooks()
			throws XPathExpressionException, ParserConfigurationException, SAXException, IOException {
		List<Book> bookList = (List<Book>) dao.findAll();
		return bookList;
	}

	@Override
	public List<Book> getBookByName(String bookName) {

		return dao.searchByTitleLike(bookName);
	}

	@Override
	public Book getBookByISBN(String isbnnumber)
			throws ParserConfigurationException, SAXException, IOException, XPathExpressionException {

		Book temp = new Book();
		temp.setIsbn(isbnnumber);
		Example<Book> examplebook = Example.of(temp);
		Optional<Book> option = dao.findOne(examplebook);
		

		// temp2.setDescription(getDescriptionByGoodreads(isbnnumber));
		if (option.isPresent()) {
			Book temp2 = option.get();
			if (temp2.getRating() == null && temp2.getDescription() == null) {

				HashMap<Integer, String> tempmap = getDescriptionByGoodreads(isbnnumber);
				temp2.setRating(tempmap.get(1)); // new field rating need to be added

				temp2.setDescription(tempmap.get(2));
			}
			return temp2;
		}

		return null;
	}

	public HashMap<Integer, String> getDescriptionByGoodreads(String isbn)
			throws ParserConfigurationException, SAXException, IOException, XPathExpressionException {
		final String uri = "https://www.goodreads.com/book/isbn/" + isbn + "?key=c1aV9cWUKqAT1M3UjqOXg";
		RestTemplate restTemplate = new RestTemplate();
		String result = restTemplate.getForObject(uri, String.class);

		DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
		documentBuilderFactory.setNamespaceAware(true);
		DocumentBuilder builder = documentBuilderFactory.newDocumentBuilder();
		Document doc = builder.parse(new InputSource(new StringReader(result))); // input stream of response.

		XPathFactory xPathFactory = XPathFactory.newInstance();
		XPath xpath = xPathFactory.newXPath();

		XPathExpression expr = xpath.compile("//description"); // Look for status tag value.
		String desc = expr.evaluate(doc);

		XPathExpression expr1 = xpath.compile("//average_rating"); // Look for status tag value.
		String rating = expr1.evaluate(doc);

		XPathExpression expr2 = xpath.compile("//image_url"); // Look for status tag value.
		String imagePath = expr2.evaluate(doc);

		HashMap<Integer, String> fetcheddetails = new HashMap<Integer, String>();
		fetcheddetails.put(1, rating);
		fetcheddetails.put(2, desc);
		fetcheddetails.put(3, imagePath);
		return fetcheddetails;
	}

	@Override
	public void initialiseImagePaths()
			throws XPathExpressionException, ParserConfigurationException, SAXException, IOException {

		// Initialise Image Paths for those book records with no image paths
		List<Book> bookList = (List<Book>) dao.findAll();

		for (Book book : bookList) {
			if (book.getImagepath() == null) {
				HashMap<Integer, String> tempmap = getDescriptionByGoodreads(book.getIsbn());

				String imagePath = tempmap.get(3);
				imagePath = imagePath.replaceAll("\\._(.*)_", "");
				dao.setBookImagePaths(imagePath, book.getIsbn());
			}
		}

	}

	@Override
	public Book getBookByISBN_noDetails(String isbn) {
		
		return new Book();
		/*
		Book temp = new Book();
		temp.setIsbn(isbn);
		Example<Book> examplebook = Example.of(temp);
		Optional<Book> option = dao.findOne(examplebook);
		if(option.isPresent())
		{
			System.out.println("got a value");
			return option.get();
			
		}
		else
		{
			System.out.println("got a null");
			return new Book();
		}*/
	}
}
