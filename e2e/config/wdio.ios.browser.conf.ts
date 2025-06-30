import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ["../tests/specs/**/browser*.spec.ts"],
    capabilities: [
        {
            browserName: "safari",
            platformName: "iOS",
            "wdio:maxInstances": 1,
            "appium:deviceName": "iPhone 15",
            "appium:platformVersion": "17.2",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:newCommandTimeout": 240,
        },
    ],
};
