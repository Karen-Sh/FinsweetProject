import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  form!:FormGroup
      ngOnInit(): void {
        this.form= new FormGroup({
          full_nume:     new FormControl('',[Validators.required,Validators.minLength(3)]),
          e_mail:        new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          select:        new FormControl('Query Related',[Validators.required]),
          textarea:      new FormControl('',[Validators.required, Validators.minLength(3)])
      });
      }
      save(){
        this.form.reset() 
      }
}
