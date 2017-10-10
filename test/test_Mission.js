const Mission = require('../metier/mission');

//const Map = require("collections/map");

const assert = require('assert');

    describe("ajouterHeures tests", () =>{
        beforeEach(function () {
            m1 = new Mission("M1",10);
        });
        it("ajout>0 && <10", () => {
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,8);
            assert.equal(m1.releveHoraire.get(date),8);
        });
        it("ajout=0",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,0);
            assert.fail(m1.releveHoraire);
        });
        it("ajout=10",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,10);
            assert.equal(m1.releveHoraire,10);
        });
        it("ajout=12",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,12);
            assert.equal(m1.releveHoraire,10);
        });
        it("ajout même jour",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,2);
            m1.ajouterHeure(date,5);
            assert.equal(m1.releveHoraire,5);
        });
    });

    describe("nbHeuresEffectuees tests", () =>{
        beforeEach(function(){
            m1 = new Mission("M1",10);
         });
        it("nbH>0", () =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,9);
            assert.equal(m1.nbHeuresEffectuees(1),9);
         });
        it("nbH=0",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,0);
            assert.fail(m1.nbHeuresEffectuees(1),0);
        });
        it("nbH=n+x",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,4);
            m1.ajouterHeure(date,5);
            assert.equal(m1.nbHeuresEffectuees(1),5);
        });
        it("nbH=d1+d2",() =>{
            date = new Date(1998,1,8);
            date1 = new Date(1998,1,9);
            m1.ajouterHeure(date,5);
            m1.ajouterHeure(date1,8);
            assert.equal(m1.nbHeuresEffectuees(1),13);
        });
        it("nbH=d1 !=d2", () =>{
            date = new Date(1998,1,8);
            date1 = new Date(1998,2,8);
            m1.ajouterHeure(date,8);
            m1.ajouterHeure(date1,5);
            assert.equal(m1.nbHeuresEffectuees(1),8);
        });
        it("nbH=n=10 && n>10",() =>{
            date = new Date(1998,1,8);
            m1.ajouterHeure(date,12);
            assert.equal(m1.nbHeuresEffectuees(1),10);
        });

        describe("diffH", () => {
            beforeEach(function () {
                m1 = new Mission("M1", 10);
            });
            it("diffH>0", () => {
                date = new Date(1998, 1, 8);
                date1 = new Date(1998,1,9);
                m1.ajouterHeure(date, 9);
                m1.ajouterHeure(date1,9);
                assert.equal(m1.differentielH(), 8);
            });
            it("diffH=0", () => {
                date = new Date(1998, 1, 8);
                m1.ajouterHeure(date, 0);
                assert.equal(m1.differentielH(), 0);
            });
            it("diffH<0", () => {
                date = new Date(1998, 1, 8);
                m1.ajouterHeure(date, 4);
                assert.equal(m1.differentielH(),0);
            });
        });
});
