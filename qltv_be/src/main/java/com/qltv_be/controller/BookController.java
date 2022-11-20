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
@CrossOrigin("http://localhost:3000")
public class BookController {

    private final BookService bookService;

    @PostMapping
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity create(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.create(book));
    }

    @PutMapping()
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity update(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.update(book));
    }

    @DeleteMapping
    @CrossOrigin("http://localhost:3000")
    public void delete(int id) {
        bookService.delete(id);

    }

    @GetMapping()
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity filter(@RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam("key_search") String key) {
        return ResponseEntity.ok(bookService.get(key, PageRequest.of(page,limit)));
    }
}
