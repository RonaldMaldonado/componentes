import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable, Subscriber } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  usuarios : Observable<any>
  @ViewChild ('someInput',{read: ElementRef, static:false}) ionlist:IonList;

  constructor( private dataservice: DataService) { }

  ngOnInit() {
    this.usuarios=this.dataservice.getUsuarios()
  }

  favorito(usuario){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
    

  }

  compartir(usuario){
    console.log(usuario)
    this.ionlist.closeSlidingItems();
  }

  eliminar(usuario){
    console.log(usuario)
    this.ionlist.closeSlidingItems();
  }

}
