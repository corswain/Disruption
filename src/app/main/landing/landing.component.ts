import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'dsrpt-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit, OnDestroy {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   */
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.document.documentElement.classList.add('landing');
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.document.documentElement.classList.remove('landing');
  }
}
