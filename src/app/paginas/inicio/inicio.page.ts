import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente:Observable<Componente[]>;
  constructor(private DataService:DataService, private menuController:MenuController) { }

  ngOnInit() {
    this.componente=this.DataService.getMenu()
  }
  onClick(){
    this.menuController.open('first')
  }

}
