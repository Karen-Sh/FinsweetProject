import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(public http: HttpClient) {}

  GetJsonItem<Type>(url:string){
    return this.http.get<Type>(url);
  }
  DeleteItem(url:string){
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.delete(url, {headers: header});
  }
  AddItem<Type>(url:string,value:Type){
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post<Type>(url,value, {headers: header});
  }
  AdditItem<Type>(url:string, value:Type){
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put<Type>(url,value, {headers: header});
  }
}
