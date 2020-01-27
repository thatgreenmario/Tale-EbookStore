package com.app.core.pojos;

import java.util.HashMap;
import java.util.List;

public class UserBookMap {
	private User user;
	private HashMap<String, String> bookmap;
	
	public UserBookMap() {
		// TODO Auto-generated constructor stub
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public HashMap<String, String> getBookmap() {
		return bookmap;
	}

	public void setBookmap(HashMap<String, String> bookmap) {
		this.bookmap = bookmap;
	}

	@Override
	public String toString() {
		return "UserBookMap [user=" + user + ", bookmap=" + bookmap + "]";
	}
	
	
	
	
	
	
}

	
