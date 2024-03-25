import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';

const WidgetsCards = () => {
  // depend on weather the background will change
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/clouds.png')}
        style={styles.img}>
        <Image
          style={styles.image}
          source={require('../../assets/images/rainy-cloud.png')}
        />
        <View style={styles.header}>
          <Text style={styles.place}>Kochi, Kerala</Text>
          <Text style={styles.weather}>Thunder Storm</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.temp}>29°</Text>
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
    color: Colors.hash,
  },
  weather: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    color: Colors.hash,
    alignSelf: 'flex-start',
  },
  card: {
    marginLeft: 10,
  },
  temp: {
    fontSize: 44,
    fontFamily: 'Gordita-Semibold',
    color: Colors.hash,
  },
  image: {
    width: 60,
    height: 60,
  },
});
