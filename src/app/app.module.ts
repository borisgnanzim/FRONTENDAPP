import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
//
import { GestionnairesComponent } from './components/gestionnaires/gestionnaires.component';
import { GestionnaireEditComponent } from './components/gestionnaire-edit/gestionnaire-edit.component';
import { ColisComponent } from './components/colis/colis.component';
import { ColisEditComponent } from './components/colis-edit/colis-edit.component';
import { PaquetsComponent } from './components/paquets/paquets.component';
import { PaquetEditComponent } from './components/paquet-edit/paquet-edit.component';
//
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
const appRoutes:Routes = [
  {
    path:'espaceclient',component:ClientsComponent
  },
  {
    path:'edit/:id',component:ClientEditComponent
  },

  {
    path:'espacegestionnaire',component:GestionnairesComponent
  },
  {
    path:'editGestionnaire/:id',component:GestionnaireEditComponent
  },
  {
    path:'espacecolis',component:ColisComponent
  },
  {
    path:'editColis/:id',component:ColisEditComponent
  },
  {
    path:'espacepaquet',component:PaquetsComponent
  },
  {
    path:'editPaquet/:id',component:PaquetEditComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    ClientEditComponent,
    GestionnairesComponent,
    GestionnaireEditComponent,
    ColisComponent,
    ColisEditComponent,
    PaquetsComponent,
    PaquetEditComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
