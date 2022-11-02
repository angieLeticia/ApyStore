import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() products = [
    {
      name: 'Adonaid',
      price: 299900,
      image: './assets/img/1.jpg'
    },
    {
      name: 'Favorite City',
      price: 999900,
      image: './assets/img/2.jpg'
    },
    {
      name: 'Made Colombia',
      price: 829900,
      image: './assets/img/3.jpg'
    },
    {
      name: 'Made Africana',
      price: 1129900 ,
      image: './assets/img/4.jpg'
    },
    {
      name: 'Hi Fracia',
      price: 830900,
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
