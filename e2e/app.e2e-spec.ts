import { Angular2reactivePage } from './app.po';

describe('angular2reactive App', () => {
  let page: Angular2reactivePage;

  beforeEach(() => {
    page = new Angular2reactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
