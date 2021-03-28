import { Component } from '@angular/core';

@Component({
    selector:'[server-component]',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = 'offline';
    btnEnable = false;
    addText = '';
    addBtnText = 'before click btn';
    onupdate ='';
    onupdate2 ='';
    mesgShow = false;
    addBtnText2 = '';

    constructor(){
        setTimeout(()=>{
            this.btnEnable = true;
            this.addText ='This text add after 2000ms';
        },2000)
    }
    onBtnClick(){
        this.addBtnText = 'after button click';
    }
    onUpdateServer(event: any){
        console.log(event);
        this.onupdate = (<HTMLInputElement>event.target).value;
    }
    ShowMessage(){
        this.mesgShow = true;
        this.addBtnText2 = 'angular Dirececitve';
    }
}