import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any=[];
constructor(private user:UsersDataService){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.data = data;
  })
}


























  


  // 1 for loop
  // user = [
  //   {
  //     name:'abhishek',
  //     gender:'male',
  //   },
  //   {
  //     name:'jyoti',
  //     gender:'female',
  //   },
  //   {
  //     name:'anuradha',
  //     gender:'female',
  //   },
  //   {
  //     name:'krishna',
  //     gender:'female',
  //   },
  //   {
  //     name:'sudama',
  //     gender:'female',
  //   },
  //   {
  //     name:'kavita',
  //     gender:'female',
  //   },
  // ];
  
}
