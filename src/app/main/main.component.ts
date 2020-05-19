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
  projectOne;
  projectTwo;
  projectThree;

  constructor() { 
    this.projectOne = this.projects[0];
    this.projectTwo = this.projects[1];
    this.projectThree = this.projects[2];
  }

  ngOnInit(): void {
  }

  openBehance(url?: string) {
    console.log('opening behance...');
    window.open(url ? url : this.configuration.behanceUrl);
  }

  moveRight() {
  }

}
