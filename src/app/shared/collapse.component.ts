import { Component } from "@angular/core";

@Component({
    selector: 'collapse-item',
    template: `
    <div (click)="toggleContent()" class="pointable">
        <div>
          <ul class="mb-0 py-2 border">
            <li class="list-unstyled">
              <ng-content select="[item-title]"></ng-content>
            </li>
          </ul>
        </div>
        <ng-content *ngIf="visible" select="[item-body]"></ng-content>
    </div>
    `,
    styles: ['.pointable{cursor:pointer;}']
})

export class CollapseComponent{


    visible = false

    toggleContent(){
        this.visible = !this.visible
    }
}
