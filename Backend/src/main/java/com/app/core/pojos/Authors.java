package com.app.core.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlID;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "authorId")
public class Authors {

	@Id
	@XmlAttribute @XmlID
	private Integer authorId;
	private String authorName;
	@OneToMany(mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Book> BookList;
	
	
	public Authors() {
		//default const
	}


	public Authors(Integer authorId, String authorName, List<Book> bookList) {
		super();
		this.authorId = authorId;
		this.authorName = authorName;
		BookList = bookList;
	}


	public Integer getAuthorId() {
		return authorId;
	}


	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
	}


	public String getAuthorName() {
		return authorName;
	}


	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}


	public List<Book> getBookList() {
		return BookList;
	}


	public void setBookList(List<Book> bookList) {
		BookList = bookList;
	}
	
	public void addBook(Book book)
	{
		BookList.add(book);
		book.setAuthor(this);
	}
	
}
