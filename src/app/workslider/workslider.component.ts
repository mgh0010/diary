import { Component, OnInit } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-workslider',
  templateUrl: './workslider.component.html',
  styleUrls: ['./workslider.component.css']
})
export class WorksliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  noSelected() {
  	this.nextAndPauseSlider();
  }

  yesSelected() {
  	this.nextAndPauseSlider();
  }

  private nextAndPauseSlider() {
    let elem = document.querySelector('.slider');
    let slider = M.Slider.getInstance(elem);
    slider.next();
    slider.pause();
  }

}
