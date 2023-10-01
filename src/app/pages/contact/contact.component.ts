import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
      form: FormGroup = this.fb.group({
        full_name: ['',[Validators.required,Validators.minLength(3)]],
        e_mail:    ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        select:    ['',[Validators.required]],
        textarea:  ['',[Validators.required, Validators.minLength(3)]]
      });
      constructor(public fb:FormBuilder){
      
      }
      ngOnInit(): void {
      
      }
      save(){
        this.form.reset() 
      }
}
