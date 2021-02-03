import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  usuarios:string[]=['Homero','Marge','Bart','Lisa','Maggie'];
  reorderDisabled:Boolean=true;
  constructor() { }

  ngOnInit() {
  }
  
  doReorder(event){
    console.log(event);
    const itemMover=this.usuarios.splice(event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to,0,itemMover);

    event.detail.complete();
    console.log(this.usuarios)
  }

}
