import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-track-focus',
  templateUrl: './track-focus.component.html',
  styleUrls: ['./track-focus.component.css']
})
export class TrackFocusComponent implements OnInit {
  @ViewChild("track", { static: true }) track!: ElementRef;

    ngOnInit(): void {
    fromEvent(this.track.nativeElement, 'focus')
    .subscribe(res => console.log("Focus event"));
  }
}
