import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {WeatherCode, WeatherCodeType} from '../../constants/WeatherCode';
import {weatherIcon} from '../../utilities/WeatherBasedIcon';

type WidgetsCardsProps = {
  time: string;
  is_day: boolean;
  city: string;
  weather: WeatherCodeType;
  temperature: number;
};

const WidgetsCards = ({
  time,
  city,
  weather,
  temperature,
  is_day,
}: WidgetsCardsProps) => {
  if (!city || !weather || !temperature || !time) {
    return null;
  }

  const bg = is_day
    ? require('../../assets/images/clouds.png')
    : require('../../assets/images/clouds-nights.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.img}>
        <Image
          style={[
            styles.image,
          ]}
          source={{uri: weatherIcon(time, weather)}}
        />
        <View style={styles.header}>
          <Text
            style={[
              styles.place,
              {color: is_day ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'},
            ]}>
            {city}
          </Text>
          <Text
            style={[
              styles.weather,
              {color: is_day ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'},
            ]}>
            {WeatherCode[weather].day.description}
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={[
              styles.temp,
              {color: is_day ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'},
            ]}>
            {temperature}°
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WidgetsCards;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    resizeMode: 'cover',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 35,
    overflow: 'hidden',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  place: {
    fontSize: 16,
    fontFamily: 'Gordita-Medium',
  },
  weather: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    alignSelf: 'flex-start',
  },
  card: {
    marginLeft: 10,
  },
  temp: {
    fontSize: 44,
    fontFamily: 'Gordita-Semibold',
  },
  image: {
    borderRadius: 5,
    width: 60,
    height: 60,
  },
});
