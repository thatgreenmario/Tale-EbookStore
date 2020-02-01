package com.app.core.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.core.pojos.Book;
import com.app.core.pojos.User;

@Repository
public interface IUserDAO extends JpaRepository<User, Integer>{
	
}
