import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paquet } from '../paquet';

@Injectable({
  providedIn: 'root'
})
export class DatapaquetService {

  constructor(private httpClient: HttpClient) { }
  getDatapaquet(){
    return this.httpClient.get('http://127.0.0.1:8000/api/paquets');
  }

  insertDatapaquet(data:Paquet){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPaquet',data);
  }
  deleteDatapaquet(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePaquet/'+id);
  }
  gePaquetById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/paquet/'+id);
  }
  updatePaquet(id:any, data:Paquet){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatePaquet/'+id,data);
  }
  
}
