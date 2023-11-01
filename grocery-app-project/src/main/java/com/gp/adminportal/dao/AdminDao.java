package com.gp.adminportal.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gp.adminportal.bean.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, Integer> {

	Admin findByEmailId(String emailId);
}
