import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'online';
  num: number = Math.random()*10;
  constructor() {
    this.serverStatus = this.num > 5 ? 'online' : 'offline';
   }
   getServerStatus(){
     return this.serverStatus;
   }
   getColor(){
     return this.serverStatus==='online'? 'green' : 'red';
   }
  ngOnInit(): void {
  }

}
