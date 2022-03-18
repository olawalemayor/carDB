import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CarService } from "../shared";
import { Icars } from "../shared/car";

@Component({
    selector: 'wrap',
    templateUrl: 'wrapper.component.html',
    styles: [``],
})

export class WrapComponent implements OnInit {

    cars:Icars[]

    //used to manipulate the page when car has not been filtered
    filteredCars():boolean{
        if(this.carService.filteredCars){
            return true
        }else{
            return false
        }
    }


    adImage = 'assets/images/Toyota-Auris-2007-1280-0d.jpg'

    constructor(private route:ActivatedRoute, private carService:CarService){

    }

    ngOnInit(){
        this.cars = this.route.snapshot.data['cars']
    }
}
