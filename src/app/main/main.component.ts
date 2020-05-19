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

  constructor() { 
  }

  ngOnInit(): void {
  }

  openBehance(url?: string) {
    console.log('opening behance...');
    window.open(url ? url : this.configuration.behanceUrl);
  }

}
