import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Farmacia } from '../../providers/farmacia-model/farmacia';
import { FarmaciaModelProvider  } from '../../providers/farmacia-model/farmacia-model';  
@Component({
  
  selector: 'page-gestionFarmacias',
  templateUrl: 'gestionFarmacias.html'

})
export class GestionFarmacias {
   
   farmacias : Array<Farmacia> = new Array();  
   farmacia : Farmacia = new Farmacia();
   farmaciaAux : Farmacia = new Farmacia();  
   action : string = "listar"; 
   
   constructor(public navCtrl: NavController , public alerCtrl: AlertController , public server:FarmaciaModelProvider) {
    
    

    }
    ionViewDidLoad(){
      this.listarFarmacias();

    
    }

  
    onClick(nombre:string){
      console.log(nombre);
    }

    listarFarmacias(){
        this.server.listarFarmacias().subscribe(
        (res) => { 
          this.farmacias =  res['farmacias'];
          console.log("Exito");   
          },
        (error) =>{
          console.error(error);
        }
      )
    }
    
    
    agregarFarmacia(){
    this.server.post(this.farmacia); 
    this.showAlert(this.farmacia.nombre);
    this.farmacias.push(this.farmacia);
    this.farmacia = new Farmacia();
    }
    
    cancelarPost(){
    this.farmacia = new Farmacia();
    }
    cancelarPut(){
    this.farmaciaAux = new Farmacia();
    }
    
    showAlert(nombre:string) {
      let alert = this.alerCtrl.create({
        title: 'La farmacia ' + nombre  + ' ha sido agregada!',
        subTitle: 'Ya puede visualizarla en la lista',
        buttons: ['OK']
      });
      alert.present();
    }
    modificarFarmacia(){
      this.server.put(this.farmaciaAux);
      for(let i = 0; i<this.farmacias.length ; i++ ){
        if(this.farmacias[i].id == this.farmaciaAux.id) {
          this.farmacias[i] = this.farmaciaAux; 
        }
      }
      this.farmaciaAux = new Farmacia(); 
      
    }
    eliminarFarmacia(){
      this.server.delete(this.farmaciaAux); 
      for(let i = 0; i<this.farmacias.length ; i++ ){
        if(this.farmacias[i].id == this.farmaciaAux.id) {
          this.farmacias.splice(i); 
        }
      }
      this.farmaciaAux = new Farmacia(); 
    }

    obtenerFarmacia(id:number){
      this.server.obtenerFarmacia(id).subscribe(
        (res) => {
          this.farmacia = <Farmacia> res;
          console.log("exito2");
        },
        (error) =>{
          console.log(error); 

        }
      )


    }
  
  
}
