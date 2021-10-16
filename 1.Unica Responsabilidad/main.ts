// una clase debería tener una, y solo una, razón para cambiar”. 
// Una clase deberia tener una sola responsabilidad, que tiene que hacer una sola cosa, de esta forma
// podemos saber que lo hace muy bien.   *APLICA TAMBIEN PARA LOS METODOS*

class Empleado {

    public Nombre?: string;
    public Apellido?: string;
    public Sueldo?: number;
    public PagoTotalAnual?: number;


    constructor(
        Nombre?: string,
        Apellido?: string,
        Sueldo?: number,
    ) {
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Sueldo = Sueldo
    }


    public mostrarDetalles(): void {


        //this.PagoTotalAnual = this.Sueldo * 12
        this.calcularPagoAnual()


        console.log(` Nombre : ${this.Nombre}`);
        console.log(` Apellido : ${this.Apellido}`);
        console.log(` PagoTotalAnual : ${this.PagoTotalAnual}`);
    }

    private calcularPagoAnual(): void {
        
        //...
        this.PagoTotalAnual = this.Sueldo * 12
    }

}



var empleado: Empleado = new Empleado('Dalton', 'Tejada', 39000)

empleado.mostrarDetalles()



