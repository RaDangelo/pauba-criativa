import { Component } from '@angular/core';
import { Configuration } from './models/config.interface';
import config from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  configuration = config as Configuration;
  footer = `${this.configuration.name} ${this.configuration.surname} © ${this.configuration.creationYear}`;
  links = [this.configuration.link1, this.configuration.link2];
  isContact = false;

  showContact() {
    this.isContact = true;
  }

  hideContact() {
    this.isContact = false;
  }

  sendMail() {
    console.log('sending email...');
    window.location.href = `mailto:${this.configuration.email}`;
  }

  buy() {
    console.log('opening form...');
    window.open(this.configuration.formUrl);
  }

  openInstagram() {
    console.log('redirecting instagram...');
    window.open(this.configuration.instagram);
  }

  openBehance() {
    console.log('opening behance...');
    window.open(this.configuration.behanceUrl);
  }

}
