package com.app.core.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.core.pojos.Book;

@Repository
public interface IBookDAO extends JpaRepository<Book, Integer>{

	@Query("SELECT b FROM Book b WHERE b.title LIKE %:title%")
	List<Book> searchByTitleLike(@Param("title") String title);
}
