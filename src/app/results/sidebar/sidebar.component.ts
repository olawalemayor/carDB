import { Component } from "@angular/core";
import { CarService } from "src/app/shared";
import { engine, Icars } from "src/app/shared/car";

@Component({
  selector:'car-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: [`em>small{color:red}
   .engine-cell{ /** Spacing done to prevent overlapping cells */
     text-align:center;
     height:10.8rem;
      display:block;
      width: 100%;
      border: 1px solid #fff;
    }
    .engineSpec{
      max-height: 18rem;
    }
  `]
})

export class SidebarComponent{

  getCar(){
    return this.carService.filteredCars[0]
  }

  engine(car:Icars){
    return Object.values(car.engines)
  }

  engineName(engine:engine){
    return Object.keys(engine)[0]
  }

  engineProp(engine:engine){
    const data = Object.values(engine)[0] //for specified engine get inner object
    const col1 = []
    const col2 = []

    for(const [key,value] of Object.entries(data)){
      col1.push(key) //push engine property names
      col2.push(value) //push engine property values
    }
   return {col1,col2}
  }



  constructor(private carService: CarService){}
}
