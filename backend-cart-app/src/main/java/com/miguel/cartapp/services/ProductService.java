package com.miguel.cartapp.services;

import java.util.List;

import com.miguel.cartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
