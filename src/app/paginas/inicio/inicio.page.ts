import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string;
  nombre:string;
  direccion:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente:Componente[]=[
    {
    icono:'person',
    nombre:'Action Sheet',
    direccion:'/action-sheet'
    },
    {
      icono:'pricetag',
      nombre:'Alert',
      direccion:'/alert'
    },
    {
      icono:'planet',
      nombre:'Fab',
      direccion:'/fab'
    },
    {
      icono:'rocket',
      nombre:'Date Time',
      direccion:'/datetime'
    },
    {
      icono:'albums',
      nombre:'Botones',
      direccion:'/buttons'
    },
    {
      icono:'accessibility',
      nombre:'Avatar',
      direccion:'/avatar'
    },
    {
      icono:'attach',
      nombre:'Cards',
      direccion:'/cards'
    },
    {
      icono:'documents',
      nombre:'Slides',
      direccion:'/slides'
    },
    {
      icono:'bag-remove',
      nombre:'Check',
      direccion:'/check'
    },
    {
      icono:'calculator',
      nombre:'grid',
      direccion:'/grid'
    },
    {
      icono:'chatbox',
      nombre:'toast',
      direccion:'/toast'
    },
    {
      icono:'archive',
      nombre:'popover',
      direccion:'/popover'
    },    
  ]  
 
  constructor() { }

  ngOnInit() {
  }

}
