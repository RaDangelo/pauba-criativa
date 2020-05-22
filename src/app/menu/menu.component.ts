import { Component, OnInit, Input } from '@angular/core';
import { Configuration } from '../models/config.interface';
import config from '../../assets/config.json';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links = ['', ''];
  _data: any;

  @Input() set data(value: any) {
    if (value) {
      this._data = value;
      this.links = [value.link1, value.link2];
    }
  };

  get data() {
    return this._data;
  }

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
    window.location.href = `mailto:${this.data.email}`;
  }

  buy() {
    console.log('opening form...');
    window.open(this.data.formUrl);
  }

  openInstagram() {
    console.log('redirecting instagram...');
    window.open(this.data.instagram);
  }

  openBehance() {
    console.log('opening behance...');
    window.open(this.data.behanceUrl);
  }

}
