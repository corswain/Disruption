import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as navigationEnglish } from '@layout/navigation/i18n/en';
import { locale as navigationTurkish } from '@layout/navigation/i18n/tr';
import { navigation } from '@layout/navigation/navigation';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dsrpt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  navigation: any;
  isLanding: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {FuseNavigationService} _fuseNavigationService
   * @param {FuseSplashScreenService} _fuseSplashScreenService
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   * @param {TranslateService} _translateService
   * @param {Platform} _platform
   * @param {Router} _router
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform,
    private _router: Router
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._fuseNavigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._fuseNavigationService.setCurrentNavigation('main');

    // Add languages
    this._translateService.addLangs(['en', 'tr']);

    // Set the default language
    this._translateService.setDefaultLang('en');

    // Set the navigation translations
    this._fuseTranslationLoaderService.loadTranslations(
      navigationEnglish,
      navigationTurkish
    );

    // Use a language
    this._translateService.use('en');

    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.document.body.classList.add('main-theme');

    // Configure toolbar
    this._router.events
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          if (evt.url === '/') {
            this.isLanding = true;
          } else {
            this.isLanding = false;
          }
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
