package com.app.core.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.Set;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import com.app.core.daos.IBookDAO;
import com.app.core.pojos.Authors;
import com.app.core.pojos.Book;
import com.app.core.pojos.User;
import com.app.core.pojos.UserBookMap;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class Mailer {

	@Autowired
	private IBookDAO dao;

	public String getContent(UserBookMap uBookMap) {

		/*
		 * UserBookMap result = new ObjectMapper().readValue(uBookMap.getBookmap(),
		 * HashMap.class);
		 * 
		 * return uBookMap.toString();
		 */

		String userdetails = uBookMap.getUser().getFirstname() + " " + uBookMap.getUser().getLastname();

		String bookdetails = "";
		int grandtotal = 0;

		HashMap<String, String> bookMap = uBookMap.getBookmap();

		String[] kSet = bookMap.keySet().toArray(new String[bookMap.size()]);

		for (int i = 0; i < kSet.length; i++) {
			Book temp = new Book();
			temp.setIsbn(kSet[i]);
			Example<Book> examplebook = Example.of(temp);
			Optional<Book> option = dao.findOne(examplebook);
			if (option.isPresent()) {
				Book b = option.get();
				bookdetails += "<tr style=\"font-size: 13px; color: black>\" " + "<td>" + b.getIsbn() + "</td>" + "<td>"
						+ b.getTitle() + "</td>" + "<td>" + b.getPrice() + "</td>" + "<td>" + bookMap.get(kSet[i])
						+ "</td> <td>" + b.getPrice() * Integer.parseInt(bookMap.get(kSet[i])) + "</td></tr>";
				
				grandtotal += b.getPrice() * Integer.parseInt(bookMap.get(kSet[i]));
				
			}
		}

		String content = "   <div class=\"card\" style=\"width: 540px;margin: 18px;height: 684px;\">\r\n"
				+ "        <div class=\"card-header\" style=\"background-color: rgba(208,221,218,0.67);\">\r\n"
				+ "            <h2 class=\"text-center mb-0\" style=\"text-align: center; color: black;\"><br><strong>Purchase Receipt</strong><br><br></h2>\r\n"
				+ "        </div>\r\n"
				+ "        <div class=\"card-body\" style=\"background-color: #dfe8e6;height: 518px;\">\r\n"
				+ "            <div class=\"table-responsive\">\r\n"
				+ "                <table class=\"table\" style=\"width:100%; text-align: center; border-spacing: 0ch;\">\r\n"
				+ "                    <thead style=\"font-size: 16px; color: black;\">\r\n"
				+ "                        <tr style=\"background-color:rgba(40,42,41,0.2); border-color: black;\">\r\n"
				+ "                            <th colspan=\"2\" style=\"width: 140px;\"><br><strong>" + userdetails +

				"</strong><br></th>\r\n"
				+ "                            <th><img src=\"https://i.ya-webdesign.com/images/arrow-circle-png-5.png\" width=50px></th>\r\n"
				+ "                            <th class=\"text-center\" colspan=\"2\" style=\"width: 183px;\"><br><strong>Tale- Ebook\r\n"
				+ "                                    Services</strong><br></th>\r\n"
				+ "                        </tr>\r\n" + "                    </thead>\r\n"
				+ "                    <tbody>\r\n"
				+ "                        <tr class=\"shadow-sm\" style=\"font-size: 14px;color: black\">\r\n"
				+ "                            <td class=\"text-left\" style=\"width: 95px;\"><strong>Book ISBN</strong></td>\r\n"
				+ "                            <td class=\"text-left\" style=\"width: 136px;\"><strong>Title</strong></td>\r\n"
				+ "                            <td class=\"text-right\" style=\"width: 52px;\"><strong>Price</strong></td>\r\n"
				+ "                            <td class=\"text-right\" style=\"width: 76px;\"><strong>Quantity</strong></td>\r\n"
				+ "                            <td class=\"text-right\" style=\"width: 79px;\"><strong>Total</strong></td>\r\n"
				+ "                        </tr>\r\n"

				+ "                        " + bookdetails + ""

				+ "                            <td class=\"text-right\" colspan=\"2\"><strong>Grand Total</strong></td>\r\n"
				+ "                            <td class=\"text-right\">"+grandtotal+"</td>\r\n"
				+ "                        </tr>\r\n" + "                        \r\n" + "                        \r\n"
				+ "                    </tbody>\r\n" + "                </table>\r\n"
				+ "                <div style=\"font-size: 12px; color: rgb(255,255,255);background-color: #54ab8c;font-size: 17px; margin-left: 22rem; height: 3rem; vertical-align: middle; line-height: 3rem;\">\r\n"
				+ "                            <h3><strong>PAID</strong></h3>\r\n" + "                    \r\n"
				+ "                    \r\n" + "                </div>\r\n" + "            </div>\r\n"
				+ "            <div class=\"card\">\r\n" + "                <div class=\"card-body\"\r\n"
				+ "                    style=\"background-color: #282d32;color: #9ba5ad; margin-top: 170px; text-align: center;\">\r\n"
				+ "                    <h2 class=\"text-center card-title\"><strong>Tale - Ebook Services</strong><br></h2>\r\n"
				+ "                    <p class=\"card-text\" style=\"width: 456px;height: 136px; margin: auto;\">We embody everything you love\r\n"
				+ "                        about your favourite local bookshop, perfected for your modern life. Our mission is to bring the\r\n"
				+ "                        power of reading to your world — because we’re booklovers, just like you. Please visit again.\r\n"
				+ "                        Thank You.<br><br><br></p>\r\n" + "                </div>\r\n"
				+ "            </div>\r\n" + "        </div>\r\n" + "    </div>\r\n" + "";
		
		
		String from = "talemailer123456@gmail.com";
		String password = "Tale123456";

		String receiver = "subhendupccoe@gmail.com";

		// set mail properties

		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		// get session

		Session session = Session.getDefaultInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, password);
			}

		});

		// compose message
		try {
			MimeMessage msg = new MimeMessage(session);
			msg.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			msg.setSubject("Welcome");

			 msg.setContent(content, "text/html");

			Transport.send(msg);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

		
		
		return "receipt sent";

	}

	public static void sendMessage(String receiver, String message) {
		// sender details

		String from = "talemailer123456@gmail.com";
		String password = "Tale123456";

		// set mail properties

		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		// get session

		Session session = Session.getDefaultInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, password);
			}

		});

		// compose message
		try {
			MimeMessage msg = new MimeMessage(session);
			msg.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			msg.setSubject("Welcome");
			msg.setText(message);

			Transport.send(msg);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

	public void sendReciept(UserBookMap userbookMap) {

		String from = "talemailer123456@gmail.com";
		String password = "Tale123456";

		String receiver = "subhendupccoe@gmail.com";

		// set mail properties

		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		// get session

		Session session = Session.getDefaultInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, password);
			}

		});

		// compose message
		try {
			MimeMessage msg = new MimeMessage(session);
			msg.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			msg.setSubject("Welcome");

			 msg.setContent(new Mailer().getContent(userbookMap), "text/html");

			Transport.send(msg);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

}
