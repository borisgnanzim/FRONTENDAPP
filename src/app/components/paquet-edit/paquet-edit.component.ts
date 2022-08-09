import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paquet } from 'src/app/paquet';
import { DatapaquetService } from 'src/app/service/datapaquet.service';

@Component({
  selector: 'app-paquet-edit',
  templateUrl: './paquet-edit.component.html',
  styleUrls: ['./paquet-edit.component.css']
})
export class PaquetEditComponent implements OnInit {

  id:any;
  data:any;
  paquet = new Paquet();
  constructor(private route:ActivatedRoute, private datapaquetService:DatapaquetService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getpaquetData();
  }
  getpaquetData(){
    this.datapaquetService.gePaquetById(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.paquet = this.data
      }
        
    )
  }
  updatePaquet(){
    this.datapaquetService.updatePaquet(this.id,this.paquet).subscribe(
      res => {
      //  console.log(res);
      //  this.getGestionnaireData();
       //console.log("Données du Gestionnaire modifier avec success");
       alert("Données du paquet modifier avec success");
      }
    )
  }

}
