import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../includes/Header';
import CarsolCards from '../includes/CarsolCards';
import CourseGird from '../includes/CourseGird';
import TodayClass from '../includes/TodayClass';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView className="bg-blue1">
        <CarsolCards />
        <Text className="self-start m-4 font-bold text-grey5 text-h4">
          Choose Your Course
        </Text>
        <CourseGird />
        <Text className="self-start m-4 font-bold text-grey5 text-h4">
          Today's Lecture
        </Text>
        <TodayClass
          image={require('../../assets/images/images/maths.png')}
          precentage={30}
          title="Maths"
        />
        <TodayClass
          image={require('../../assets/images/images/maths.png')}
          precentage={30}
          title="Maths"
        />
        <TodayClass
          image={require('../../assets/images/images/maths.png')}
          precentage={30}
          title="Maths"
        />
        <TodayClass
          image={require('../../assets/images/images/maths.png')}
          precentage={100}
          title="Maths"
        />
        <TodayClass
          image={require('../../assets/images/images/maths.png')}
          precentage={30}
          title="Maths"
        />
      </ScrollView>
      <StatusBar hidden={true} />
    </>
  );
};

export default HomeScreen;
