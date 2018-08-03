import * as _ from 'lodash';

import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '@core/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed: boolean;
  currentSectionIndex: number;
  sections: any[];
  languages: any;
  selectedLanguage: any;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {WINDOW} window
   * @param {TranslateService} _translateService
   */
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private _translateService: TranslateService
  ) {
    // Set the defaults
    this.currentSectionIndex = 0;
    this.sections = [
      { name: 'About', id: 'landing-about' },
      { name: 'Whitepaper', id: 'landing-whitepaper' },
      { name: 'Token', id: 'landing-token' },
      { name: 'Roadmap', id: 'landing-roadmap' },
      { name: 'FAQ', id: 'landing-faq' },
      { name: 'Contact', id: 'landing-contact' }
    ];

    this.languages = [
      {
        id: 'en',
        title: 'English',
        flag: 'us'
      },
      {
        id: 'tr',
        title: 'Turkish',
        flag: 'tr'
      }
    ];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * OnWindowScroll
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.selectedLanguage = _.find(this.languages, {
      id: this._translateService.currentLang
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set the language
   *
   * @param lang
   */
  setLanguage(lang): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;

    // Use the selected language for translations
    this._translateService.use(lang.id);
  }

  /**
   * Toggle Menu
   */
  toggleMenu(): void {}
}
