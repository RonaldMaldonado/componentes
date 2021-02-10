import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarPageModule } from '../avatar/avatar.module';
import { CardsPageModule } from '../cards/cards.module';
import { ListReorderPageModule } from '../list-reorder/list-reorder.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/Opciones',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'Cuenta',
        loadChildren:()=> import ('../avatar/avatar.module').then (m =>AvatarPageModule)
      },
      {
        path:'Contactos',
        loadChildren:()=> import ('../cards/cards.module').then (m =>CardsPageModule)
      },
      {
        path:'Opciones',
        loadChildren:()=> import ('../list-reorder/list-reorder.module').then (m =>ListReorderPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
