import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscribe } from 'src/app/models/subscribe';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports:[RouterModule,ReactiveFormsModule]
})
export class FooterComponent {
    constructor(private fb:FormBuilder,private service:DataService){}
    form:FormGroup =this.fb.group({
      e_mail: ['',[Validators.required , Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$")]]
    })
    seve(){
      let fol:Subscribe = {
        e_mail : this.form.get('e_mail')?.value,
      };
      this.service.AddItem<Subscribe>(environment.sub.get,fol).subscribe(data=>{
        this.form.reset();
      });
      alert('Thank you for subscribing, we are very glad that you are with us.');
    }
}
