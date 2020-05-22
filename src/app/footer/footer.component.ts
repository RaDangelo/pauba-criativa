import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footer = '';
  fiverrUrl = '';

  @Input() set data(value: any) {
    if (value) {
      this.footer = `${value.name} ${value.surname} © ${value.creationYear}`;
      this.fiverrUrl = value.fiverrUrl;
    }
  };

  constructor() {
  }

  openFiverr() {
    window.open(this.fiverrUrl);
  }

}
