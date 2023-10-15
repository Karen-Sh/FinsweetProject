import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,NgIf]
})
export class LoginComponent {
    constructor(private fb:FormBuilder){}
    form:FormGroup =this.fb.group({
      e_mail:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pass:  ['',[Validators.required, Validators.minLength(6),Validators.maxLength(20)]]
    })
    save(){
      this.form.reset()
    }
}
