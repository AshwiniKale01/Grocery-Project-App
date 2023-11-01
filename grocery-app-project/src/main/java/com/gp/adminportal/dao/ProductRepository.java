package com.gp.adminportal.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gp.adminportal.bean.Employee;
import com.gp.adminportal.bean.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
