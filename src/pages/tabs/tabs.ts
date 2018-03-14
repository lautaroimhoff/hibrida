import { Component } from '@angular/core';

import { GestionFarmacias } from '../gestionFarmacias/gestionFarmacias';
import { GestionTurnos } from '../gestionTurnos/gestionTurnos';
import { HomePage } from '../home/home';
import { AltaPage } from '../alta/alta' ;

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GestionFarmacias;
  tab3Root = GestionTurnos;
  tab4Root = AltaPage; 

  constructor() {
    
  }
}
