import {WeatherCode, WeatherCodeType} from '../constants/WeatherCode';

export const weatherIcon = (time: string, weather_code: WeatherCodeType) => {
  // check if weather code is not available
  if (!WeatherCode[weather_code]) {
    return 'https://cdn-icons-png.flaticon.com/512/2212/2212806.png';
  }
  // check day or night based on time
  if (!time) {
    return WeatherCode[weather_code].day.image;
  }

  const hour = new Date(time).getHours();
  const isDay = hour > 6 && hour < 18;
  return isDay
    ? WeatherCode[weather_code].day.image
    : WeatherCode[weather_code].night.image;
};
