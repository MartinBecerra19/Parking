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
}
let parking = new Parking(2);
let coche1 = { matricula: "G3456754" , lavado: true}
let mc = parking.MeterCoche(coche1);
console.log(mc);
console.log(parking)