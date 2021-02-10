import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { PoverinfoComponent } from './poverinfo/poverinfo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopinfoComponent,
    PoverinfoComponent
  
  ],
  exports:[
    HeaderComponent,
    PopinfoComponent,
    PoverinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
