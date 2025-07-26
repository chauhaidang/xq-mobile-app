import { byText } from '../helpers/LocatorStrategy.js';
import BottomBar from '../screenobjects/components/BottomBar.ts';
import Header from '../screenobjects/components/Header.js';
import HomeScreen from '../screenobjects/HomeScreen.js';

describe('Home', () => {
  it('user can see all ui components and navigate back and forth', async () => {
    await HomeScreen.waitForIsShown();
    await expect(HomeScreen.cardTestPlans).toBeDisplayed();
    await expect(HomeScreen.cardTestCases).toBeDisplayed();
    await expect(HomeScreen.cardTestReports).toBeDisplayed();
    await HomeScreen.cardTestCases.click();
    await expect($(byText('Test Cases Are Coming Soon!'))).toBeDisplayed();
    await Header.btnBack.click();
    await HomeScreen.waitForIsShown();
    await HomeScreen.cardTestPlans.click();
    await BottomBar.btnWorkBench.click();
    await HomeScreen.cardTestReports.click();
    await expect($(byText('Test Reports Are Coming Soon!'))).toBeDisplayed();
    await Header.btnBack.click();
    await HomeScreen.waitForIsShown();
    await expect(HomeScreen.cardTestPlans).toBeDisplayed();
    await expect(HomeScreen.cardTestCases).toBeDisplayed();
    await expect(HomeScreen.cardTestReports).toBeDisplayed();
  });
});
