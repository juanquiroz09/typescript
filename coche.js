var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        if ((modelo = null)) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getMOdelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El modelo del coche 1 es: " + coche.getMOdelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("El color del coche 1 es: " + coche.getVelocidad());
/*
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");

console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/
