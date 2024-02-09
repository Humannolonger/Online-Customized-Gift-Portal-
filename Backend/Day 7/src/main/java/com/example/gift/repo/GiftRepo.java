package com.example.gift.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gift.entity.Gift;

@Repository
public interface GiftRepo extends JpaRepository<Gift,Integer>{

}