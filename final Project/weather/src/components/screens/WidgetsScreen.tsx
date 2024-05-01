import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import WidgetsCards from '../includes/WidgetsCards';
import {Colors} from '../../constants/UIConstants';
import MultiSelectComponent from '../includes/Dropdown-list';
import type {WeatherCodeType} from '../../constants/WeatherCode';

type PlaceType = {
  id: number;
  isday: boolean;
  time: string;
  temperature: number;
  weather: string;
  place: string;
  latitude: number;
  longitude: number;
};

const WidgetsScreen = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);

  useEffect(() => {
    fetchData();
  }, [places]);

  const fetchData = async () => {
    for (let i = 0; i < places.length; i++) {
      if (
        !places[i].isday ||
        !places[i].time ||
        !places[i].temperature ||
        !places[i].weather
      ) {
        await weatherFetcher(places[i].latitude, places[i].longitude, i);
      }
    }
  };

  const weatherFetcher = async (
    latitude: number,
    longitude: number,
    index: number,
  ) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=is_day&forecast_days=1`,
      );
      const data = await response.json();
      if (places[index]) {
        setPlaces(prev => {
          prev[index].isday = data.current.is_day;
          prev[index].time = data.current.time;
          prev[index].temperature = data.daily.temperature_2m_max;
          prev[index].weather = data.daily.weather_code;
          return prev;
        });
      } else {
        setPlaces(prev => {
          prev.push({
            id: index,
            isday: data.current.is_day,
            time: data.current.time,
            temperature: data.daily.temperature_2m_max,
            weather: data.daily.weather_code,
            place: prev[index].place,
            latitude: prev[index].latitude,
            longitude: prev[index].longitude,
          });
          return prev;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Text style={styles.title}>Widgets</Text>
      <MultiSelectComponent
        places={places}
        setPlaces={setPlaces}
        fetchData={fetchData}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewContent}>
          {places.length === 0 ? (
            <Text>No places selected</Text>
          ) : (
            places.map((place, index) => (
              <WidgetsCards
                key={index}
                city={place.place}
                time={place.time}
                temperature={place.temperature}
                weather={place.weather as WeatherCodeType}
                is_day={place.isday}
              />
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default WidgetsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
  },

  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});
