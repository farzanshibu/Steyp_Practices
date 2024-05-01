import React, {useState} from 'react';

import 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './src/components/screens/HomeScreen';
import WidgetsScreen from './src/components/screens/WidgetsScreen';
import NotificationsScreen from './src/components/screens/NotificationsScreen';
import ForecastReportScreen from './src/components/screens/ForecastReportScreen';
import type {StatusBarStyle} from 'react-native';
import {Colors} from './src/constants/UIConstants';
import {Icons} from './src/constants/UIConstants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabBarIcon(
  focused: boolean,
  IconLight: React.ComponentType,
  IconDark: React.ComponentType,
) {
  return focused ? <IconLight /> : <IconDark />;
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ForecastReport" component={ForecastReportScreen} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <LinearGradient
      colors={[Colors.gradientLightBlue, Colors.gradientDarkBlue]}
      style={styles.linearGradient}
      useAngle={true}
      angle={-125}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: '#000',
            background: 'transparent',
            card: '#000',
            text: '#000',
            border: '#000',
            notification: '#000',
          },
        }}>
        <Tab.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 80,
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarItemStyle: {width: 20},
          }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarAccessibilityLabel: 'Home',
              tabBarIcon: ({focused}: {focused: boolean}) =>
                TabBarIcon(focused, Icons.HomeLight, Icons.HomeDark),
            }}
          />
          <Tab.Screen
            name="Widgets"
            component={WidgetsScreen}
            options={{
              tabBarAccessibilityLabel: 'Home',
              tabBarIcon: ({focused}: {focused: boolean}) =>
                TabBarIcon(focused, Icons.WidgetsLight, Icons.WidgetsDark),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarAccessibilityLabel: 'Home',
              tabBarIcon: ({focused}: {focused: boolean}) =>
                TabBarIcon(
                  focused,
                  Icons.NotificationsLight,
                  Icons.NotificationsDark,
                ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default App;
