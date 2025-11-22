import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-comp2',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-comp2.component.html',
  styleUrl: './new-comp2.component.scss'
})
export class NewComp2Component {
 tasks:any[]=[]
 newTask:string='';
 fromEdit:boolean=false;
 index1: number=0;
 addTask(){
if(this.fromEdit){
 this.tasks.splice(this.index1,1,this.newTask)
//  this.tasks.splice()
}
else{
  this.tasks.push(this.newTask)
}
  this.newTask='';

 }
 delete(index:number){
  this.tasks.splice(index,1)
 }
 edit(index:number){
  this.fromEdit=true;
  this.index1=index
  this.newTask=this.tasks[index]
 }
}
