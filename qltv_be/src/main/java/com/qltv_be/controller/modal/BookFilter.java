package com.qltv_be.controller.modal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class BookFilter {
    private int page;
    private int limit;
    private String keySearch;
}
