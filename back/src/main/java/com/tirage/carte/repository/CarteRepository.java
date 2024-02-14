package com.tirage.carte.repository;

import com.tirage.carte.model.CarteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarteRepository extends JpaRepository<CarteEntity,Long> {
}
