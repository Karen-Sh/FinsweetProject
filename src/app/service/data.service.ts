import { HttpClient } from '@angular/common/http';
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
}
