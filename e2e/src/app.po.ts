import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-title')).getText();
  }
}

export class HomePage{
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-title')).getText();
  }
}

export class ListPage{
  navigateTo() {
    return browser.get('/virtual-list');
  }

  getCountList() {
    return element(by.css('ion-virtual-scroll')).all(by.css('ion-item')).count();
  }
}
