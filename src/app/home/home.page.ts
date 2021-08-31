import { Component, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('gslides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  segment: number = 1;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  lines: Array<string> = [];
  constructor() {
    for (var i = 0; i < 50; i++) {
      this.lines.push(i.toString());
    }
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter', this.slides); // this.slides is only available here. ngOnInit it isnt defined
  }


  async onChangeSlide() {
    const index = await this.slides.getActiveIndex();
    this.segment = index + 1;
  }

  segmentChanged(ev: any) {
    const id = parseInt(ev.detail.value) - 1;
    this.slides.slideTo(id);
  }
}
