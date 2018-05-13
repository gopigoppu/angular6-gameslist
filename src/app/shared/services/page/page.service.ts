import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  setBodyBGHeight(changedContainer, compareContainer) {

    let repoHeight = 0;

    if (document.getElementsByClassName(changedContainer)[0]) {
      repoHeight = document.getElementsByClassName(changedContainer)[0].clientHeight;
    }


    // tslint:disable-next-line:prefer-const
    let currentBgHeight = document.getElementsByClassName(compareContainer)[0].clientHeight + repoHeight;
    currentBgHeight += document.getElementsByClassName(compareContainer)[1].clientHeight;
    // tslint:disable-next-line:prefer-const
    let actualBgHeight = window.screen.height;
    if (actualBgHeight < currentBgHeight) {
      document.body.style.height = '100%';
    } else {
      document.body.style.height = '100vh';
    }
  }

}
