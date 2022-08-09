import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id:any;
  data:any;
  client = new Client();
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData(){
    this.dataService.geClientById(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.client = this.data
      }
        
    )
  }
  updateClient(){
    this.dataService.updateClient(this.id,this.client).subscribe(
      res => {
      //  console.log(res);
      //  this.getClientData();
       //console.log("Données client modifier avec success");
       alert("Données du client modifier avec success");
      }
    )
  }

}
