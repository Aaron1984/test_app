import { AppPage, HomePage, ListPage } from './app.po';

describe('new App', () => {
  let page: AppPage;
  let homePage: HomePage;
  let listPage: ListPage; 

  beforeEach(() => {
    page = new AppPage();
    homePage = new HomePage();
    listPage = new ListPage();
  });

  it('Init App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Home');
  });

  it('Page Home', () => {
    homePage.navigateTo();
    expect(homePage.getParagraphText()).toContain('Home');
  });

  it('Virtual List Home', () => {
    listPage.navigateTo();
    expect(listPage.getCountList()).toBeGreaterThan(0);
  });
});
