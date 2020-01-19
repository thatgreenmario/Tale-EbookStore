package com.app.core.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.core.pojos.Book;

@Repository
public interface IBookDAO extends JpaRepository<Book, Integer>{

}
