import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CourseCard from '../includes/CourseCard';
import AccountList from '../includes/AccountList';
import ProfileHeader from '../includes/ProfileHeader';

const ProfileScreen = () => {
  return (
    <ScrollView className="bg-blue1" showsVerticalScrollIndicator={false}>
      <ProfileHeader />
      <Text className="self-start m-4 font-bold text-grey3 text-h2">
        Choose You're Course
      </Text>
      <CourseCard />
      <Text className="self-start m-4 font-bold text-grey3 text-h2">
        Account
      </Text>
      <AccountList />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
