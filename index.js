"use strict"
/**
 * @file Aplicación para la gestión de un parking
 * @author Martín Becerra
 * @version 0.1
 */
/**
 * @class Parking
 * @property {number} capacidad Número de coches que puede haber en el parking
 * @prop {Array} tunelLavado Lista de coches para lavar
 * @prop {Array} coches Lista de coches en el parking
 */
class Parking {
    /**
     * @param {number} capacidad
     */
    constructor(capacidad) {
        this._capacidad = capacidad;
        this._tunelLavado = [];
        this._coches = [];
    }
    /**
     * @description Número de coches que metemos en el parking
     * @param {Objet} coche Coche que metemos en el parking
     * @returns {number} -1 parking lleno, 0 ok
     */
    MeterCoche(coche) {
        if (this._capacidad > 0) {
            this._capacidad--;
            if (coche.lavado == true) {
                this._tunelLavado.push(coche.matricula);
            } else {
                this._coches.push(coche.matricula);
            }
            return 0
        }
        return -1
    }
    /**
     * @description Nos devuelve si el coche está o no en el parking
     * @param {String} matricula Coche que buscamos
     * @returns {Boolean}
     */
    BuscarCoche(matricula) {
        if (this._coches.indexOf(matricula) >=0) {
            return true
        } else {
            if(this._tunelLavado.indexOf(matricula) >= 0) {
                return true
            } else {
                return false
            }
        }
    }
}

let parking = new Parking(2);
let coche1 = { matricula: "G3456754", lavado: true }
let mc = parking.MeterCoche(coche1);
let bc = parking.BuscarCoche("T4569231");
let bc1 = parking.BuscarCoche("G3456754");
console.log(bc);
console.log(bc1)