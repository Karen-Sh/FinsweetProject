import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ContactUs } from 'src/app/models/contactUs';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports:[NgIf,ReactiveFormsModule]
})

export class ContactComponent implements OnInit {
      
      form: FormGroup = this.fb.group({
        full_name: ['',[Validators.required,Validators.minLength(3)]],
        e_mail:    ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        select:    ['',[Validators.required]],
        textarea:  ['',[Validators.required, Validators.minLength(3)]]
      });
      constructor(public fb:FormBuilder, private service: DataService){
      
      }
      ngOnInit(): void {
      }
      input= document.getElementsByTagName('input');
      sel=document.getElementsByTagName('select');
      text= document.getElementsByTagName('textarea')
      save(){
        const  contact :ContactUs ={
          fullName: this.input[0].value,
          email:    this.input[1].value,
          sel:      this.sel[0].value,
          message:  this.text[0].value
        }
        this.service.AddItem<ContactUs>(environment.contactUs.get, contact).subscribe(()=>{
          this.form.reset() 
        })
        this.form.reset() 
      }
}
