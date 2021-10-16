//las clases derivadas deben poder sustituirse por sus clases base
// Toda clase  que es hija de otra clase, debe poder utilizarse como si fuera el padre.


interface IVolar {
    volar(): void;
}

interface INadar {
    nadar(): void;
}

interface ICuak {
    cuack(): void;
}


class Pato implements IVolar, INadar, ICuak {

    cuack(): void {
        console.log('cuak!!!');
    }
    nadar(): void {
        console.log('nado nado');

    }
    volar(): void {
        console.log('volarr');
    }

}

class PatoGoma implements INadar, ICuak {

    cuack(): void {
        console.log('cuak!!!');
    }
    nadar(): void {
        console.log('nado nado');
    }

}


class PatoProcesador {


    makeDucksFly(patos : IVolar[]){

        for(let pato of patos){
            pato.volar()
        }
    }
}


let patoProcesador = new PatoProcesador()


let pato = new  Pato()
let patoGoma = new PatoGoma()


//no podremos pasar objetos de pato de goma en este metodo
patoProcesador.makeDucksFly([
    pato,
   //patoGoma
])



