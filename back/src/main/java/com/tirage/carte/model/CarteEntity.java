package com.tirage.carte.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class CarteEntity {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getValueCarte() {
        return valueCarte;
    }

    public void setValueCarte(String valueCarte) {
        this.valueCarte = valueCarte;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String color;

    private String valueCarte;

}
