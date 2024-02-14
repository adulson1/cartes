package com.tirage.carte.repository;

import com.tirage.carte.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<UserEntity, Long> {


    Optional<UserEntity> findByUserNameAndPassWord(String userName, String passWord) throws RuntimeException;
}
