package com.qltv_be.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.Instant;


@Entity
@Table(name = "books")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class
Book {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "writer")
    private String writer;

    @Column(name = "page_number")
    private Integer pageNumber;

    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "image")
    private Integer image;

    @Column(name = "release_date")
    private Instant releaseDate;
    @CreatedDate
    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "update_at")
    private Instant updateAt;

    @Column(name = "column_9")
    private Integer column9;

    @Column(name = "code")
    private String code;


    @PrePersist
    private void onCreate() {
        this.createdAt = Instant.now();
    }

}
