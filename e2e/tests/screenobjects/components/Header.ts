import { byPlatformA11y } from '../../helpers/LocatorStrategy.js';

class Header {
  get btnBack() {
    return $(byPlatformA11y({ ios: '~Back', android: '~Navigate up' }));
  }
}

export default new Header();
