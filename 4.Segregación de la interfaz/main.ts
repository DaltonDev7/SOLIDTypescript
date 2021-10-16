//En el cuarto principio de SOLID, el tío Bob sugiere:
// “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una finalidad concreta.
/*
En este sentido, según el Interface Segregation Principle (ISP), 
es preferible contar con muchas interfaces que definan pocos métodos 
que tener una interface forzada a implementar muchos métodos a los que no dará uso.
*/

interface Jugar {
    jugar(): void;
}

interface Flotar {
    flotar(): void;
}

interface Cuak {
    cuack(): void;
}


class Duck implements Flotar, Jugar {

    jugar(): void {
        this.cuack();
        this.flotar();
    }

    cuack(): void {
        console.log('cuackk');

    }

    flotar(): void {
        console.log('flotarr');

    }
}

class PatoMadera implements Flotar, Jugar {

    jugar(): void {
        this.flotar()
    }
    flotar(): void {
        throw new Error("Method not implemented.");
    }

}


class Estanque {
    public sendToPlay(pato: Jugar) {
        pato.jugar()
    }
}


let pato1 : Duck = new Duck()
let patoMandera1 : PatoMadera = new PatoMadera();


let estanque = new Estanque()




estanque.sendToPlay(pato1)







