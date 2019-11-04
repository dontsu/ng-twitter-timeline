import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {NgTwitterTimelineService} from './ng-twitter-timeline.service';

@Component({
  selector: 'ng-twitter-timeline',
  template: `<div></div>`,
  styles: []
})
export class NgTwitterTimelineComponent implements AfterViewInit {
@Input() dataSrc: object;
@Input() opts: object;
  constructor(private ngTwitterTimelineService: NgTwitterTimelineService, private element: ElementRef) {
  }

  ngAfterViewInit() {
    this.ngTwitterTimelineService.loadScript().subscribe(twttr => {
      let nativeElement = this.element.nativeElement;

      window['twttr'].widgets.createTimeline(this.dataSrc, nativeElement, this.opts).then(function success(embed) {
        console.log('Created tweet widget: ', embed);
      }).catch(function creationError(message) {
          console.log('Could not create widget: ', message);
        }
      );
    }, err => {
      console.log('****  ERROR LOADING TWITTER WIDGET', err);
    }, () => {});
  }
}
