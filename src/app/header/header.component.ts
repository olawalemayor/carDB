import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ccd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
  WebLogo = {
    siteImage: 'assets/images/site-logo.png',
    logoTitle: 'chassis.ng logo',
  };

  ngOnInit() {
    const topBar = document.getElementById('top-bar') as HTMLDivElement;
    document.addEventListener('scroll', () => {
      topBar.classList.add('scroll-bg');
      if (window.scrollY === 0) topBar.classList.remove('scroll-bg');
    });
  }
}
