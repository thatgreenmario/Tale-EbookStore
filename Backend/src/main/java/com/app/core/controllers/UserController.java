package com.app.core.controllers;

import java.io.IOException;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import com.app.core.pojos.Book;
import com.app.core.pojos.User;
import com.app.core.pojos.UserBookMap;
import com.app.core.services.IBookServices;
import com.app.core.services.IUserServices;
import com.app.core.services.Mailer;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class UserController {

	@Autowired
	IUserServices service;

	@Autowired
	Mailer mailer;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> authenticateService(@RequestBody User user) {
		User temp = service.authenticate(user);

		if (temp != null) {
			return new ResponseEntity<User>(temp, HttpStatus.OK);
		}

		return new ResponseEntity<String>("Authentication Failed : Invalid credentials", HttpStatus.OK);

	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Boolean registerService(@RequestBody User user) {
		Boolean status = service.register(user);

		if (status) {

			new Thread(new Runnable() {
				public void run() {
					Mailer.sendMessage(user.getEmail(), "Hello " + user.getFirstname()
							+ ",\n\nThank You, for registering on Tale. Use your account to get the best of Tale Services.");

				}
			}).start();

			return true;

		}

		return false;
	}

	@RequestMapping(value = "/generatebill", method = RequestMethod.POST)
	public String getContent(@RequestBody UserBookMap userbookMap)
			throws XPathExpressionException, ParserConfigurationException, SAXException, IOException {
		return mailer.getContent(userbookMap);
		// return bser.getAllBooks();
	}

	@RequestMapping("/getuserhistory/{id}")
	@ResponseBody
	public List<Book> searchForBook(@PathVariable("id") String userId) {
		return service.getUserBooks(Integer.parseInt(userId));
	}

	@RequestMapping(value = "/edituser", method = RequestMethod.POST)
	public ResponseEntity<?> editUSerProfile(@RequestBody User user) {
		User temp = service.editUser(user);

		if (temp != null) {
			return new ResponseEntity<User>(temp, HttpStatus.OK);
		}

		return new ResponseEntity<String>("Authentication Failed : Invalid credentials", HttpStatus.OK);

	}

}
