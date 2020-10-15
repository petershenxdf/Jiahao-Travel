import { Person } from './models/PersonIn';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.css']
})
export class TravelInfoComponent implements OnInit {
  person:Person;
  origination:string="None";
  destination:string="None";
  date:Date=new Date("00/00/0000");
  quant:number=0;
  price:number=0;

  recalc(): void{
    this.price=this.quant*150;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
