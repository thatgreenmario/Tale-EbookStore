package com.app.core.utils;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.xml.sax.SAXException;

import com.app.core.services.IBookServices;

@Component
public class ImagePathInitiaizer {

	@Autowired
	private IBookServices services;
	
	@PostConstruct
	public void init() throws XPathExpressionException, ParserConfigurationException, SAXException, IOException
	{
		services.initialiseImagePaths();
	}
}
