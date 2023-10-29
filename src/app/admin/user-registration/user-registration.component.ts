import { Component, Inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { DataService } from 'src/app/service/data.service';
import { Authers } from 'src/app/models/authers';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports:[
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class UserRegistrationComponent {
  stepper: any;
  constructor(private fb: FormBuilder,private service:DataService,private router:Router,private http:HttpClient){
  }
  firstForm = this.fb.group({
    email: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
  });
  secondForm = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(3)]],
    description: ['',[Validators.required,Validators.minLength(3)]],
    img:['',[Validators.required]]
  });
  save(){
     let reg:Authers = {
      img: this.secondForm.get('img')?.value,
      title: this.secondForm.get('name')?.value,
      text: this.secondForm.get('description')?.value
      };
      this.service.AddItem<Authers>(environment.authers.get, reg).subscribe(()=>{
        this.secondForm.reset();
      });
      let user={
        email: this.firstForm.get('email')?.value,
        password:this.firstForm.get('password')?.value,
        img: this.secondForm.get('img')?.value,
        title: this.secondForm.get('name')?.value,
        text: this.secondForm.get('description')?.value
      }
      this.http.post(environment.register.get,user).subscribe(()=>{
        this.firstForm.reset();
      })
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }
}
