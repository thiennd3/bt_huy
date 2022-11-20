package com.qltv_be.service.impl;

import com.qltv_be.entity.Book;
import com.qltv_be.repository.BookRepository;
import com.qltv_be.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {
    private  final BookRepository bookRepository;
    @Override
    public Book create(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void delete(int id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Book update(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> get(String key, PageRequest of) {
        return bookRepository.findAll(of).toList();
    }
}
