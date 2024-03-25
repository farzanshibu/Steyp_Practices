import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

import LocationIcon from '../../assets/images/location-gps.svg';
import TemperatureIcon from '../../assets/images/thermostat.svg';
import WindIcon from '../../assets/images/wind.svg';
import HumidityIcon from '../../assets/images/humidity.svg';
import {Colors} from '../../constants/UIConstants';
import TodayWeatherCardList from '../includes/TodayWeatherCardList';

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
  const [location, setLocation] = useState<GeoPosition | undefined>();
  const requestLocationPermission = async () => {
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
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.placeText}>Kochi, Kerala</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log('Locations pressed');
            requestLocationPermission();
            getLocation();
          }}>
          <LocationIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.timeText}>June 20, 12:00 AM</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/rainy-cloud.png')}
          style={styles.weatherImage}
        />
      </View>
      <View style={styles.cardContainer}>
        <TemperatureCard status="Temp" Icon={TemperatureIcon} Value="20°C" />
        <TemperatureCard status="Wind" Icon={WindIcon} Value="7.90km/h" />
        <TemperatureCard status="Humidity" Icon={HumidityIcon} Value="84%" />
      </View>
      <TodayWeatherCardList navigation={navigation} showSeeAll={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  placeText: {
    color: Colors.white,
    marginLeft: 25,
    fontFamily: 'Gordita-Medium',
    fontSize: 25,
    flex: 1,
    textAlign: 'center',
  },
  timeText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    padding: 13,
    fontFamily: 'Gordita-Regular',
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
