package com.gp.adminportal.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gp.adminportal.bean.Admin;
import com.gp.adminportal.bean.Employee;
import com.gp.adminportal.bean.Product;
import com.gp.adminportal.exception.ProductNotFoundException;
import com.gp.adminportal.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    
    List<String> exceptions = new ArrayList<>();

    @PostMapping("/add-employee" )
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        // You can add validation and other logic here
    	employee =adminService.saveEmployee(employee);
        return ResponseEntity.status(200).body(employee);
    }

    @DeleteMapping("/delete-employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
    	adminService.deleteEmployee(id);
    	return ResponseEntity.status(200).body("Employee deleted Successfully");
    }
    
    @PutMapping("/products/update/{productId}")
    public ResponseEntity<String> updateProduct(@PathVariable int productId, @RequestBody Product product) {
        // Implement product update logic
    	try {
			adminService.updateProduct(productId, product);
		} catch (ProductNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return ResponseEntity.ok("Product updated successfully.");
    }

    @DeleteMapping("/products/delete/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable int productId) {
       
    	try {
			adminService.deleteProduct(productId);
		} catch (ProductNotFoundException e) {
			Map<String,String> ex = new HashMap<>();
			ex.put("error", e.getMessage());
			//exceptions.add(ex);
			return ResponseEntity.status(401).body("Error");
		}
        return ResponseEntity.status(200).body("Product deleted Successfully");
    }
    
    @PostMapping("/login")
    public ResponseEntity<Admin> logIn(@RequestParam String emailId ,@RequestParam String password) {
      Admin admin=  adminService.logIn(emailId , password);
        return ResponseEntity.status(200).body(admin);  
    }
}





