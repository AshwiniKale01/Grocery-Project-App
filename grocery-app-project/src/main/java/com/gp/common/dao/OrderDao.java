package com.gp.common.dao;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gp.common.Orders;
import com.gp.users.beans.Cart;

import jakarta.persistence.criteria.Order;

public interface OrderDao extends JpaRepository<Orders,Integer> {
	
	// to get all Orders history for particular  user
	@Query("select o from Orders o where o.user_id_ref =?1")
	public List<Orders>findAllOrdersForUser(int user_id);

	public List<Orders> findByOrderDate(Date date);
	

}
