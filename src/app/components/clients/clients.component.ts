import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients:any;
client=new Client;
  constructor(private dataService:DataService) { }
  //constructor() { }

  ngOnInit(): void {
     this.getClientData();
  }
   getClientData(){
     console.log('Liste des clients');
     this.dataService.getData().subscribe(res =>{
       console.log(res);
       this.clients = res; 
     })
   }
   insertData(){
    //console.log('bonsoir-insertion-test');
    //console.log(this.client);
    this.dataService.insertData(this.client).subscribe(res =>{
      console.log(res);
      this.getClientData();
    })
   }
   deleteData(id:any){
    //console.log(id);
    this.dataService.deleteData(id).subscribe(res =>{
      //console.log(res);
      this.getClientData();
    })
   }

}
