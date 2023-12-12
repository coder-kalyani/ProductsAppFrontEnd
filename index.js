/**
 * @format
 */
import {AppRegistry, LogBox} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => ReduxApp);
