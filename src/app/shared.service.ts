import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:7171/api";
  readonly PhotoUrl="https://localhost:7171/Photos";

  constructor(private http:HttpClient) { }

  getItmList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Items');
  }

  addItem(val:any){
    return this.http.post(this.APIUrl+'/Items',val);
  }

  updateItem(val:any){
    return this.http.put(this.APIUrl+'/Items',val);
  }

  deleteItem(val:any){
    return this.http.delete(this.APIUrl+'/Items/'+val);
  }

  getCustList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Customer/SaveFile',val);
  }
  getAllItemNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Customer/GetAllItemNAmes');
  }
}
