import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../client';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients');
  }

  insertData(data:Client){
    return this.httpClient.post('http://127.0.0.1:8000/api/addClient',data);
  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteClient/'+id);
  }
  geClientById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/client/'+id);
  }
  updateClient(id:any, data:Client){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateClient/'+id,data);
  }
  
}
