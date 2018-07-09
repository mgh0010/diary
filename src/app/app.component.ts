import { Component } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  slider;

  ngOnInit() {
  	document.addEventListener('DOMContentLoaded', function() {
  	    let elems = document.querySelectorAll('.slider');
  	    let instances = M.Slider.init(elems);
  	    let elem = document.querySelector('.slider');
		    this.slider = M.Slider.getInstance(elem);
		    this.slider.pause();

  	  });
  }

  ngAfterContentInit() {
  }
}
