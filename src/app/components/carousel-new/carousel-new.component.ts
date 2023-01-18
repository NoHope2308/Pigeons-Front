import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-new',
  templateUrl: './carousel-new.component.html',
  styleUrls: ['./carousel-new.component.css'],
})

export class CarouselNewComponent implements OnInit, OnDestroy {
  
  slides: HTMLCollectionOf<HTMLElement> | undefined;
  slideIndex:number = 0;
  
  constructor() {}

  ngOnInit(): void {
    this.showSlides();   
  }
 
  showSlides() {
    this.slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let i;

    if (this.slides) {
      for (i = 0; i < this.slides.length; i++) {
        if( this.slides[i] ) {
          this.slides[i].style.display = "none";
        }  
      }
      this.slideIndex++;
      if (this.slideIndex > this.slides.length) {this.slideIndex = 1} 
      if( this.slides[this.slideIndex-1] ) {
        this.slides[this.slideIndex-1].style.display = "block";
      }       
      setTimeout(() => {
        this.showSlides();
      }, 5000);
    }  
  }

  ngOnDestroy(): void {
    this.slides = undefined;
    
  }
}
