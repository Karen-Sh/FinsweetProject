import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = ' http://localhost:3000';
  
  constructor(public http: HttpClient) { 
    
  }

  GetJsonCategory(){
    return this.http.get(this.url+'/categorys');
  }

  GetJsonAuthor(){
    return this.http.get(this.url+'/authot');
  }

  GetJsonBlog(){
    return this.http.get(this.url+'/blog');
  }

  GetJsonCategori(){
    return this.http.get(this.url+'/category');
  }

  GetJsonHomeAuth(){
    return this.http.get(this.url+'/homeAuthers');
  }

  GetJsonHomeAuthers(){
    return this.http.get(this.url+'/authers');
  }
}
