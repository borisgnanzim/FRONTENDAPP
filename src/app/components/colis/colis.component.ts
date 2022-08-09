import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/colis';
import { DatacolisService } from 'src/app/service/datacolis.service';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {

  coliss:any;
  colis=new Colis ;
  constructor(private datacolisService:DatacolisService) { }

  //constructor() { }

  ngOnInit(): void {
    this.getColisData();
  }
  getColisData(){
    console.log('Liste des Colis');
    this.datacolisService.getDatacolis().subscribe(res =>{
      console.log(res);
      this.coliss = res; 
    })
  }
  insertColisData(){
   //console.log('bonsoir-insertion-test');
   //console.log(this.gestionnaire);
   this.datacolisService.insertDataColis(this.colis).subscribe(res =>{
     console.log(res);
     this.getColisData();
   })
  }
  deleteColisData(id:any){
   //console.log(id);
   this.datacolisService.deleteDatacolis(id).subscribe(res =>{
     //console.log(res);
     this.getColisData();
   })
  }

}
