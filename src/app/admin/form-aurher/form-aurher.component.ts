import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AutherAdminComponent, DialogData } from '../auther-admin/auther-admin.component';
import { NgIf } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form-aurher',
  templateUrl: './form-aurher.component.html',
  styleUrls: ['./form-aurher.component.css'],
  standalone: true,
  imports:[MatDialogModule,AutherAdminComponent,NgIf,
           MatFormFieldModule, MatInputModule, 
           FormsModule, MatButtonModule,ReactiveFormsModule,
          ],
 providers: [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
 ]
})
export class FormAurherComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  name = new FormControl('', [Validators.required,Validators.minLength(3)]);
  textarea = new FormControl('', [Validators.required,Validators.minLength(3)]);
  img = new FormControl('', [Validators.required]);
}
