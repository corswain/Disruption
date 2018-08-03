import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  targetRaised: number;

  constructor() {}

  ngOnInit(): void {
    this.targetRaised = 40;
  }
}
