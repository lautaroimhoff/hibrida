import { Component } from '@angular/core';
@Component({
    selector: 'page-farmacia',
   })
export class Farmacia {
    id : number; 
    nombre : string; 
    calle : string; 
    numero : string; 
    telefono : string; 
    email : string; 
    constructor(){
        this.nombre=""; 
        this.calle=""; 
        this.numero=""; 
        this.telefono=""; 
        this.email = ""; 
}
  
     muestraNombre(){
        return this.nombre; 
    }
     
    direccion(){
         return this.calle + ' ' + this.numero; 

     }

}