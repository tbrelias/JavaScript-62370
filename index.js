function saludar(){
    alert("Bienvenidos a TuPrest");
    const nombreApellido = prompt("Ingrese su Nombre y Apellido");
    alert("Hola " + nombreApellido);
    alert("Tené hoy el dinero que necesitas");
}

saludar();

const edad = parseInt(prompt("ingrese su edad"));
console.log(edad);

if ( edad >= 18 ){
    
    alert("Usted es mayor de edad y responsable a cualquier accion a la que se comprometa");

    let prestamo = prompt("Simular prestamo personal \n Ingresa \n 1 para simular \n 2 para salir" );

    if ( prestamo == 1 ){
        
        while ( prestamo == 1 ){
            
            let monto = parseInt(prompt("Ingresa un monto y simulá tu préstamo"));
            console.log(monto);

            function cuotas (){
                
                let interes = monto * '0.5';
                let cuota = parseInt(prompt("Elegí un plazo hasta 12 cuotas \n 1 Cuota Sin Intereses \n 3 Cuotas Sin Intereses \n 6 Cuotas Sin Intereses \n 9 Cuotas"));
            
                if( cuota <= 6 ){
                   let cuotaTotal = monto / cuota;
                   let montoTotal = cuotaTotal * cuota;
                   alert(cuota + " cuotas de " + cuotaTotal + " En Total devolves " + montoTotal);
                }

                if( cuota > 6 ){
                    let cuotaTotal = monto + interes;
                    let cuotaTotalInteres = cuotaTotal / cuota;
                    let montoTotal = cuotaTotalInteres * cuota;
                    alert(cuota + " cuotas de " + cuotaTotalInteres + " En Total devolves " + montoTotal);
                }
            }
            
            cuotas();

            prestamo = prompt("Quieres simular otro prestamo ? \n Ingresa: \n 1 para si \n 2 para no" );
        }
    }
    
    if( prestamo == 2){
        alert("Gracias por visitarnos!");
    }

}else {
    alert("Usted es menor de edad, no podemos acordar un prestamo");
}