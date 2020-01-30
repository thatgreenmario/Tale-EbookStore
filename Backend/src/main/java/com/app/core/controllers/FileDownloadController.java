package com.app.core.controllers;

import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.xml.sax.SAXException;

import com.app.core.pojos.Book;
import com.app.core.services.IBookServices;

@Controller
public class FileDownloadController {
	
	@Autowired
	IBookServices service;
	
	@GetMapping("/download/{fileName}")
	public ResponseEntity downloadFromDB(@PathVariable String fileName) throws XPathExpressionException, ParserConfigurationException, SAXException, IOException {
		
	if (fileName.indexOf(".") > 0)
	fileName = fileName.substring(0, fileName.lastIndexOf("."));	
		
		
	Book temp=null;
	temp=service.getBookByISBN(fileName);
	
		
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType("application/pdf"))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName+".pdf" + "\"")
				.body(temp.getFile());
	}

}
