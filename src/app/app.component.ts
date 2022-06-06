import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { inc } from './store/action/increment.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxp';
  val:any
  bydefaultvalue:any
  constructor(private store:Store<{shamsiya:{counter:number, naame:string}}>){

    store.select('shamsiya').subscribe(data=>{
      this.bydefaultvalue=data.counter
    })
  }
  
  increment(){
    this.store.dispatch(inc({badjaavalue:this.val}))
  }
  decrement(){

  }
  reset(){

  }




  addvalue(a:any){
    this.val=a.getdata
    this.increment()
  }
}
