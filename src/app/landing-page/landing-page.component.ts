import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'resume-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  previousPageOffset;
  constructor() {}

  ngOnInit() {
    this.previousPageOffset = window.pageYOffset;
  }

  @HostListener('window:scroll', ['$event'])
  scrollByPage(event) {
    // console.log('scrolled', window.pageYOffset);
    // if (this.previousPageOffset < window.pageYOffset) {
    //   window.scrollTo(0, document.getElementById('parent').clientHeight);
    // }
    // this.previousPageOffset = window.pageYOffset;
  }
}
