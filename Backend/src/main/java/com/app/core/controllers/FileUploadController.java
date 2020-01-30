package com.app.core.controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.xml.sax.SAXException;

import com.app.core.daos.IBookDAO;
import com.app.core.pojos.Book;
import com.app.core.services.IBookServices;


@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class FileUploadController {
	
	@Autowired
	IBookServices service;
	@Autowired
	IBookDAO dao;
	
	@PostMapping("/upload")
	public String uploadToDB(@RequestParam("file") MultipartFile file) throws IOException, XPathExpressionException, ParserConfigurationException, SAXException {
		
		Book temp=new Book();
		byte[] bytes = null;
		bytes=file.getBytes();
		System.out.println(bytes);
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());//getting uploaded filename
		if (fileName.indexOf(".") > 0)
			fileName = fileName.substring(0, fileName.lastIndexOf("."));
		System.out.println(fileName);
		
		temp=service.getBookByISBN(fileName);//getting book from db from database;
		
		
		temp.setFile(file.getBytes());//setting file in book object
		
		temp.setDescription(null);
		dao.save(temp);
		
		/*
		Book temp=null;
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		System.out.println(fileName);
		try {
			temp = service.getBookByISBN(fileName);
		} catch (XPathExpressionException | ParserConfigurationException | SAXException | IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		byte[] array = null;
		try {
			System.out.println(file.getBytes());
			array=file.getBytes();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		dao.
		
		System.out.println(array.length);
		temp.setFile(file.getBytes());
	
	/*	//Document doc = new Document();
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		//doc.setDocName(fileName);
		try {
			a=file.getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
		IBookDAO.save(a);
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("/files/download/")
				.path(fileName).path("/db")
				.toUriString();
		return ResponseEntity.ok(fileDownloadUri);
		*/
		return "success";
	}

}
