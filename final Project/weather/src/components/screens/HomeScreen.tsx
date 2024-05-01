import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation, {type GeoPosition} from 'react-native-geolocation-service';

import LocationIcon from '../../assets/images/location-gps.svg';
import TemperatureIcon from '../../assets/images/thermostat.svg';
import WindIcon from '../../assets/images/wind.svg';
import HumidityIcon from '../../assets/images/humidity.svg';
import {Colors} from '../../constants/UIConstants';
import TodayWeatherCardList from '../includes/TodayWeatherCardList';
import {weatherIcon} from '../../utilities/WeatherBasedIcon';
import {WeatherCodeType} from '../../constants/WeatherCode';

function TemperatureCard({
  status,
  Icon,
  Value,
}: {
  status: string;
  Icon: React.ComponentType;
  Value: string;
}) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.status}>{status}</Text>
        <Icon />
      </View>
      <Text style={styles.value}>{Value}</Text>
    </View>
  );
}
const HomeScreen = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState({
    city: '',
    country: '',
    state: '',
    time: '',
    temperature_current: '',
    wind_speed: '',
    humidity: '',
    weather_code: '',
    hourly: {temperature: [], time: [], weather_code: []},
  });
  const [location, setLocation] = useState<GeoPosition | undefined>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      await requestLocationAndFetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const requestLocationAndFetchData = async () => {
    const granted = await requestLocationPermission();
    if (granted) {
      const position = await getLocation();
      if (position) {
        await getCityName(position);
        await getCurrentWeather(position);
      }
    }
  };

  const getCityName = async (position: GeoPosition) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`,
    );
    const json = await response.json();
    setCity(prev => ({
      ...prev,
      city: json.city,
      country: json.countryName,
      state: json.principalSubdivision,
    }));
  };

  const getCurrentWeather = async (position: GeoPosition) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&hourly=temperature_2m,weather_code&forecast_days=1`,
    );
    const json = await response.json();
    setCity(prev => ({
      ...prev,
      time: json.current.time,
      temperature_current: json.current.temperature_2m,
      wind_speed: json.current.wind_speed_10m,
      humidity: json.current.relative_humidity_2m,
      weather_code: json.current.weather_code,
      hourly: {
        time: json.hourly.time,
        temperature: json.hourly.temperature_2m,
        weather_code: json.hourly.weather_code,
      },
    }));
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
      const position = await new Promise<GeoPosition>((resolve, reject) => {
        Geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        });
      });

      setLocation(position);
      return position;
    } catch (error) {
      console.error('Error getting location:', error);
      setLocation(undefined);
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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.placeText}>
          {city.city}, {city.state}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            getLocation();
            fetchData();
          }}>
          <LocationIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.timeText}>
        {new Date(city.time).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        ,{' '}
        {new Date(city.time).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: weatherIcon(city.time, city.weather_code as WeatherCodeType),
          }}
          style={styles.weatherImage}
        />
      </View>
      <View style={styles.cardContainer}>
        <TemperatureCard
          status="Temp"
          Icon={TemperatureIcon}
          Value={`${city.temperature_current} °C`}
        />
        <TemperatureCard
          status="Wind"
          Icon={WindIcon}
          Value={`${city.wind_speed} km/h`}
        />
        <TemperatureCard
          status="Humidity"
          Icon={HumidityIcon}
          Value={`${city.humidity} %`}
        />
      </View>
      <TodayWeatherCardList
        navigation={navigation}
        showSeeAll={true}
        hourly_data={city.hourly}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  placeText: {
    color: Colors.white,
    marginLeft: 25,
    fontFamily: 'Gordita-Medium',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
  },
  timeText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Gordita-Regular',
    marginBottom: 50,
  },
  imageContainer: {
    padding: 13,
    alignItems: 'center',
  },
  weatherImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  status: {
    fontFamily: 'Gordita-Medium',
    fontSize: 15,
    color: 'gray',
    backgroundColor: 'transparent',
  },
  value: {
    fontFamily: 'Gordita-Medium',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
  },
});
