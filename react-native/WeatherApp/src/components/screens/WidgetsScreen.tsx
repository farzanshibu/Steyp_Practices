import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsCards from '../includes/WidgetsCards';
import {Colors} from '../../constants/UIConstants';
import FAButton from '../includes/FAButton';

const WidgetsScreen = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.scrollViewContent}>
          <Text style={styles.title}>Widgets</Text>
          {/* TODO: Add ScrollView with LongWeatherCards */}
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
          <WidgetsCards />
        </View>
      </ScrollView>
      <FAButton title="+" />
    </>
  );
};

export default WidgetsScreen;

const styles = StyleSheet.create({
  container: {},
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
