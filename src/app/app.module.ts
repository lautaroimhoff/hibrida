import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GestionFarmacias } from '../pages/gestionFarmacias/gestionFarmacias';
import { GestionTurnos } from '../pages/gestionTurnos/gestionTurnos';
import { HomePage } from '../pages/home/home';
import { AltaPage } from '../pages/alta/alta';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { FarmaciaModelProvider } from '../providers/farmacia-model/farmacia-model';
import { TurnoModelProvider } from '../providers/turnos-model/turnos-model';

@NgModule({
  declarations: [
    MyApp,
    GestionFarmacias,
    GestionTurnos,
    AltaPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GestionFarmacias,
    GestionTurnos,
    AltaPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FarmaciaModelProvider,
    TurnoModelProvider,
  ]
})
export class AppModule {}
