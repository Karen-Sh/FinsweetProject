import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,NgIf]
})
export class LoginComponent {
    constructor(private fb:FormBuilder, private service:DataService){}
    form:FormGroup =this.fb.group({
      e_mail:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pass:  ['',[Validators.required, Validators.minLength(6),Validators.maxLength(20)]]
    })
    input= document.getElementsByTagName('input')
    save(){
      const log:Users ={
        email: this.input[0].value,
        password: this.input[1].value
      }
     let a= this.service.Login<Users>(environment.user.get , log).subscribe((data)=>{
      })
      this.form.reset()
    }
}
function register<T>(get: string, log: Users) {
  throw new Error('Function not implemented.');
}

function getItem(arg0: string): any {
  throw new Error('Function not implemented.');
}

