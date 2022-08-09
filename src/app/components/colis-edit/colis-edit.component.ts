import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colis } from 'src/app/colis';
import { DatacolisService } from 'src/app/service/datacolis.service';

@Component({
  selector: 'app-colis-edit',
  templateUrl: './colis-edit.component.html',
  styleUrls: ['./colis-edit.component.css']
})
export class ColisEditComponent implements OnInit {
  id:any;
  data:any;
  colis = new Colis();
  constructor(private route:ActivatedRoute, private datacolisService:DatacolisService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getColisData();
  }
  getColisData(){
    this.datacolisService.geColisById(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.colis = this.data
      }
        
    )
  }
  updateColis(){
    this.datacolisService.updateColis(this.id,this.colis).subscribe(
      res => {
      //  console.log(res);
      //  this.getClientData();
       //console.log("Données client modifier avec success");
       alert("Données du colis modifier avec success");
      }
    )
  }
}
