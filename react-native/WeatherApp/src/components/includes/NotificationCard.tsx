import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';

const NotificationCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/rainy-cloud.png')}
          />
        </View>
        <Text style={styles.title}>NotificationCards</Text>
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        voluptate, quidem obcaecati quae doloribus nemo culpa quo praesentium
        similique quod quaerat officia est sequi ullam.
      </Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gradientLightBlue,
    borderRadius: 20,
    width: '90%',
  },
  imageContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    padding: 15,
    marginRight: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Gordita-Medium',
    flex: 1,
    color: Colors.white,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    color: Colors.white,
    lineHeight: 24,
  },
});
