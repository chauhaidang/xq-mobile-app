import { byPlatformA11y, byLabel } from '../helpers/LocatorStrategy.js';

class TestPlan {
  itemRequirement(index: number) {
    const content = `Requirement description ${index}`;
    return $(byPlatformA11y({ ios: byLabel(content), android: `~${content}` }));
  }
}

export default new TestPlan();
