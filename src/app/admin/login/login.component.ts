import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { DataService } from 'src/app/service/data.service';
import { environment, host } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,NgIf]
})
export class LoginComponent {
    constructor(private fb:FormBuilder, private service:DataService, private router:Router){}
    form:FormGroup =this.fb.group({
      e_mail:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pass:  ['',[Validators.required, Validators.minLength(6),Validators.maxLength(20)]]
    })
    input= document.getElementsByTagName('input')
    save(){
      const log ={
        email: this.input[0].value,
        password: this.input[1].value,
        accessToken: ''
      }
     this.service.AddItem(environment.login.get, log).subscribe(data=>{
        localStorage.setItem('token',JSON.stringify(data.accessToken));
        this.router.navigate(['/admin'])
     })
      this.form.reset()
    }
}


