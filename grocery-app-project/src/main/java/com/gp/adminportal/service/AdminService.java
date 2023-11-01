package com.gp.adminportal.service;

import org.springframework.web.bind.annotation.RequestParam;

import com.gp.adminportal.bean.Admin;
import com.gp.adminportal.bean.Employee;
import com.gp.adminportal.bean.Product;
import com.gp.adminportal.exception.ProductNotFoundException;

public interface AdminService {
	
	Employee saveEmployee( Employee employee);
	void deleteEmployee( int id);
	 Product addProduct(Product product);
	    Product updateProduct(int productId, Product product)throws ProductNotFoundException;
	    void deleteProduct(int productId)throws ProductNotFoundException;
	    Admin logIn(String emailId , String password);
	
	

}
