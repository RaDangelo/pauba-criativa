import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { Configuration } from './models/config.interface';
import { DatabaseService } from '../app/services/database.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  databaseSubscription: Configuration;

  constructor(private databaseService: DatabaseService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getDatabaseInformation();
  }

  getDatabaseInformation() {
    this.databaseService.getData().subscribe(r => {
      this.databaseSubscription = r as Configuration;
      this.changeDetector.detectChanges();
    });
  }

}
