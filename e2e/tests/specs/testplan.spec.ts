import { printDomTree } from '../helpers/DomTree.js';
import Header from '../screenobjects/components/Header.js';
import SwipeScreen from '../screenobjects/SwipeScreen.js';
import HomeScreen from '../screenobjects/HomeScreen.js';
import TestPlan from '../screenobjects/TestPlan.js';

describe('Test plan', () => {
  specify('user can see all requirements', async () => {
    await HomeScreen.cardTestPlans.click();
    await printDomTree('item')
    await expect(TestPlan.itemRequirement(1)).toBeDisplayed();
    const item10 = TestPlan.itemRequirement(10);
    await item10.scrollIntoView({
      direction: 'up',
      percent: 0.6,
      duration: 1000,
    });
    await expect(item10).toBeDisplayed();
  });
});
