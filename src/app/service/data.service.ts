import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = ' http://localhost:3000';
  
  constructor(public http: HttpClient) { 
    
  }

  GetJsonCategory<Type>(url:string){
    return this.http.get<Type>(url);
  }
  

  GetJsonHomeAuthers<T>(url:string){
    return this.http.get<T>(url);
  }

  GetJsonPost<T>(url:string){
    return this.http.get<T>(url);
  }
}
