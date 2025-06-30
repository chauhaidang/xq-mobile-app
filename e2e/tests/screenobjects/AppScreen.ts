import { byText } from '../helpers/LocatorStrategy.ts';

export default class AppScreen {
    private headerTitle: string;

    constructor (title: string) {
        this.headerTitle = title;
    }

    /**
     * Wait for the screen header title to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown = true): Promise<boolean | void> {
        return $(this.locatorStrategy(this.headerTitle)).waitForDisplayed({
            reverse: !isShown,
        });
    }

    private locatorStrategy (selector: string): string {
        return driver.isIOS ? `~${selector}` : byText(selector);
    }
}
