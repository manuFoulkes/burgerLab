import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burger = {
    'type': 'Carne',
    'name': 'Con Cheddar',
    'price': 800,
    'stock': 100,
    'img': 'assets/images/cheddar_burger.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
