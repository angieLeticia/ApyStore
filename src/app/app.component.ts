import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apy-Store';

  products = [
    {
      name: 'Adonaid',
      price: '$299.900',
      image: './assets/img/1.jpg'
    },
    {
      name: 'Favorite City',
      price: "999.900",
      image: './assets/img/2.jpg'
    },
    {
      name: 'Made Colombia',
      price: "829.900",
      image: './assets/img/3.jpg'
    },
    {
      name: 'Made Africana',
      price: "1'119.900",
      image: './assets/img/4.jpg'
    },
    {
      name: 'Hi Fracia',
      price: "830.900",
      image: './assets/img/5.jpg'
    },
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/6.jpg'
    },
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/7.jpg'
    },
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/8.jpg'
    },
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/9.jpg'
    }
    ,
    {
      name: 'Moda italiana',
      price: 3002,
      image: './assets/img/10.jpeg'
    }
  ]
}


