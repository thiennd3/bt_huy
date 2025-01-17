package com.qltv_be.controller;

import com.qltv_be.entity.Account;
import com.qltv_be.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/accounts")
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity create(@RequestBody Account account)
    {
        return ResponseEntity.ok(null);
    }
    @PutMapping
    public ResponseEntity update(@RequestBody Account account)
    {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping
    public ResponseEntity delete(int id)
    {
        return ResponseEntity.ok(null);
    }

}
