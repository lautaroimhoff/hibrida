import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmacia } from '../farmacia-model/farmacia';

/*
  Generated class for the FarmaciaModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FarmaciaModelProvider {
  farmacias : Array<Farmacia>; 
  
  constructor(public http: HttpClient) {
    this.listarFarmacias();

  }
  post(farmacia : Farmacia ){
    var url = 'http://localhost:3000/farmacias';
   return new Promise(resolve => {
    this.http.post(url,farmacia)
       .subscribe(data => {
         resolve(data);
        });
   });
  }
  put(farmacia : Farmacia ){
    var url = 'http://localhost:3000/farmacias/'+farmacia.id;
   return new Promise(resolve => {
    this.http.put(url,farmacia)
       .subscribe(data => {
         resolve(data);
        });
   });
  }
  delete(farmacia : Farmacia ){
    var url = 'http://localhost:3000/farmacias/'+farmacia.id;
   return new Promise(resolve => {
    this.http.delete(url)
       .subscribe(data => {
         resolve(data);
        });
   });
  }

  
  listarFarmacias() {
    return this.http.get('http://localhost:3000/db');   
  }
  obtenerFarmacia(id:number){
    var url = 'http://localhost:3000/farmacias/'+id;
    return this.http.get(url);
  }
 
}
