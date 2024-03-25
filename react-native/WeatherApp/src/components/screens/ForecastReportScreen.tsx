import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TodayWeatherCardList from '../includes/TodayWeatherCardList';
import {Colors} from '../../constants/UIConstants';
import LongWeatherCards from '../includes/LongWeatherCards';

import DownArrowIcon from '../../assets/images/down-arrow.svg';
import GoBackIcon from '../../assets/images/go-back.svg';

const ForecastReportScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <GoBackIcon fill={Colors.white} rotate={180} width={12} height={12} />
        </TouchableOpacity>
        <Text style={styles.title}>Forecast Report</Text>
      </View>
      <TodayWeatherCardList showSeeAll={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.header}>
        <View style={styles.scrollViewContent}>
          <Text style={styles.forecast}>Next Forecast</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.seeAll}
            onPress={() => console.log('5 days pressed')}>
            <Text style={styles.seeAllText}>5 day</Text>
            <DownArrowIcon fill={Colors.white} width={12} height={12} />
          </TouchableOpacity>
        </View>

        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
        <LongWeatherCards />
      </ScrollView>
    </View>
  );
};

export default ForecastReportScreen;

const styles = StyleSheet.create({
  container: {},
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 60,
    marginLeft: 20,
  },
  backButton: {
    backgroundColor: Colors.gradientDarkBlue,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
    textAlign: 'center',
    flex: 1,
    borderWidth: 1,
  },
  forecast: {
    fontSize: 24,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 400,
    paddingHorizontal: 10,
    gap: 6,
  },
  seeAll: {
    backgroundColor: Colors.gradientDarkBlue,
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  seeAllText: {
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
    color: Colors.white,
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
