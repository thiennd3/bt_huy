package com.qltv_be.service;

import com.qltv_be.entity.Book;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface BookService {


    Book create(Book book);

    void delete(int id);

    Book update(Book book);

    List<Book> get(int key, PageRequest of);
}
