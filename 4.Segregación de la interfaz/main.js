//En el cuarto principio de SOLID, el tío Bob sugiere:
// “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una finalidad concreta.
/*
En este sentido, según el Interface Segregation Principle (ISP),
es preferible contar con muchas interfaces que definan pocos métodos
que tener una interface forzada a implementar muchos métodos a los que no dará uso.
*/
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.jugar = function () {
        this.cuack();
        this.flotar();
    };
    Duck.prototype.cuack = function () {
        console.log('cuackk');
    };
    Duck.prototype.flotar = function () {
        console.log('flotarr');
    };
    return Duck;
}());
var PatoMadera = /** @class */ (function () {
    function PatoMadera() {
    }
    PatoMadera.prototype.jugar = function () {
        this.flotar();
    };
    PatoMadera.prototype.flotar = function () {
        throw new Error("Method not implemented.");
    };
    return PatoMadera;
}());
var Estanque = /** @class */ (function () {
    function Estanque() {
    }
    Estanque.prototype.sendToPlay = function (pato) {
        pato.jugar();
    };
    return Estanque;
}());
var pato1 = new Duck();
var patoMandera1 = new PatoMadera();
var estanque = new Estanque();
estanque.sendToPlay(pato1);
