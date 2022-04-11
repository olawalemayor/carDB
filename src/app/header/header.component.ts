import { Component } from '@angular/core';

@Component({
  selector: 'ccd-header',
  templateUrl: 'header.component.html',
  styles: [
    `
      .brand-image {
        width: 150px;
      }
    `,
  ],
})
export class HeaderComponent {
  WebLogo = {
    siteImage: 'assets/images/site-logo.png',
    logoTitle: 'chassis.ng logo',
  };
}
