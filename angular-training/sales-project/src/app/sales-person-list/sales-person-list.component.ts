import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList:SalesPerson[] = [
    new SalesPerson("Pranav", "Sharma", "pranav@gmail.com", 83000),
    new SalesPerson("Kaushal", "Sharma", "kmpsharma@gmail.com", 83171),
    new SalesPerson("Jaya", "Sharma", "jaya@gmail.com", 120505),
    new SalesPerson("Meenakshi", "Sharma", "pranavjaya@gmail.com", 112171)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
