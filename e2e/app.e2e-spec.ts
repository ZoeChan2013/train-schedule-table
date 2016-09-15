import { TranScheduleTablePage } from './app.po';

describe('tran-schedule-table App', function() {
  let page: TranScheduleTablePage;

  beforeEach(() => {
    page = new TranScheduleTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
