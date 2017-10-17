import { LearnAngPage } from './app.po';

describe('learn-ang App', () => {
  let page: LearnAngPage;

  beforeEach(() => {
    page = new LearnAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
