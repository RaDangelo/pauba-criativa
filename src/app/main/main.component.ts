import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/config.interface';
import config from '../../assets/config.json';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  configuration = config as Configuration;
  hashtags = config.hashtags;
  projects = config.projects;
  rightLabel = '>';
  leftLabel = '<';
  isHover = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openBehance(url?: string) {
    this.switchHover();
    console.log('opening behance...');
    window.open(url ? url : this.configuration.behanceUrl);
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
