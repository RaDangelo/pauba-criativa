import { Component, OnInit, Input } from '@angular/core';
import { Configuration } from '../models/config.interface';
import config from '../../assets/config.json';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  projects = this.setDefaultProjects();
  _data = {};
  isHover = false;

  @Input() set data(value: any) {
    if (value) {
      this._data = value;
      this.projects = value.projects;
    }
  };

  get data() {
    return this._data;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  private setDefaultProjects() {
    return [{ image: '', url: '' }, { image: '', url: '' }, { image: '', url: '' }]
  }

  openBehance(url?: string) {
    this.switchHover();
    console.log('opening behance...');
    window.open(url ? url : this.data.behanceUrl);
  }

  rotateRight() {
    this.projects.unshift(this.projects.pop());
    // document.getElementById('firstImage').classList.add('move-right');
    // document.getElementById('secondImage').classList.add('move-right');
    // document.getElementById('thirdImage').classList.add('move-right');

    // setTimeout(() => {
    //   this.projects.unshift(this.projects.pop());
    //   document.getElementById('firstImage').classList.remove('move-right');
    //   document.getElementById('secondImage').classList.remove('move-right');
    //   document.getElementById('thirdImage').classList.remove('move-right');
    // }, 300)
  }

  rotateLeft(qty?: number) {
    this.projects.push(this.projects.shift());

    if (qty > 1) {
      this.projects.push(this.projects.shift());
    }
    // document.getElementById('secondImage').classList.add('move-left');
    // document.getElementById('thirdImage').classList.add('move-left');

    // setTimeout(() => {
    //   this.projects.push(this.projects.shift());
    //   document.getElementById('secondImage').classList.remove('move-left');
    //   document.getElementById('thirdImage').classList.remove('move-left');
    // }, 300)
  }

  switchHover() {
    this.isHover = !this.isHover;
  }

}
