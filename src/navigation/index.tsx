import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../routes';
import {navigationRef} from './rootNavigation';
import ListScreen from '../routes/ListScreen';
import DetailsScreen from '../routes/DetailsScreen';
import AddProductScreen from '../routes/AddProductScreen';

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
        <RootStack.Screen name={routes.ListScreen} component={ListScreen} />
        <RootStack.Screen name={routes.DetailsScreen} component={DetailsScreen} />
        <RootStack.Screen name={routes.AddProductScreen} component={AddProductScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
