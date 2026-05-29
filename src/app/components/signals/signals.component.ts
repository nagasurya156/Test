import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; 
import { firstValueFrom, fromEvent, Observable } from 'rxjs';
import  axios  from 'axios';
import { Subject, BehaviorSubject } from 'rxjs';
export interface User {id:number}

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  // standalone:true
})

export class SignalsComponent implements AfterViewInit {
  inputName =signal<string>('') ;
  serviceData: any;
  id:number=1;
  @ViewChild('input', { static: true }) input!: ElementRef;
  constructor(private httpClient: HttpClient,) { 
    this.inputName.set('here you go');
    let a="boy walking";
    console.log(typeof("surya"), a.includes("sur")); 
    console.warn(typeof("surya"), a.includes("sur")); 
    console.error(typeof("surya"), a.includes("sur"));
// Subject example
const subject = new Subject<number>();
subject.subscribe(value => console.log('Subject Subscriber A:', value));
subject.next(1); // Output: Subscriber A: 1
subject.subscribe(value => console.log('Subject Subscriber B:', value));
subject.next(2); // Output: Subscriber A: 2, Subscriber B: 2
subject.subscribe(value => console.log('Subject Subscriber c:', value));
subject.next(3); 
subject.subscribe(value => console.log('Subject Subscriber d:', value));
subject.next(4); 

// BehaviorSubject example
const behaviorSubject = new BehaviorSubject<number>(0); // Initial value: 0
behaviorSubject.subscribe(value => console.log('behaviorSubject Subscriber A:', value));
behaviorSubject.next(1); // Output: Subscriber A: 1
behaviorSubject.subscribe(value => console.log('behaviorSubject Subscriber B:', value));
behaviorSubject.next(2); // Output: Subscriber A: 2, Subscriber B: 2
behaviorSubject.subscribe(value => console.log('behaviorSubject Subscriber c:', value));
behaviorSubject.next(3); // Output: Subscriber A: 2, Subscriber B: 2
behaviorSubject.subscribe(value => console.log('behaviorSubject Subscriber d:', value));
behaviorSubject.next(4); 
  }    
  ngOnInit(){
  let a:any []=[[1,2,3],[4,5,6],[7,8,[9]],11,23];
  let b=[1,4,5,6]
  let c=b.includes(4)
  let d=a.flat(2).flatMap((x)=>x=x*2);
  console.log(d,c);
  }
  ngAfterViewInit(){
    const searchText$: Observable<string> = fromEvent<KeyboardEvent>(this.input.nativeElement, 'change').pipe(
    map(event => (event.target as HTMLInputElement).value),
    startWith(''),
    debounceTime(400),
    distinctUntilChanged()
  );

  searchText$.pipe(
   mergeMap(search => this.setInputName(search))
  ).subscribe((data) => {
    this.serviceData=data
    console.log("in map",data)
  });
  }
  async serviceCall(link:string):Promise<any>{
    let data=await firstValueFrom( this.httpClient.get<User>(link))
      console.log("here r",data);
        return data;
  }
  // async jsonObjCall():Promise<any>{
  //  let data=this.httpClient.get('assets/resJson.json').subscribe(data => {
  //       console.log("here",data);
  //   this.serviceData=data;
  //    });
  //    return data;
  // }
  async setInputName(evnt:any){
    console.log(evnt)
    if(evnt ===''){
      let res= await axios.get('assets/resJson.json');
      console.log("check 2",res)
      return res.data;   
      }
    else if(evnt % 2 != 0){
    let data= await  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
     console.log("check 1",data); 
     return data})
  .catch(error => console.error("Error:", error));
    return data
    }
    else {
     let data=await this.serviceCall('https://api.github.com/users')
    return data;
    }
  }


  
}
