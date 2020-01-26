package com.app.core.utils;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Mailer {

	public static void sendMessage(String receiver, String message)
	{
		//sender details
		
		String from = "talemailer123456@gmail.com";
		String password = "Tale123456";
		
		
		//set mail properties
		
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port","465");
		
		//get session
		
		Session session = Session.getDefaultInstance(props, new Authenticator() {
		protected PasswordAuthentication getPasswordAuthentication(){
			return new PasswordAuthentication(from, password);
		}
			
		});
		
		//compose message
		try{
			MimeMessage msg = new MimeMessage(session);
			msg.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			msg.setSubject("Welcome");
			msg.setText(message);
			
			Transport.send(msg);
			
		}catch (MessagingException e) {
			throw new RuntimeException(e);
		}
		
		
	}
	
}
