import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TodayClass from '../includes/TodayClass';
import {ScrollView} from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View className="flex-row">
      {state.routes.map(
        (
          route: {key: string | number; name: any; params: any},
          index: React.Key | null | undefined,
        ) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              activeOpacity={0.8}
              key={index}
              className="flex-1 h-28 items-center justify-center bg-blue1"
              onPress={onPress}>
              <Text
                className={`text-[21px] font-bold ${
                  isFocused ? 'text-violet2' : 'text-grey4'
                }`}>
                {label}
              </Text>
              {isFocused && (
                <View className="border-b-[3px] border-violet1 h-[5px] w-[80%] rounded-lg" />
              )}
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

const LecturesScreen = () => {
  return (
    <Tab.Navigator tabBar={MyTabBar}>
      <Tab.Screen name="Lecture" component={LectureRoute} />
      <Tab.Screen name="Ongoing" component={OngoingRoute} />
      <Tab.Screen name="Completed" component={CompletedRoute} />
    </Tab.Navigator>
  );
};

const LectureRoute = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView
      className="flex-1 bg-blue1 justify-start items-center"
      showsVerticalScrollIndicator={false}>
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/maths.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/ui-ux.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/bussiness.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/derivation.png')}
        precentage={100}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/biology.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/bussiness.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/maths.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/ui-ux.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/bussiness.png')}
        precentage={30}
        title="Maths"
      />
      <TodayClass
        navigation={navigation}
        image={require('../../assets/images/images/derivation.png')}
        precentage={100}
        title="Maths"
      />
    </ScrollView>
  );
};

const OngoingRoute = () => {
  return (
    <View className="flex-1 bg-blue1 justify-center items-center">
      <Text>Coming Soon</Text>
    </View>
  );
};
const CompletedRoute = () => {
  return (
    <View className="flex-1 bg-blue1 justify-center items-center">
      <Text>Coming Soon</Text>
    </View>
  );
};

export default LecturesScreen;
