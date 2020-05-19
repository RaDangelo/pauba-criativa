import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/config.interface';
import config from '../../assets/config.json';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  configuration = config as Configuration;
  links = [this.configuration.link1, this.configuration.link2];
  isContact = false;

  constructor() { }

  ngOnInit(): void {
  }

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
