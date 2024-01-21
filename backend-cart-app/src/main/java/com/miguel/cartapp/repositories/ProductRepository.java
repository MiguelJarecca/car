package com.miguel.cartapp.repositories;

// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.miguel.cartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

    
} 