import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  customoptions:any;

  constructor() { 
    this.customoptions={
      buttons:[
        {
        text:'guardar',
        handler:(event)=> {console.log('event')}                      
        },
        {
          text:'cancelar',
          handler:(event)=> {console.log('event')}                      
          }        
      ]
    }
  }
  ngOnInit() {
  }

  cambiofecha(event){
    console.log(new Date(event.detail.value))

  }
}
