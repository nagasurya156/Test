import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import{ FormControl,ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-new-comp1',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-comp1.component.html',
  styleUrl: './new-comp1.component.scss'
})
export class NewComp1Component {
nameControl=new FormControl('here');
Arr:any=[]
nameSignal = signal<any[]>([this.nameControl.value || '']);

constructor(){
  this.nameControl.valueChanges.subscribe(value=>{
    //this.nameSignal.mutate(arr => arr.push(value));
    this.nameSignal.update(i=>[...i,value])
  })
}
addtoArr(){
 this.Arr.push(this.nameControl.value)
 console.log("check",this.Arr)
}

}
