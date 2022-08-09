import { Component, OnInit } from '@angular/core';
import { Gestionnaire } from 'src/app/gestionnaire';
import { DatagestionnaireService } from 'src/app/service/datagestionnaire.service';

@Component({
  selector: 'app-gestionnaires',
  templateUrl: './gestionnaires.component.html',
  styleUrls: ['./gestionnaires.component.css']
})
export class GestionnairesComponent implements OnInit {
  gestionnaires:any;
  gestionnaire=new Gestionnaire;
  constructor(private datagestionnaireService:DatagestionnaireService) { }

  //constructor() { }

  ngOnInit(): void {
    this.getGestionnaireData();
  }
  getGestionnaireData(){
    console.log('Liste des gestionnaires');
    this.datagestionnaireService.getDatagestionnaire().subscribe(res =>{
      console.log(res);
      this.gestionnaires = res; 
    })
  }
  insertGestinnaireData(){
   //console.log('bonsoir-insertion-test');
   //console.log(this.gestionnaire);
   this.datagestionnaireService.insertDatagestionnaire(this.gestionnaire).subscribe(res =>{
     console.log(res);
     this.getGestionnaireData();
   })
  }
  deleteGestionnaireData(id:any){
   //console.log(id);
   this.datagestionnaireService.deleteDatagestionnaire(id).subscribe(res =>{
     //console.log(res);
     this.getGestionnaireData();
   })
  }

}
