import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom, from } from 'rxjs';

@Component({
  selector: 'app-new-comp2',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './new-comp2.component.html',
  styleUrl: './new-comp2.component.scss'
})
export class NewComp2Component {
 constructor(private formBuilder:FormBuilder,private http:HttpClient){
  this.callService()
 } 
 myForm!:FormGroup

 tasks:any[]=[]
 newTask:string='';
 fromEdit:boolean=false;
 index1: number=0;
 ngOnInit(){
  this.myForm=this.formBuilder.group({
    myInput:new FormControl('default',[Validators.required])
 })
 }
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
  this.myForm.patchValue({myInput:this.tasks[index]})
  this.newTask=this.tasks[index]
 }
 addString(){
  this.tasks.push(this.myForm.value['myInput'])
 }
 async callService(){

  fetch("https://api.github.com/users/emails").then((response)=>response.json()).then(res=>{console.log('fetch',res)})
  this.http.get("https://api.github.com/users/emails").subscribe(data=>{
  console.log("http",data)
  return data;
  }
  )
  const fromHttp=await firstValueFrom(this.http.get("https://api.github.com/users/emails"))
  console.log("from FirstValueFrom",fromHttp)
 }
 
}
