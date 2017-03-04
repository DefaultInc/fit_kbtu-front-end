import { FitKbtuAngularPage } from './app.po';

describe('fit-kbtu-angular App', () => {
  let page: FitKbtuAngularPage;

  beforeEach(() => {
    page = new FitKbtuAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
