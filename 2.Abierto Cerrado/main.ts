// Deberías ser capaz de extender el comportamiento de una clase, sin modificarla
//  El principio Open/Closed dice que una clase/método debe estar abierto a extensiones pero cerrado a modificaciones.


export interface IForma {

    calcularArea(): number

}

export class Rectangulo implements IForma {

    width: number;
    heigth: number;

    calcularArea(): number {
        return this.width * this.heigth
    }

}

export class Triangulo implements IForma {

    width: number;
    heigth: number;


    calcularArea(): number {
        return this.width * this.heigth / 2
    }

}


class AreaCalculator {



    computeArea(formas: IForma[]) {
        let areas = []

        for (let forma of formas) {
            areas.push(forma.calcularArea())
        }
      
        return areas;

    }



}

//creamos las figuras
let triangulo :  Triangulo = new Triangulo();
triangulo.width = 100;
triangulo.heigth = 230;

let rectangulo : Rectangulo = new Rectangulo();
rectangulo.heigth = 400;
rectangulo.width = 158;



let calculator = new AreaCalculator();


let shapes = [ 
    triangulo,
    rectangulo
]


console.log(calculator.computeArea(shapes));
