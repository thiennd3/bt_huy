package com.qltv_be.controller;

import com.qltv_be.entity.Book;
import com.qltv_be.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/books")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping
    public ResponseEntity create(Book book) {
        return ResponseEntity.ok(bookService.create(book));
    }

    @PutMapping()
    public ResponseEntity update(Book book) {
        return ResponseEntity.ok(bookService.update(book));
    }

    @DeleteMapping
    public void delete(int id) {
        bookService.delete(id);

    }

    @GetMapping()
    public ResponseEntity filter(@RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam("key_sreach") int key) {
        return ResponseEntity.ok(bookService.get(key, PageRequest.of(page,limit)));
    }
}
