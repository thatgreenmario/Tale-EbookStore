package com.app.core.pojos;

import java.util.List;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
	@XmlAttribute
	@XmlID
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer author_id;
	private String authorName;
	private String email;
	private String password;

	@OneToMany(mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Book> BookList;

	public Authors() {
		// default const
	}

	public Authors( String authorName, String email, String password, List<Book> bookList) {
		super();
		
		this.authorName = authorName;
		this.email = email;
		this.password = password;
		BookList = bookList;
	}

	public Integer getAuthorId() {
		return author_id;
	}

	public void setAuthorId(Integer authorId) {
		this.author_id = authorId;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void addBook(Book book) {
		BookList.add(book);
		book.setAuthor(this);
	}

}
