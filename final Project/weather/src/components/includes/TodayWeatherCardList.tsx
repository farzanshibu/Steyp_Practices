import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from '../../constants/UIConstants';
import WeatherCards from './WeatherCards';
import type {WeatherCodeType} from '../../constants/WeatherCode';

const TodayWeatherCardList = ({
  navigation,
  showSeeAll,
  hourly_data,
}: {
  navigation?: any;
  showSeeAll: boolean;
  hourly_data: {
    temperature: number[];
    time: string[];
    weather_code: WeatherCodeType[];
  };
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        {showSeeAll ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ForecastReport')}>
            <Text style={styles.seeAll}>view all</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}>
        {hourly_data.temperature.map((temperature, index) => (
          <WeatherCards
            index={index}
            key={index}
            temperature={temperature}
            time={hourly_data.time[index]}
            weather_code={hourly_data.weather_code[index]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TodayWeatherCardList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    marginBottom: 30,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Gordita-Regular',
    color: 'lightgray',
  },
  scrollView: {
    paddingLeft: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingRight: 30,
  },
});
