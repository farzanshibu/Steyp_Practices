import {
  ActivityIndicator,
  FlatList,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TodayWeatherCardList from '../includes/TodayWeatherCardList';
import {Colors} from '../../constants/UIConstants';
import LongWeatherCards from '../includes/LongWeatherCards';

import DownArrowIcon from '../../assets/images/down-arrow.svg';
import GoBackIcon from '../../assets/images/go-back.svg';
import Geolocation, {type GeoPosition} from 'react-native-geolocation-service';

const ForecastReportScreen = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(5);
  const [todayForecast, setTodayForecast] = useState({
    hourly: {temperature: [], time: [], weather_code: []},
  });
  const [forecast, setForecast] = useState({
    daily: {
      date: [],
      weather_code: [],
      temperature_max: [],
      temperature_min: [],
    },
  });
  const [location, setLocation] = useState<GeoPosition | undefined>();

  useEffect(() => {
    fetchData();
    return () => {
      Geolocation.stopObserving();
    };
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const granted = await requestLocationPermission();
      if (granted) {
        const position = await getLocation();
        if (position) {
          await Promise.all([
            getTodayForecast(position),
            getForecast(position),
          ]);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTodayForecast = async (position: GeoPosition) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,weather_code&forecast_days=1`,
      );
      const json = await response.json();
      setTodayForecast(prev => ({
        ...prev,
        hourly: {
          time: json.hourly.time,
          temperature: json.hourly.temperature_2m,
          weather_code: json.hourly.weather_code,
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const getForecast = async (position: GeoPosition) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=${days}`,
      );
      const json = await response.json();
      setForecast(prev => ({
        ...prev,
        daily: {
          date: json.daily.time,
          weather_code: json.daily.weather_code,
          temperature_max: json.daily.temperature_2m_max,
          temperature_min: json.daily.temperature_2m_min,
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const requestLocationPermission = async (): Promise<boolean> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error('Error requesting location permission:', err);
      return false;
    }
  };

  const getLocation = async (): Promise<GeoPosition | undefined> => {
    try {
      return await new Promise<GeoPosition>((resolve, reject) => {
        Geolocation.getCurrentPosition(
          resolve,
          error => {
            console.error('Error getting location:', error);
            reject(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      });
    } catch (error) {
      console.error('Error getting location:', error);
      return undefined;
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }
  return (
    <View>
      <View style={styles.main}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <GoBackIcon
            fill={Colors.white}
            width={12}
            height={12}
            style={{transform: [{rotate: '0deg'}]}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Forecast Report</Text>
      </View>
      <TodayWeatherCardList
        showSeeAll={false}
        hourly_data={todayForecast.hourly}
      />
      <View style={styles.scrollViewContent}>
        <Text style={styles.forecast}>Next Forecast</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.seeAll}
          onPress={() => {
            getForecast(location as GeoPosition);
          }}>
          <Text style={styles.seeAllText}>{days} day</Text>
          <DownArrowIcon fill={Colors.white} width={12} height={12} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.header}>
        {forecast.daily.date.map((date, index) => (
          <React.Fragment key={date}>
            <LongWeatherCards
              date={date}
              weather_code={forecast.daily.weather_code[index]}
              temperature_max={forecast.daily.temperature_max[index]}
              temperature_min={forecast.daily.temperature_min[index]}
            />
            {index === forecast.daily.date.length - 1 ? (
              <View style={{marginBottom: 100}} />
            ) : null}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default ForecastReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
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
