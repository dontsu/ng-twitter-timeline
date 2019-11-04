import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgTwitterTimelineService {

  readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
  readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

  constructor() {
  }

  loadScript(): Observable<any> {
    return Observable.create(observer => {
      this.startScriptLoad();

      window['twttr'].ready(
        function onLoadTwitterScript(twttr) {
          observer.next(twttr);
          observer.complete();
        }
      );
    });
  }

  private startScriptLoad() {
    window['twttr'] = (function (d, s, id, url) {
      let js;
      let fjs = d.getElementsByTagName(s)[0];
      let t = window['twttr'] || {};

      if (d.getElementById(id)) {
        return t;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = url;
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];

      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    }(document, 'script', this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL));
  }
}
