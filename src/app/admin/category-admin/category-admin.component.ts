import { Component, OnInit } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment';
import { MatTableModule} from '@angular/material/table';
import { NgIf } from '@angular/common';
import { FormCategoryComponent } from '../form-category/form-category.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css'],
  standalone: true,
  imports: [MatIconModule,MatDialogModule,MatTableModule,NgIf,FormCategoryComponent]
})
export class CategoryAdminComponent implements OnInit{
  category:Category[]=[]
  action!:string
  constructor(private service:DataService, public dialog:MatDialog){}
  displayedColumns: string[] = [
    'position',
    'category', 
    'description',
    'image',
    'action'
  ];
  ngOnInit(): void {
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data=>{
      this.category =data
    })
  }
  reset(){
    this.service.GetJsonItem<Category[]>(environment.category.get).subscribe(data=>{
      this.category =data
    })
  }
  del(el:number){
    this.service.DeleteItem(`${environment.category.get}/${el}`).subscribe(()=>{
        this.reset()
    })
  }
  openAddDialog(){
   const dialogRef = this.dialog.open(FormCategoryComponent, {
      data:{
       action: "add"
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const addCategory=res.data;            
        if (res.action=="add") {
          dialogRef.componentInstance.form.patchValue({
            category: addCategory.category,
            text: addCategory.text,
            img: addCategory.img
            
          });
          this.service.AddItem<Category>(`${environment.category.get}`, addCategory).subscribe(()=>{
              this.reset();  
          })
        }
      }
    })
  }
  openAdditDialog(el:Category,id:number){
    const dialogRef = this.dialog.open(FormCategoryComponent, {
      data:{
       action: "addit",
       categoryData:{...el}
       }
    });
    dialogRef.afterClosed().subscribe(res=>{
      if (res&&res.data) {
        const additCategory=res.data; 
              
        if (res.action=="addit") {
          dialogRef.componentInstance.form.patchValue({
            category: additCategory.category,
            text: additCategory.text,
            img: additCategory.img
            
          });
          this.service.AdditItem<Category>(`${environment.category.get}/${id}`, additCategory).subscribe(()=>{
              this.reset();  
          })
        }
      }
    })
  }
}
