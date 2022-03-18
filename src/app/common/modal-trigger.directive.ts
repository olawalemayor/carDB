import { Directive, Inject, OnInit } from "@angular/core";
import { JQ_TOKEN } from ".";

@Directive({
    selector:'[modal-trigger]'
})

export class ModalTrigger implements OnInit{


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(@Inject(JQ_TOKEN) private $:any){}

    ngOnInit(){
        this.$('')
    }
}
