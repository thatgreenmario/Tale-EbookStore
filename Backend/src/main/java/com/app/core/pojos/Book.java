package com.app.core.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlIDREF;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.xml.txw2.annotation.XmlAttribute;

@Entity
@Table
@XmlRootElement
public class Book {

	private Integer id;
	private String title;
	
	private Authors author;
	private Integer quantity;
	private Integer price;
	private String rating;
	private String genre;
	private String publication;
	private String language;
	private String description;
	private String imagepath;
	private String bookpath;
	private String booktrailer;
	private String isbn;

	// Default Constructor
	public Book() {
		super();

	}

	// Parameterized constructor
	

	public Book(Integer id, String title, Authors author, Integer quantity, Integer price, String rating, String genre,
			String publication, String language, String description, String imagepath, String bookpath,
			String booktrailer, String isbn) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.quantity = quantity;
		this.price = price;
		this.rating = rating;
		this.genre = genre;
		this.publication = publication;
		this.language = language;
		this.description = description;
		this.imagepath = imagepath;
		this.bookpath = bookpath;
		this.booktrailer = booktrailer;
		this.isbn = isbn;
	}
	
	// Getters and setters
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@ManyToOne
	@JoinColumn(name = "author_id")
	@XmlAttribute @XmlIDREF
	public Authors getAuthor() {
		return author;
	}

	public void setAuthor(Authors author) {
		this.author = author;
	}


	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getPublication() {
		return publication;
	}

	public void setPublication(String publication) {
		this.publication = publication;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImagepath() {
		return imagepath;
	}

	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}

	public String getBookpath() {
		return bookpath;
	}

	public void setBookpath(String bookpath) {
		this.bookpath = bookpath;
	}

	public String getBooktrailer() {
		return booktrailer;
	}

	public void setBooktrailer(String booktrailer) {
		this.booktrailer = booktrailer;
	}

	public String getIsbn() {
		return isbn;
	}
	
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	
	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", author=" + author + ", quantity=" + quantity + ", price="
				+ price + ", rating=" + rating + ", genre=" + genre + ", publication=" + publication + ", language="
				+ language + ", description=" + description + ", imagepath=" + imagepath + ", bookpath=" + bookpath
				+ ", booktrailer=" + booktrailer + ", isbn=" + isbn + "]";
	}	

	}

