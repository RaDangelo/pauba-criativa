import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/config.interface';
import config from '../../assets/config.json';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configuration = config as Configuration;
  footer = `${this.configuration.name} ${this.configuration.surname} © ${this.configuration.creationYear}`;

  constructor() { }

  ngOnInit(): void {
  }

  openFiverr() {
    window.open(this.configuration.fiverrUrl);
  }

}
