import { Component, OnInit } from '@angular/core';
import { Burger } from './Burger';
@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})

export class BurgerListComponent implements OnInit {
 
  burgers: Burger[] = [
    {
      type: 'Carne',
      name: 'Con Cheddar',
      price: 800,
      stock: 15,
      img: 'assets/images/cheddar_burger.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      type: 'Carne',
      name: 'Chori Burga',
      price: 750,
      stock: 15,
      img: 'assets/images/cheddar_burger.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      type: 'Veggie',
      name: 'Lentejas',
      price: 600,
      stock: 10,
      img: 'assets/images/cheddar_burger.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      type: 'Veggie',
      name: 'Lentejas',
      price: 600,
      stock: 0,
      img: 'assets/images/cheddar_burger.jpg',
      clearance: false,
      quantity: 0,
    },
  ];
  
  

  constructor() { }

  ngOnInit(): void {
  }
 
  downQuantity(burger: Burger): void {
    if(burger.quantity > 0)
      burger.quantity--;
  }

  upQuantity(burger: Burger): void {
    if(burger.quantity < burger.stock) {
      burger.quantity++;
    }
  }

  changeQuantity(event: Event, burger: Burger): void {
    console.log(event.target);
  }

}
