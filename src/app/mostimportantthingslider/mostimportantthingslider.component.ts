import { Component, OnInit } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-mostimportantthingslider',
  templateUrl: './mostimportantthingslider.component.html',
  styleUrls: ['./mostimportantthingslider.component.css']
})
export class MostimportantthingsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  nextSlider() {
  	this.nextAndPauseSlider();
  }

	private nextAndPauseSlider() {
    let elem = document.querySelector('.slider');
    let slider = M.Slider.getInstance(elem);
    slider.next();
    slider.pause();
  }

}
