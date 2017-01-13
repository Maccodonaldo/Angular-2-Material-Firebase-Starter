import { Angular2MaterialFirebaseStarterPage } from './app.po';

describe('angular-2-material-firebase-starter App', function() {
  let page: Angular2MaterialFirebaseStarterPage;

  beforeEach(() => {
    page = new Angular2MaterialFirebaseStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
