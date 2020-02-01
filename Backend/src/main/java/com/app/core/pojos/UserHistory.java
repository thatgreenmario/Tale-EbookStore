package com.app.core.pojos;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlIDREF;
import javax.xml.bind.annotation.XmlRootElement;


@Entity
@Table
@XmlRootElement
public class UserHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	@XmlAttribute @XmlIDREF
	private User user;
	private Integer bookid;

	public UserHistory() {
		// default const
	}

	public UserHistory(Integer bookId) {
		super();

		this.bookid= bookId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getBookId() {
		return bookid;
	}

	public void setBookList(Integer bookId) {
		this.bookid = bookId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserHistory [id=" + id + ", bookid=" + bookid + "]";
	}

}
