import { printDomTree } from '../helpers/DomTree.js';
import HomeScreen from '../screenobjects/HomeScreen.js';
import TestPlan from '../screenobjects/TestPlan.js';

const appId = 'com.xq.omitrix';
beforeEach(async () => {
    // 4 means running in foreground, 3 in background, 2 not running
  const appState = await browser.queryAppState(appId);
  if (appState !== 2) {
      await browser.terminateApp(appId);
  }
  await browser.execute('mobile:launchApp', {
    bundleId: appId,
  });
});

describe('Test plans', () => {
  it('user can see all requirements', async () => {
    await HomeScreen.cardTestPlans.click();
    await printDomTree('item');
    await expect(TestPlan.itemRequirement(1)).toBeDisplayed();
    const item10 = TestPlan.itemRequirement(10);
    await item10.scrollIntoView({
      direction: 'up',
      percent: 0.6,
      duration: 1000,
    });
    await expect(item10).toBeDisplayed();
  });

  it('user can view a requirement', async () => {});
  it('user can edit a requirement', async () => {});
  it('user can delete a requirement', async () => {});
});
