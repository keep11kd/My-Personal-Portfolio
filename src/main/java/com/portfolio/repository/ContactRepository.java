package com.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portfolio.databasemodel.Contact;
public interface ContactRepository extends JpaRepository<Contact, Long>{

}
