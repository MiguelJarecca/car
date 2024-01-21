package com.miguel.cartapp.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.miguel.cartapp.models.entities.Product;
import com.miguel.cartapp.services.ProductService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    
    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public List<Product> list() {
        return productService.findAll();
    }
}
