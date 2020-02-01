package com.app.core.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlID;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {
	@Id
	@XmlAttribute
	@XmlID
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstname,lastname,email,password;
	@OneToMany(mappedBy = "user" ,cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<UserHistory> userHistory;
	private Integer isAuthor; 

	 //Default Constructor
	public User() {   
		
	}

	//Parameterized constructor
	public User(String firstname, String lastname, String email, String password, Integer isAuthor) {  
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.isAuthor = isAuthor;
	}
	
	//Getters and Setters
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public List<UserHistory> getUserHistory() {
		return userHistory;
	}

	public void setUserHistory(Integer bookid)
	{
		UserHistory temp = new UserHistory(bookid);
		temp.setUser(this);
		
		userHistory.add(temp);
		
	}

	public Integer getIsAuthor() {
		return isAuthor;
	}

	public void setIsAuthor(Integer isAuthor) {
		this.isAuthor = isAuthor;
	}

	
	//toString
	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	
	
	
	
	
	

}
