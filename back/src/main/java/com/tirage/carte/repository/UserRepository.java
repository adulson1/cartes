package com.tirage.carte.repository;

import com.tirage.carte.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


public interface UserRepository extends JpaRepository<UserEntity, Long> {


    UserEntity findByUserNameAndPassWord(String userName, String passWord) throws RuntimeException;
}
