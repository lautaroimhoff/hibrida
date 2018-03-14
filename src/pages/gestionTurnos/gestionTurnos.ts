import {Component} from '@angular/core'; 
import {NavController} from 'ionic-angular'; 
import { Farmacia } from '../../providers/farmacia-model/farmacia';
import { Turno } from '../../providers/turnos-model/turno';
import { FarmaciaModelProvider  } from '../../providers/farmacia-model/farmacia-model';  
import { TurnoModelProvider  } from '../../providers/turnos-model/turnos-model';  

@Component({
    selector: 'page-gestionTurnos' , 
    templateUrl : 'gestionTurnos.html'
})
export class GestionTurnos {
    action :string = "carga";
    farmacias : Array<Farmacia> = new Array(); 
    lista : Array<Turno> = new Array();
    farmacia : Farmacia = new Farmacia();  
    fecha : Date = new Date();
    turno : Turno = new Turno();  
    constructor(public navCtrl : NavController , public serverF : FarmaciaModelProvider ,public serverT : TurnoModelProvider){

    }
    public event = {
        month: '2018-01-01',
        timeStarts: '08:00',
        timeEnds: '2020-01-01'
      }
      ionViewDidLoad(){
        this.listarFarmacias();
  
      
      }
      ionViewWillEnter(){
        this.listarFarmacias();
        console.log("Listo");
      }
      agregarAlista(){
          let turno : Turno = new Turno(); 
          turno.farmacia = this.farmacia; 
          turno.fecha = this.fecha; 
          this.turno = turno; 
          this.lista.push(turno); 
           
      }
      listarFarmacias(){
          
         
        this.serverF.listarFarmacias().subscribe(
        (res) => { 
          this.farmacias =  res['farmacias'];
          console.log("Exito");   
          },
        (error) =>{
          console.error(error);
        }
      )
    }
      onClick(){
          this.serverT.listarTurnos(); 

      }
      confimarCarga(){
        this.serverT.post(this.turno);
        
      }
}

