import { HttpClient } from '@angular/common/http';
import { Component, Input, signal } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import * as res from './../../../assets/resJson.json';

// import {resJson.JSON} from './../../../assets/resJson.JSON'
export interface User {id:number}

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  inputName =signal<string>('') ;

  constructor(private httpClient: HttpClient) { 
    this.inputName.set('here you go');
    let a="boy walking";
    console.log(typeof("surya"), a.includes("sur")); 
    console.warn(typeof("surya"), a.includes("sur")); 
    console.error(typeof("surya"), a.includes("sur")); 

    
  }    
  ngOnInit(){
      this.httpClient.get<User>('https://api.github.com/users').subscribe(data => {
      console.log("here r",data);
      })
      this.httpClient.get('assets/resJson.json').subscribe(data => {
        console.log("here",data);

     });
  let a:any []=[[1,2,3],[4,5,6],[7,8,[9]],11,23];
  let b=[1,4,5,6]
  let c=b.includes(4)
  let d=a.flat(2).flatMap((x)=>x=x*2);
  console.log(d,c);
  }
}
