import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/UIConstants';
import NotificationCard from '../includes/NotificationCard';
import {NotificationData} from '../../constants/NotificationData';

const NotificationsScreen = () => {
  return (
    <>
      <Text style={styles.title}>Notification</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.scrollViewContent}>
          {NotificationData.map((notification, index) => (
            <NotificationCard
              message={notification.message}
              key={notification.id}
              type={notification.type}
            />
          ))}
        </View>
      </ScrollView>
    </>
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
    marginBottom: 20,
    textAlign: 'center',
  },

  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
});
