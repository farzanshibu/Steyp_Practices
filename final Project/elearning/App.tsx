import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconIonics from 'react-native-vector-icons/Ionicons';
import './global.css';
import HomeScreen from './src/components/screens/HomeScreen';
import LecturesScreen from './src/components/screens/LecturesScreen';
import LessonScreen from './src/components/screens/LessonScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import NameScreen from './src/components/screens/NameScreen';
import OPTScreen from './src/components/screens/OPTScreen';
import PasswordScreen from './src/components/screens/PasswordScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import {Icons} from './src/constants/UIConstants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabBarIcon(
  focused: boolean,
  SelectedIcon: React.ComponentType,
  UnSelectedIcon: React.ComponentType,
) {
  return focused ? <SelectedIcon /> : <UnSelectedIcon />;
}

const BackButton = () => {
  // Access the navigation object with useNavigation
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.goBack()} // Go back to the previous screen
    >
      <IconIonics name="arrow-back" size={24} color="#747474" />
    </TouchableOpacity>
  );
};

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: 'white', // TODO: change color
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.88,
          shadowRadius: 160.0,
        },
        tabBarItemStyle: {width: 20},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarIcon: ({focused}: {focused: boolean}) =>
            TabBarIcon(focused, Icons.HomeSelected, Icons.Home),
        }}
      />
      <Tab.Screen
        name="Lectures"
        component={LecturesScreen}
        options={{
          tabBarAccessibilityLabel: 'Home',
          headerTitle: "Today's Lectures",
          headerShown: true,
          headerTitleStyle: {
            fontSize: 18,
            color: '#747474',
            paddingLeft: 20,
            paddingTop: 20,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#f5f7fb',
            elevation: 0,
            shadowColor: 'transparent',
          },
          tabBarIcon: ({focused}: {focused: boolean}) =>
            TabBarIcon(focused, Icons.ClassSelected, Icons.Class),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarIcon: ({focused}: {focused: boolean}) =>
            TabBarIcon(focused, Icons.ProfileSelected, Icons.Profile),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
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
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="OPTScreen" component={OPTScreen} />
          <Stack.Screen name="NameScreen" component={NameScreen} />
          <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen
            name="LessonScreen"
            component={LessonScreen}
            options={{
              headerShown: true,
              headerTitle: 'Lessons',
              headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
              headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
                backgroundColor: '#f5f7fb',
              },
              headerTintColor: '#747474',
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              headerLeft: () => <BackButton />,
              headerLeftContainerStyle: {paddingLeft: 20},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
