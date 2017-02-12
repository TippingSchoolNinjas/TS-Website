import { TSWebsitePage } from './app.po';

describe('ts-website App', function() {
  let page: TSWebsitePage;

  beforeEach(() => {
    page = new TSWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
