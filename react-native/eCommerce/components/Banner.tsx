import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import Calendar from '../assets/icons/calendar.svg';
const Banner = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '55%',
          padding: 10,
          paddingLeft: 20,
          gap: 7,
        }}>
        <Text style={styles.heading}>New Arrivals</Text>
        <Text style={styles.saleHeading}>Sale upto 60% off</Text>
        <View style={styles.pill}>
          <Calendar width={18} height={18} />
          <Text style={styles.pillText}> 25 - 30 June</Text>
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '45%'}}>
        <Image
          source={require('../assets/images/shoe.png')}
          style={{
            resizeMode: 'contain',
            width: 200,
            height: 170,
            right: 30,
            top: 30,
          }}
        />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 150,
    backgroundColor: '#fbe8e6',
    borderRadius: 10,
    width: '100%',
  },
  heading: {
    color: 'black',
    fontSize: 23,
    fontWeight: '500',
  },
  saleHeading: {
    color: '#eaa250',
    fontSize: 15,
  },
  pill: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 60,
    paddingVertical: 9,
    paddingHorizontal: 20,
  },
  pillText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
