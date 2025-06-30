import { printDomTree } from '../helpers/DomTree.js';
import { byText } from '../helpers/LocatorStrategy.js';
import BottomBar from '../screenobjects/components/BottomBar.ts';
import Header from '../screenobjects/components/Header.js';
import HomeScreen from '../screenobjects/HomeScreen.js';

describe('Home', () => {
  specify('user can see all ui components', async () => {
    await HomeScreen.waitForIsShown();
    await expect(HomeScreen.cardTestPlans).toBeDisplayed();
    await expect(HomeScreen.cardTestCases).toBeDisplayed();
    await expect(HomeScreen.cardTestReports).toBeDisplayed();
  });

  specify('navigate to test case', async () => {
    await HomeScreen.cardTestCases.click();
    await expect($(byText('Test Cases Are Coming Soon!'))).toBeDisplayed();
  });
  specify('and go back to home', async () => {
    await Header.btnBack.click();
    await HomeScreen.waitForIsShown();
  });

  specify('navigate to test plan and go back via bottom bar', async () => {
    await HomeScreen.cardTestPlans.click();
    await BottomBar.btnWorkBench.click();
  });

  specify('navigate to test reports and go back', async () => {
    await HomeScreen.cardTestReports.click();
    await expect($(byText('Test Reports Are Coming Soon!'))).toBeDisplayed();
    await Header.btnBack.click();
    await HomeScreen.waitForIsShown();
    await expect(HomeScreen.cardTestPlans).toBeDisplayed();
    await expect(HomeScreen.cardTestCases).toBeDisplayed();
    await expect(HomeScreen.cardTestReports).toBeDisplayed();
  });
});
