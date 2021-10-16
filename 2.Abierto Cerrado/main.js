"use strict";
// Deberías ser capaz de extender el comportamiento de una clase, sin modificarla
//  El principio Open/Closed dice que una clase/método debe estar abierto a extensiones pero cerrado a modificaciones.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = exports.Rectangulo = void 0;
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.width * this.heigth;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
var Triangulo = /** @class */ (function () {
    function Triangulo() {
    }
    Triangulo.prototype.calcularArea = function () {
        return this.width * this.heigth / 2;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var AreaCalculator = /** @class */ (function () {
    function AreaCalculator() {
    }
    AreaCalculator.prototype.computeArea = function (formas) {
        var areas = [];
        for (var _i = 0, formas_1 = formas; _i < formas_1.length; _i++) {
            var forma = formas_1[_i];
            areas.push(forma.calcularArea());
        }
        return areas;
    };
    return AreaCalculator;
}());
//creamos las figuras
var triangulo = new Triangulo();
triangulo.width = 100;
triangulo.heigth = 230;
var rectangulo = new Rectangulo();
rectangulo.heigth = 400;
rectangulo.width = 158;
var calculator = new AreaCalculator();
var shapes = [
    triangulo,
    rectangulo
];
console.log(calculator.computeArea(shapes));
