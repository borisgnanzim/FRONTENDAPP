import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colis } from '../colis';

@Injectable({
  providedIn: 'root'
})
export class DatacolisService {

  constructor(private httpClient: HttpClient) { }
  getDatacolis(){
    return this.httpClient.get('http://127.0.0.1:8000/api/colis');
  }

  insertDataColis(data:Colis){
    return this.httpClient.post('http://127.0.0.1:8000/api/addColis',data);
  }
  deleteDatacolis(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteColis/'+id);
  }
  geColisById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/colis/'+id);
  }
  updateColis(id:any, data:Colis){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateColis/'+id,data);
  }
}
