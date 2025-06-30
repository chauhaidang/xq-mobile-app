import AppScreen from './AppScreen.js';

class HomeScreen extends AppScreen {
  constructor() {
    super('Home');
  }

  get cardTestPlans() {
    return $('~Test Plans');
  }

  get cardTestCases() {
    return $('~Test Cases');
  }

  get cardTestReports() {
    return $('~Test Reports');
  }
}

export default new HomeScreen();
