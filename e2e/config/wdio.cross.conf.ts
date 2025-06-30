import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

const isGhActions = process.env.GITHUB_ACTION;

export const config: WebdriverIO.Config = {
  ...baseConfig,
  maxInstances: 2,
  specs: [
    '../tests/specs/**/home.spec.ts',
    '../tests/specs/**/testplan.spec.ts',
  ],
  capabilities: [
    {
      platformName: 'iOS',
      'wdio:maxInstances': 1,
      'appium:deviceName': 'iPhone SE (3rd generation)',
      'appium:platformVersion': '18.3',
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'XCUITest',
      'appium:app': join(
        process.cwd(),
        '../ios/build/Products/Release-iphonesimulator/omitrixmobile.app',
      ),
      'appium:newCommandTimeout': 240,
      'appium:webviewConnectTimeout': 5000,
    },
    {
      platformName: 'Android',
      'wdio:maxInstances': 1,
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '14.0',
      'appium:orientation': 'PORTRAIT',
      'appium:automationName': 'UiAutomator2',
      'appium:app': join(
        process.cwd(),
        '../android/app/build/outputs/apk/release/app-release.apk',
      ),
      'appium:appWaitActivity': 'com.xq.omitrix.MainActivity',
      'appium:newCommandTimeout': 240,
    },
  ],
};
