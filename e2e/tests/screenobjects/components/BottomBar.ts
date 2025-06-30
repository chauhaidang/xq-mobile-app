import { byPlatformA11y } from '../../helpers/LocatorStrategy.js';

class BottomBar {
  get btnWorkBench() {
    return $(
      byPlatformA11y({
        ios: '//*[@label="Bottom Navigation Workbench"]',
        android: '~Bottom Navigation Workbench',
      }),
    );
  }
}

export default new BottomBar();
