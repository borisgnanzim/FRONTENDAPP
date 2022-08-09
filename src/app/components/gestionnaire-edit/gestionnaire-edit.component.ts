import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gestionnaire } from 'src/app/gestionnaire';
import { DatagestionnaireService } from 'src/app/service/datagestionnaire.service';
@Component({
  selector: 'app-gestionnaire-edit',
  templateUrl: './gestionnaire-edit.component.html',
  styleUrls: ['./gestionnaire-edit.component.css']
})
export class GestionnaireEditComponent implements OnInit {

  id:any;
  data:any;
  gestionnaire = new Gestionnaire();
  constructor(private route:ActivatedRoute, private datagestionnaireService:DatagestionnaireService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getgestinnaireData();
  }
  getgestinnaireData(){
    this.datagestionnaireService.geGestionnaireById(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.gestionnaire = this.data
      }
        
    )
  }
  updateGestionnaire(){
    this.datagestionnaireService.updateGestionnaire(this.id,this.gestionnaire).subscribe(
      res => {
      //  console.log(res);
      //  this.getGestionnaireData();
       //console.log("Données du Gestionnaire modifier avec success");
       alert("Données du gestionnaire modifier avec success");
      }
    )
  }

}
