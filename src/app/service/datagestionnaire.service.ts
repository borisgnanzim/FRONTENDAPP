import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gestionnaire } from '../gestionnaire';

@Injectable({
  providedIn: 'root'
})
export class DatagestionnaireService {

  constructor(private httpClient: HttpClient) { }
  getDatagestionnaire(){
    return this.httpClient.get('http://127.0.0.1:8000/api/gestionnaires');
  }

  insertDatagestionnaire(data:Gestionnaire){
    return this.httpClient.post('http://127.0.0.1:8000/api/addGestionnaire',data);
  }
  deleteDatagestionnaire(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteGestionnaire/'+id);
  }
  geGestionnaireById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/gestionnaire/'+id);
  }
  updateGestionnaire(id:any, data:Gestionnaire){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateGestionnaire/'+id,data);
  }
  
}
