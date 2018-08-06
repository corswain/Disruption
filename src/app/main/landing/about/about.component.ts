import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'landing-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  videoUrl: any;

  constructor(private _sanitizer: DomSanitizer) {
    const aboutVideo = 'https://www.youtube.com/embed?v=1KT2asqA1J8';

    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(aboutVideo);
  }

  ngOnInit(): void {}
}
