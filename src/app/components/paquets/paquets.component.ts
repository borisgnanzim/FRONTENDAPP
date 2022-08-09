import { Component, OnInit } from '@angular/core';
import { Paquet } from 'src/app/paquet';
import { DatapaquetService } from 'src/app/service/datapaquet.service';

@Component({
  selector: 'app-paquets',
  templateUrl: './paquets.component.html',
  styleUrls: ['./paquets.component.css']
})
export class PaquetsComponent implements OnInit {
  paquets:any;
  paquet=new Paquet;
  constructor(private datapaquetService:DatapaquetService) { }

  //constructor() { }

  ngOnInit(): void {
    this.getPaquetData();
  }
  getPaquetData(){
    console.log('Liste des gestionnaires');
    this.datapaquetService.getDatapaquet().subscribe(res =>{
      console.log(res);
      this.paquets = res; 
    })
  }
  insertPaquetData(){
   //console.log('bonsoir-insertion-test');
   //console.log(this.gestionnaire);
   this.datapaquetService.insertDatapaquet(this.paquet).subscribe(res =>{
     console.log(res);
     this.getPaquetData();
   })
  }
  deletePaquetData(id:any){
   //console.log(id);
   this.datapaquetService.deleteDatapaquet(id).subscribe(res =>{
     //console.log(res);
     this.getPaquetData();
   })
  }

  
}
