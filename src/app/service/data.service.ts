import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = ' http://localhost:3000';
  
  constructor(public http: HttpClient) { 
    
  }

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
}
