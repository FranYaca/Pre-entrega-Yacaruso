function costo_iva(monto , tipo_producto){
    if( tipo_producto == 1 ){
        let costo_iva = monto*0.21
        return costo_iva
    }
    else{
        let costo_iva = 0
        return costo_iva
    }

}



let inicio = prompt("Ingresar o Salir")

do{
    if(inicio=="Salir"){
        console.log("Saliste del sistema");
    }
    else if(inicio=="Ingresar" || "Seguir"){

        producto = prompt("Ingrese un producto");
        monto = parseInt(prompt ("Ingrese el valor"));
        tipo_producto = prompt("Ingrese el tipo de producto [1: con IVA, 2: sin IVA]");
        
        total = monto + costo_iva(monto, tipo_producto);
        
        
        console.log("Producto: ", producto);
        console.log("Precio: ", monto);
        console.log("Tipo de producto: ", tipo_producto);
        console.log("Precio total: ", total);
        inicio = prompt("¿Desea continuar?: Seguir o Salir")
    }
}


while (inicio !="Salir"){
}

console.log("Cesión Finalizada");




