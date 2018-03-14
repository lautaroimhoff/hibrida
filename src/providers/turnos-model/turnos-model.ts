import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turno } from '../turnos-model/turno';
/*
  Generated class for the TurnosModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class TurnoModelProvider {


  constructor(public http: HttpClient) {
    console.log('Hello TurnosModelProvider Provider');
  }
  
  post(turno : Turno ){
    let turnojson : turnoJSON = new turnoJSON();
    var url = 'http://localhost:3000/turnos';
    turnojson.fecha = turno.fecha; 
    turnojson.idFarmacia = turno.farmacia.id; 
    return new Promise(resolve => {
    this.http.post(url,turnojson)
       .subscribe(data => {
         resolve(data);
        });
   });
  }
  listarTurnos(){
    var url = 'http://localhost:3000/';
    return this.http.get(url);
  }

 
}
class turnoJSON {
  id : number;
  fecha : Date; 
  idFarmacia :number; 
  }