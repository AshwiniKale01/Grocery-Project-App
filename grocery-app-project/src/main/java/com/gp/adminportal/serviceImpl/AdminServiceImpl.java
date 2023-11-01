package com.gp.adminportal.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gp.adminportal.bean.Admin;
import com.gp.adminportal.bean.Employee;
import com.gp.adminportal.bean.Product;
import com.gp.adminportal.dao.AdminDao;
import com.gp.adminportal.dao.EmployeeRepository;
import com.gp.adminportal.dao.ProductRepository;
import com.gp.adminportal.exception.ProductNotFoundException;
import com.gp.adminportal.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private EmployeeRepository EmployeeRepository;
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private AdminDao adminDao;

	@Override
	public Employee saveEmployee( Employee employee) {

//		Employee employee = new Employee();
//		employee.setUsername(username);
//		employee.setEmail(email);
//		employee.setPassword(password);
//		employee.setFirst_name(first_name);
//		employee.setLast_name(last_name);

		return EmployeeRepository.save(employee);
	}

	@Override
	public void deleteEmployee(int id) {
		EmployeeRepository.deleteById(id);
	}

	@Override
    public Product addProduct(Product product) {
        // Add validation and business logic as needed
        return productRepository.save(product);
    }

	 @Override
	    public Product updateProduct(int productId, Product product) throws ProductNotFoundException {
	        // Add validation and business logic as needed
	        Product existingProduct = productRepository.findById(productId)
	                .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + productId));

	        // Update product attributes
	        existingProduct.setName(product.getName());
	        existingProduct.setQuantity(product.getQuantity());
	        existingProduct.setPrice(product.getPrice());
	        existingProduct.setProduct_Id(product.getProduct_Id());

	        return productRepository.save(existingProduct);
	    }

	@Override
    public void deleteProduct(int productId) throws ProductNotFoundException {
        
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + productId));

        productRepository.delete(product);
    }

	@Override
	public Admin logIn(String emailId, String password) {
		 Admin admin = adminDao.findByEmailId(emailId);

	        if (admin != null && admin.getPassword().equals(password)) {
	            return admin; // Successful authentication
	        }

	        return null; // Authentication failed
	}

	

}
