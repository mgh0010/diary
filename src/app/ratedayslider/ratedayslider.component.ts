import { Component, OnInit } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-ratedayslider',
  templateUrl: './ratedayslider.component.html',
  styleUrls: ['./ratedayslider.component.css']
})
export class RatedaysliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  veryBadSelected() {
  	this.nextAndPauseSlider();
  }
  badSelected() {
  	this.nextAndPauseSlider();
  }
  okaySelected() {
  	this.nextAndPauseSlider();
  }
  goodSelected() {
  	this.nextAndPauseSlider();
  }
  veryGoodSelected() {
  	this.nextAndPauseSlider();
  }

  private nextAndPauseSlider() {
    let elem = document.querySelector('.slider');
    let slider = M.Slider.getInstance(elem);
    slider.next();
    slider.pause();
  }

}
