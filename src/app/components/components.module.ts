import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselNewComponent } from './carousel-new/carousel-new.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CarouselNewComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CarouselNewComponent,
    SocialMediaComponent
  ],
  bootstrap: []
})
export class ComponentsModule { }
