import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [],
    //
    // ======
    // Appium
    // ======
    //
    services: [
        ...baseConfig.services || [],
    ],
    hostname: 'localhost',
    port: 4723,
    protocol: 'http',
    before: async ()=> {
        // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
        // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
        if (driver.isAndroid){
            await driver.updateSettings({
                // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
                waitForSelectorTimeout: 3 * 1000
            });
        }
    }
};
