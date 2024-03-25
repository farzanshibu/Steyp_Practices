import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from '../../constants/UIConstants';
import WeatherCards from './WeatherCards';

const TodayWeatherCardList = ({
  navigation,
  showSeeAll,
}: {
  navigation?: any;
  showSeeAll: boolean;
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
        <WeatherCards index={0} />
        <WeatherCards index={1} />
        <WeatherCards index={2} />
        <WeatherCards index={3} />
        <WeatherCards index={4} />
        <WeatherCards index={5} />
        <WeatherCards index={6} />
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
