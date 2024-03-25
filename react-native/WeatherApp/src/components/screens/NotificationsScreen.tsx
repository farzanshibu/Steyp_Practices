import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';
import NotificationCard from '../includes/NotificationCard';

const NotificationsScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.scrollViewContent}>
        <Text style={styles.title}>Notification</Text>

        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </View>
    </ScrollView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 28,
    fontFamily: 'Gordita-Medium',
    color: Colors.white,
    marginTop: 60,
    textAlign: 'center',
  },

  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
});
