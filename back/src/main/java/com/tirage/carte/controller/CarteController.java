package com.tirage.carte.controller;

import com.tirage.carte.model.CarteEntity;
import com.tirage.carte.repository.CarteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/cartes")
public class CarteController {
    @Autowired
    private CarteRepository cr;

    @GetMapping("tirage")
    public Set<CarteEntity> getTirage(){

        List<CarteEntity> allCarteEntities = cr.findAll();
        Set<CarteEntity> laMain = new HashSet<>();
        if(allCarteEntities.isEmpty()) {
            allCarteEntities =  createAllcartes();
        }
        tirageParMain(allCarteEntities,laMain);
        return laMain;
    }



    @GetMapping("order")
    public List<CarteEntity> orderAllCartes(List<CarteEntity> laMain){

        return null;
    }


    private List<CarteEntity> createAllcartes() {
        List<String> colors = Arrays.asList("Carreaux", "Coeur", "Pique", "Trèfle");
        List<String> valuesString = Arrays.asList("As", "Dame", "Roi", "Valet",
                "5", "10", "8", "6", "7", "4", "2", "3", "9");

        List<CarteEntity> allCarteEntities = new ArrayList<>();
        for(String color : colors){
            for(String val : valuesString){
                    CarteEntity c =new CarteEntity();
                    c.setColor(color);
                    c.setValueCarte(val);
                    cr.save(c);
                    allCarteEntities.add(c);
            }
        }


        return allCarteEntities;
    }

    private void tirageParMain(List<CarteEntity> allCarteEntities, Set<CarteEntity> laMain) {
        Random rand = new Random();
        while(laMain.size()<10){
            int rndm = rand.nextInt(allCarteEntities.size());
            laMain.add(allCarteEntities.get(rndm));
        }
    }

}
