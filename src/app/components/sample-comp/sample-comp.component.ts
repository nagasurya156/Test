import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounce } from 'rxjs';
@Component({
  selector: 'app-sample-comp',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './sample-comp.component.html',
  styleUrl: './sample-comp.component.scss'
})
export class SampleCompComponent {
  
  constructor(private fb:FormBuilder){}
  myForm!: FormGroup;
  listItems:any[]=[]
  ngOnInit(){
  this.myForm=this.fb.group({
    inputField:new FormControl('basic',[Validators.required])
  })

  }
  clickFn(){
    // this.myForm.patchValue({inputField:'updated'})
    let value=this.myForm.value['inputField']
    this.listItems.push(value)
    console.log(this.listItems)
  }
  deleteFn(item:any,index:any){
    this.listItems.splice(index,1)
  }
}
