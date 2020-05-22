import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

    reference: firebase.database.Reference;

    constructor(private realtime: AngularFireDatabase) {
        this.reference = this.realtime.database.ref('configuration');
    }

    getData() {
        let result = new Observable((observer) => {
            this.reference.on('value', function (data) {
                observer.next(data.val());
            });
        });

        return result;
    }

}