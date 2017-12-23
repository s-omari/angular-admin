import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//SUPPORT MATERIAL GESTURES
import 'hammerjs';

import { of } from 'rxjs/observable/of';
import { map, filter, tap , skip , switchMap , withLatestFrom  } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/skip';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/withLatestFrom';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/auditTime';
 import {Observable} from "rxjs";


const debuggerOn = true;
Observable.prototype.debug = function(message:string) {
    return this.do(
        nextValue => {
            if (debuggerOn) {
                console.log(message, nextValue)
            }
        },
        error => {
            if (debuggerOn) {
                console.error(message, error)
            }
        },
        () => {
            if (debuggerOn) {
                console.error("Observable completed - ", message)
            }
        }
    );
};


declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>
    }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
