const Map = require("collections/map");


class Mission {

    /** Constructeur*/
    /**
     *Instancie une nouvelle mission
     * @param {string} unNom - nom de la mission
     * @param {int} nbHP - le nombre d'heures estimées.
     */
    constructor(unNom,nbHP){
        this._nom = unNom;
        this._nbHeuresPrevues = nbHP; // nombre d'heures prévues pour réaliser la mission

        this._releveHoraire = new Map(); // nombre d'heures passées par jour par la personne chargée d'exécuter cette mission

    }
    /** Function ajouterHeure*/
    /**
     *Ajoute au relevé horaire le nombre d'heures nbH pour la date uneDate
     * @param {date} uneDate - la date de l'intervention
     * @param {int} nbH - le nombre d'heures effectuées. Le nombre d'heures effectuées sur une journée ne peut excéder 10 heures (valeur plancher retenue en cas de supériorité).
     */
    ajouterHeure(uneDate,nbH){
        if (nbH > 10) {
            this._releveHoraire.set(uneDate, 10);
        }
        else {
            this._releveHoraire.set(uneDate, 10);
        }
    }

    /** Function nbHeuresEffectuees*/
    /**
     * Renvoie le nombre d'heures effectuées pour un mois passé en paramètre
     * @param {int} unMois - le numéro du mois
     * @returns {int}
     */
    nbHeuresEffectuees(unMois){
        let nbH = 0;
        this._releveHoraire.entriesArray().forEach(
            function(entrie){
                if(entrie[0].getMonth() == unMois){
                    nbH += entrie[1];
                }
            }
        );
        return nbH;
    }

    /** Function differentielH*/
    /**
     * Renvoie l'écart en nombre d'heures entre le prévisionnel de la mission et le nombre d'heures effectuées
     * @returns {int}
     */
    differentielH(){
        let nbHT=0;
        this._releveHoraire.valuesArray().forEach(
            function(value){
                nbHT += value;
            }
        );
        return this._nbHeuresPrevues - nbHT;
    }

    get releveHoraire(){
        return this._releveHoraire;
    }

}
module.exports = Mission;