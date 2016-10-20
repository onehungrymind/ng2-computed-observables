import { Ng2ComputedObservablesPage } from './app.po';

describe('ng2-computed-observables App', function() {
  let page: Ng2ComputedObservablesPage;

  beforeEach(() => {
    page = new Ng2ComputedObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
