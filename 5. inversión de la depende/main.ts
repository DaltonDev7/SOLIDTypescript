// Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.
//  Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.



//esta clase no lo podemos modificar  
//ANTES
/*
class MyBanckApi {


    public charge(){
        // Logica para cobrar
    }

}

class Tienda {

    protected myBankApi : MyBanckApi;


    constructor(myBankApi : MyBanckApi){
        this.myBankApi = myBankApi
    }

    public comprar(){
        this.myBankApi.charge()
    }

}


*/


//AHORA


interface PaymentProcessor {

    pagar(): void;

}



class MyBanckApi {

    public charge() {
        // Logica para cargar
    }
}

class PaypalApi {

    public chargeCustomer(): void {
        // Logica para cargar
    }
}



class Tienda {

    protected PaymentProcessor: PaymentProcessor;


    constructor(paymentProcessor: PaymentProcessor) {
        this.PaymentProcessor = paymentProcessor
    }

    public comprar() {
        this.PaymentProcessor.pagar()
    }

}

//creando  adaptador
class MyBankPaymentProcessor implements PaymentProcessor {

    protected myBankApi: MyBanckApi;


    constructor(
        myBankApi: MyBanckApi
    ) {
        this.myBankApi = myBankApi
    }

    pagar(): void {
        this.myBankApi.charge()
    }

}

//creando adaptador paypal
class PaypalPaymentProcessor implements PaymentProcessor {

    protected paypalApi: PaypalApi;

    constructor(paypalApi: PaypalApi){
        this.paypalApi = paypalApi
    }



    pagar(): void {
       this.paypalApi.chargeCustomer()
    }
}