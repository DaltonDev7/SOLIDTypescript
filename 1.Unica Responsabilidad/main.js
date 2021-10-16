// una clase debería tener una, y solo una, razón para cambiar”. 
// Una clase deberia tener una sola responsabilidad, que tiene que hacer una sola cosa, de esta forma
// podemos saber que lo hace muy bien.
var Empleado = /** @class */ (function () {
    function Empleado(Nombre, Apellido, Sueldo) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Sueldo = Sueldo;
    }
    Empleado.prototype.mostrarDetalles = function () {
        //this.PagoTotalAnual = this.Sueldo * 12
        this.calcularPagoAnual();
        console.log(" Nombre : " + this.Nombre);
        console.log(" Apellido : " + this.Apellido);
        console.log(" PagoTotalAnual : " + this.PagoTotalAnual);
    };
    Empleado.prototype.calcularPagoAnual = function () {
        this.PagoTotalAnual = this.Sueldo * 12;
    };
    return Empleado;
}());
var empleado = new Empleado('Dalton', 'Tejada', 39000);
empleado.mostrarDetalles();
