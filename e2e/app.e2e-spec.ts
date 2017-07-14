import { FlatlandNgPage } from './app.po';

describe('flatland-ng App', () => {
  let page: FlatlandNgPage;

  beforeEach(() => {
    page = new FlatlandNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
