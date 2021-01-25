import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slider= [
  {
    title:'Icons is awesome',
    description:'Ionic is built on top of Angular',
    image:"assets/img/img1.jpg"
  },
  {
    title:'Icons is fully native',
    description:'Ionic also uses SAAS',
    image:"assets/img/img2.jpeg"
  },
  {
    title:'Icons 3 is the last version',
    description:'Angular 4 is the last version ',
    image:"assets/img/img3.jpeg"
  },

]
  constructor() { }

  ngOnInit() {
  }

}
