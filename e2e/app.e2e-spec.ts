import { AngularCliPrototypePage } from './app.po';

describe('angular-cli-prototype App', function() {
  let page: AngularCliPrototypePage;

  beforeEach(() => {
    page = new AngularCliPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
