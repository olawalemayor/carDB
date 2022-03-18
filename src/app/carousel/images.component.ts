import { Component } from "@angular/core";
import { CarService } from "../shared";
import { Icars } from "../shared/car";

@Component({
  selector:'car-images',
  templateUrl: 'images.component.html',
  styles: [`@media(max-width:768px){
    img{
      height: 200px;
      max-height:200px;
    }
  }`]
})
export class ImagesComponent{

  //return filtered car if the car has description
  display(){
    const filterCars = this.carservice.filteredCars.filter(car=>car.description)
    return filterCars[0] //first car of the car array since it is only one
  }

  //get year from specified car
  year(car:Icars){
    return this.carservice.SplitYear(car)
  }

  constructor(private carservice:CarService){}

}
