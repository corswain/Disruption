import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[scrollTo]' })
export class ScrollToDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('scrollTo') elementId: string;
  private el: ElementRef;

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * SmoothScroll
   */
  @HostListener('click', ['$event'])
  smoothScroll(): boolean {
    if (!this.elementId) {
      return;
    }

    const startY = this._currentYPosition();
    const stopY = this.targetYPosition(this.elementId);
    const distance = stopY > startY ? stopY - startY : startY - stopY;

    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }

    let speed = Math.round(distance / 50);

    if (speed >= 20) {
      speed = 20;
    }

    const step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;

    if (stopY > startY) {
      for (let i = startY; i < stopY; i += step) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);

        leapY += step;

        if (leapY > stopY) {
          leapY = stopY;
        }

        timer++;
      }
      return;
    }
    for (let i = startY; i > stopY; i -= step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);

      leapY -= step;

      if (leapY < stopY) {
        leapY = stopY;
      }

      timer++;
    }

    return false;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get current Y-scroll position
   */
  private _currentYPosition(): number {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) {
      return self.pageYOffset;
    }

    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }

    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) {
      return document.body.scrollTop;
    }

    return 0;
  }

  /**
   * Get target Y-scroll position
   *
   * @param {FunctionStringCallback} elementId
   */
  private targetYPosition(elementId: string): number {
    const element = document.getElementById(elementId);
    let y = element.offsetTop;
    let node: any = element;

    while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }

    // temp fix for header offset
    y = y - 16;

    return y;
  }
}
