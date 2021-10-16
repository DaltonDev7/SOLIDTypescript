//las clases derivadas deben poder sustituirse por sus clases base
// Toda clase  que es hija de otra clase, debe poder utilizarse como si fuera el padre.
var Pato = /** @class */ (function () {
    function Pato() {
    }
    Pato.prototype.cuack = function () {
        console.log('cuak!!!');
    };
    Pato.prototype.nadar = function () {
        console.log('nado nado');
    };
    Pato.prototype.volar = function () {
        console.log('volarr');
    };
    return Pato;
}());
var PatoGoma = /** @class */ (function () {
    function PatoGoma() {
    }
    PatoGoma.prototype.cuack = function () {
        console.log('cuak!!!');
    };
    PatoGoma.prototype.nadar = function () {
        console.log('nado nado');
    };
    return PatoGoma;
}());
var PatoProcesador = /** @class */ (function () {
    function PatoProcesador() {
    }
    PatoProcesador.prototype.makeDucksFly = function (patos) {
        for (var _i = 0, patos_1 = patos; _i < patos_1.length; _i++) {
            var pato_1 = patos_1[_i];
            pato_1.volar();
        }
    };
    return PatoProcesador;
}());
var patoProcesador = new PatoProcesador();
var pato = new Pato();
var patoGoma = new PatoGoma();
//no podremos pasar objetos de pato de goma en este metodo
patoProcesador.makeDucksFly([
    pato,
    pato
    //patoGoma
]);
