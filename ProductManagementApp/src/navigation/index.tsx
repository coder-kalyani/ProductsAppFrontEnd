import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../routes';
import {navigationRef} from './rootNavigation';

const RootStack = createStackNavigator();
const AppNavigator = () => {
  useEffect(() => {
    /** Hide the native splash screen after 2 seconds  */
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          {/* <RootStack.Screen
              name={routes.BottomTabNavigator}
              component={}
            /> */}
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
